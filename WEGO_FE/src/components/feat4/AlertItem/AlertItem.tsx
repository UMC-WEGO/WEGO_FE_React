import * as S from './AlertItem.style';
import { PiChatTextBold } from 'react-icons/pi';
import { HiMiniXMark } from 'react-icons/hi2';

interface AlertItemProps {
  author: string;
  title: string;
  content: string;
  date: string;
}

const AlertItem: React.FC<AlertItemProps> = ({
  author,
  title,
  content,
  date,
}) => {
  return (
    <S.Container>
      <S.Icon>
        <PiChatTextBold />
      </S.Icon>
      <S.Content>
        <p>
          <span>{author}</span>님이 <strong>{title}</strong> 글에 댓글을
          남겼습니다.
        </p>
        <h3>{content}</h3>
        <h5>{date}</h5>
      </S.Content>
      <S.CloseIcon>
        <HiMiniXMark />
      </S.CloseIcon>
    </S.Container>
  );
};

export default AlertItem;
