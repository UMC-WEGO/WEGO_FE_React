import * as S from './CommentList.style';
import { useState, useEffect, useRef } from 'react';
import { TCommentData } from '../../../pages/feat_4/board-detail/BoardDetailPage';
import { IoPerson } from "react-icons/io5";

interface CommentListProps {
  comments: TCommentData[];
}

const CommentList_chanmin: React.FC<CommentListProps> = ({ comments }) => {
  const commentEndRef = useRef<HTMLDivElement | null>(null);
  const [prevCommentsLength, setPrevCommentsLength] = useState(comments.length);

  // 댓글이 추가될 때만 하단 스크롤(첫 렌더링 제외)
  useEffect(() => {
    if (comments.length > prevCommentsLength) {
      commentEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    setPrevCommentsLength(comments.length);
  }, [comments, prevCommentsLength]);

  return (
    <div>
      {comments.map((comment: TCommentData, index: number) => (
        <S.Container key={index}>
          <S.CommentBox>
            {comment.comment_author_profile ? <img
              src={comment.comment_author_profile}
              alt={`${comment.comment_author_name} profile`}
            /> :
            <IoPerson size="24"/>
            }
            
            <S.Comment>
              <div>
                <h5>{comment.comment_author_name}</h5>
                <h6>{comment.comment_created_at}</h6>
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
