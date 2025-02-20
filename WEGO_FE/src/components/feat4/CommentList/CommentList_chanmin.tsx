import * as S from './CommentList.style';
import { useState, useEffect, useRef } from 'react';
import { TCommentData } from '../../../pages/feat_4/board-detail/BoardDetailPage';
import { IoPerson } from 'react-icons/io5';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router';

interface CommentListProps {
  comments: TCommentData[];
  onDeleteComment: (delComment: {
    post_id: number;
    comment_id: number;
  }) => void;
  postId: number;
}

const timeAgoFormat = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffDay > 0) return `${diffDay}일 전`;
  if (diffHour > 0) return `${diffHour}시간 전`;
  if (diffMin > 0) return `${diffMin}분 전`;
  return '방금 전';
};

const CommentList_chanmin: React.FC<CommentListProps> = ({
  comments,
  onDeleteComment,
  postId,
}) => {
  const commentEndRef = useRef<HTMLDivElement | null>(null);
  const [prevCommentsLength, setPrevCommentsLength] = useState(comments.length);
  const navigate = useNavigate();

  // 댓글이 추가될 때만 하단 스크롤(첫 렌더링 제외)
  useEffect(() => {
    if (comments.length > prevCommentsLength) {
      commentEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    setPrevCommentsLength(comments.length);
  }, [comments, prevCommentsLength]);

  const handleDeleteComment = (postId: number, commentId: number) => {
    // postId와 commentId는 string으로 유지
    if (onDeleteComment) {
      onDeleteComment({ post_id: postId, comment_id: commentId });
    }
  };

  const handleProfileButtonClick = (authorId: number) => {
    navigate(`/board/author/profile/${authorId}`, {
      state: { authorId },
    });
  };

  return (
    <div>
      {comments.map((comment: TCommentData, index: number) => (
        <S.Container key={index}>
          <S.CommentBox>
            {comment.comment_author_profile ? (
              <img
                src={comment.comment_author_profile}
                alt={`${comment.comment_author_name} profile`}
                onClick={() => handleProfileButtonClick(comment.user_id)}
              />
            ) : (
              <IoPerson
                size="24"
                onClick={() => handleProfileButtonClick(comment.user_id)}
              />
            )}

            <S.Comment>
              <div>
                <div>
                  <h5>{comment.comment_author_name}</h5>
                  <h6>{timeAgoFormat(comment.comment_created_at)}</h6>
                </div>
                <button
                  onClick={() =>
                    handleDeleteComment(postId, comment.comment_id)
                  }
                >
                  <FaTimes size="16" />
                </button>
              </div>
              <p>{comment.comment_content}</p>
            </S.Comment>
          </S.CommentBox>
        </S.Container>
      ))}
      <div ref={commentEndRef} />
    </div>
  );
};

export default CommentList_chanmin;
