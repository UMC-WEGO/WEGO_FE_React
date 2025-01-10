import { useState } from 'react';
import * as S from './CommentInput.style';
import { TbPhotoSquareRounded, TbSend } from 'react-icons/tb';

interface CommentInputProps {
  onAddComment: (comment: string) => void;
}

const CommentInput: React.FC<CommentInputProps> = ({ onAddComment }) => {
  const [comment, setComment] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment.trim()) {
      onAddComment(comment);
      setComment('');
    }
  };

  return (
    <S.Container onSubmit={handleSubmit}>
      <span>
        <TbPhotoSquareRounded />
      </span>
      <S.InputContainer>
        <input
          type="text"
          value={comment}
          onChange={e => setComment(e.target.value)}
          placeholder="댓글을 입력하세요..."
        />
        <button type="submit">
          <span>
            <TbSend />
          </span>
        </button>
      </S.InputContainer>
    </S.Container>
  );
};

export default CommentInput;
