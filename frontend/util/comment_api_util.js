const getComments = (cardId) => (
  $.ajax({
    url: `/api/cards/${cardId}/comments`
  })
);

const postComment = (comment) => (
  $.ajax({
    url: 'api/comments',
    method: 'post',
    data: { comment }
  })
);

const patchComment = (comment) => (
  $.ajax({
    url: `/api/comments/${comment.id}`,
    method: 'patch',
    data: { comment }
  })
);

const deleteComment = (commentId) => (
  $.ajax({
    url: `/api/comments/${commentId}`
  })
);

export { getComments, postComment, patchComment, deleteComment };
