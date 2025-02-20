import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
// import { createCommentApi, deleteCommentApi } from '../../apis/feat4/chanApis';
import {
  createCommentApi,
  deleteCommentApi,
  deleteScrapApi,
  getPostByIdApi,
  likePostApi,
  scrapPostApi,
  unlikePostApi,
} from '../../apis/feat4/postApi';
import { TPostDetailResData } from '../../pages/feat_4/board-detail/BoardDetailPage';

export const usePostDetail = (postId: number) => {
  return useQuery<TPostDetailResData, Error>({
    queryKey: ['post', postId], // ✅ 올바른 queryKey 사용
    queryFn: () => getPostByIdApi(postId),
    staleTime: 1000 * 10, // 1분 캐시 유지
    refetchOnWindowFocus: true, // 창 포커스 시 데이터 다시 가져와
  });
};

export const usePostActions = (postId: number) => {
  const queryClient = useQueryClient();

  // ✅ 댓글 추가 mutation
  const createCommentMutation = useMutation({
    mutationFn: (newComment: { post_id: number; content: string }) =>
      createCommentApi(newComment.post_id, newComment.content),

    onMutate: async newComment => {
      await queryClient.cancelQueries(['post', postId]); // 기존 쿼리 중단
      const prevPostData = queryClient.getQueryData(['post', postId]); // 이전 데이터 저장

      // ✅ 낙관적 업데이트 (Optimistic Update)
      // TODO: 25/02/11 old?.post?.comments가 되어야하는거 아닌가...?
      queryClient.setQueryData(['post', postId], old => ({
        ...old,
        comments: old?.comments ? [...old.comments, newComment] : [newComment],
      }));

      return { prevPostData };
    },

    onError: (err, newComment, context) => {
      queryClient.setQueryData(['post', postId], context?.prevPostData || null);
    },

    onSettled: () => {
      queryClient.invalidateQueries(['post', postId]); // ✅ 최종 데이터 갱신
    },
  });

  // ✅ 댓글 삭제 mutation
  const deleteCommentMutation = useMutation({
    mutationFn: (delComment: { post_id: number; comment_id: number }) =>
      deleteCommentApi(delComment.post_id, delComment.comment_id),

    onMutate: async delComment => {
      await queryClient.cancelQueries(['post', postId]); // 기존 쿼리 중단
      const prevPostData = queryClient.getQueryData(['post', postId]); // 이전 데이터 저장

      // ✅ 삭제된 댓글을 제외하고 업데이트
      queryClient.setQueryData(['post', postId], old => ({
        ...old,
        comments: old?.comments
          ? old.comments.filter(comment => comment.id !== delComment.comment_id)
          : [],
      }));

      return { prevPostData };
    },

    onError: (err, delComment, context) => {
      queryClient.setQueryData(['post', postId], context?.prevPostData || null);
    },

    onSettled: () => {
      queryClient.invalidateQueries(['post', postId]); // ✅ 최종 데이터 갱신
    },
  });

  const postLikeMutation = useMutation({
    mutationFn: (likeData: { postId: number }) => likePostApi(likeData.postId),

    onMutate: async likeStat => {
      await queryClient.cancelQueries(['post', postId]); // 기존 쿼리 중단
      const prevPostData = queryClient.getQueryData(['post', postId]); // 이전 데이터 저장

      console.log(prevPostData);
      queryClient.setQueryData(['post', postId], old => ({
        ...old,
        post_info: old?.post_info
          ? { ...old.post_info, like_counts: likeStat.post.like_counts + 1 }
          : old.post_info,
      }));

      return { prevPostData };
    },

    onError: (err, likeStat, context) => {
      queryClient.setQueryData(['post', postId], context?.prevPostData || null);
    },

    onSettled: () => {
      queryClient.invalidateQueries(['post', postId]); // ✅ 최종 데이터 갱신
    },
  });

  const postUnlikeMutation = useMutation({
    mutationFn: (likeData: { postId: number }) =>
      unlikePostApi(likeData.postId),

    onMutate: async likeStat => {
      await queryClient.cancelQueries(['post', postId]); // 기존 쿼리 중단
      const prevPostData = queryClient.getQueryData(['post', postId]); // 이전 데이터 저장

      queryClient.setQueryData(['post', postId], old => ({
        ...old,
        post_info: old?.post_info
          ? { ...old.post_info, like_counts: likeStat.like_counts - 1 }
          : old.post_info,
      }));

      return { prevPostData };
    },

    onError: (err, likeStat, context) => {
      queryClient.setQueryData(['post', postId], context?.prevPostData || null);
    },

    onSettled: () => {
      queryClient.invalidateQueries(['post', postId]); // ✅ 최종 데이터 갱신
    },
  });

  const postScrapMutation = useMutation({
    mutationFn: (scrapData: { postId: number }) =>
      scrapPostApi(scrapData.postId),

    onMutate: async scrapData => {
      await queryClient.cancelQueries(['post', postId]); // 기존 쿼리 중단
      const prevPostData = queryClient.getQueryData(['post', postId]); // 이전 데이터 저장

      queryClient.setQueryData(['post', postId], old => ({
        ...old,
        post_info: old?.post_info
          ? { ...old.post_info, like_counts: scrapData.total_scrap + 1 }
          : old.post_info,
      }));

      return { prevPostData };
    },

    onError: (err, scrapData, context) => {
      queryClient.setQueryData(['post', postId], context?.prevPostData || null);
    },

    onSettled: () => {
      queryClient.invalidateQueries(['post', postId]); // ✅ 최종 데이터 갱신
    },
  });

  const postUnscrapMutation = useMutation({
    mutationFn: (scrapData: { postId: number }) =>
      deleteScrapApi(scrapData.postId),

    onMutate: async scrapData => {
      await queryClient.cancelQueries(['post', postId]); // 기존 쿼리 중단
      const prevPostData = queryClient.getQueryData(['post', postId]); // 이전 데이터 저장

      queryClient.setQueryData(['post', postId], old => ({
        ...old,
        post_info: old?.post_info
          ? {
              ...old.post_info,
              like_counts: scrapData.total_scrap > 1 ? -1 : 0,
            }
          : old.post_info,
      }));

      return { prevPostData };
    },

    onError: (err, scrapData, context) => {
      queryClient.setQueryData(['post', postId], context?.prevPostData || null);
    },

    onSettled: () => {
      queryClient.invalidateQueries(['post', postId]); // ✅ 최종 데이터 갱신
    },
  });

  return {
    addComment: createCommentMutation.mutate,
    deleteComment: deleteCommentMutation.mutate,
    likePost: postLikeMutation.mutate,
    unlikePost: postUnlikeMutation.mutate,
    scrapPost: postScrapMutation.mutate,
    unscrapPost: postUnscrapMutation.mutate,
    isAdding: createCommentMutation.isPending,
    isDeleting: deleteCommentMutation.isPending,
    isLiking: postLikeMutation.isPending,
    isUnliking: postUnlikeMutation.isPending,
    isScrapping: postScrapMutation.isPending,
    isUnScrapping: postUnscrapMutation.isPending,
  };
};

export default usePostActions;
