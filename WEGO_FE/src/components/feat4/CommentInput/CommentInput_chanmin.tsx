import React from 'react'
import { useState } from 'react';
import * as S from './CommentInput.style';
import { TbSend } from 'react-icons/tb';

type TAddCommentApiReqData = {
  content: string;
  user_id: number;
  post_id: number;
}

interface CommentInputProps {
  onAddComment: (reqData:TAddCommentApiReqData) => void;
  userId:number;
  postId:number;
}

export const CommentInput_chanmin : React.FC<CommentInputProps> = ({ onAddComment, userId, postId }) => { 
  const [comment, setComment] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment.trim()) {
      onAddComment({
        content:comment,
        user_id:userId,
        post_id:postId
      });
      setComment('');
    }
    else{
      alert("내용을 입력하세요!")
    }
  };

  return (
    <S.Container onSubmit={handleSubmit}>
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
}

export default CommentInput_chanmin

