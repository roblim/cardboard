import { RECEIVE_COMMENTS,
         RECEIVE_COMMENT,
         DELETE_COMMENT } from '../actions/comment_actions';

import merge from 'lodash/merge';

const CommentReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_COMMENTS:
      return merge({}, state, action.comments);
    case RECEIVE_CARD:
      newState = merge({}, state);
      newState[action.comment.id] = action.comment;
      return comment;
    case DELETE_CARD:
      newState = merge({}, state);
      delete newState[action.comment.id];
      return newState;
    default:
      return state;
  }
};

export default CommentReducer;