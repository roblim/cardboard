import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BoardIndexItem from './board_index_item';

class BoardIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBoards();
  }

  render() {
    if (!this.props.boards) { return null; }
    return(
      <div className="board-index-container">
        <h1>Private Boards</h1>
        <div className="board-index-box">
          {this.props.boards.map((board, idx) => (
            <BoardIndexItem board={board} key={`board-${idx}`} />
            )
          )}
          <Link to="/boards/new">
            <div className="new-board-tile">
              <div className="new-board-tile-text">
                Create new board...
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(BoardIndex);
