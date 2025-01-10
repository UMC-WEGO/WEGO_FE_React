import * as S from './CommentList.style';

interface Comment {
  username: string;
  text: string;
  time: string;
  profileImage: string;
}

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div>
      {comments.map((comment: Comment, index: number) => (
        <S.Container key={index}>
          <S.CommentBox>
            <img
              src={comment.profileImage}
              alt={`${comment.username} profile`}
            />
            <S.Comment>
              <div>
                <h5>{comment.username}</h5>
                <h6>{comment.time}</h6>
              </div>
              <p>{comment.text}</p>
            </S.Comment>
          </S.CommentBox>
        </S.Container>
      ))}
    </div>
  );
};

export default CommentList;
