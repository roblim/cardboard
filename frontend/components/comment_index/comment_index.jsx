import React from 'react'
import { withRouter } from 'react-router-dom';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchComments(this.props.cardId);
  }

  render() {
    if (!this.props.comments) { return null; }

    return(
      <div className="comment-index-container">
        <h4>Comments</h4>
        <div className="comment-index-box">
          {this.props.comments.map((comment, idx) => (
            <CommentIndexItem comment={comment} key={`comment-${idx}`} />
          )
        )}
        </div>
      </div>
    )
  }
}

export default withRouter(CommentIndex);
