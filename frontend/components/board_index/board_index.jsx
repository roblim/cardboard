import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import BoardIndexItem from './board_index_item';
import BoardFormContainer from './board_form_container';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class BoardIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addBoardActive: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoards(this.props.userId);
  }

  handleClick() {
    this.setState( { addBoardActive: true } );
  }

  addBoard() {
    if (!this.state.addBoardActive) {
      return(
        <div className="new-board-tile" onClick={this.handleClick}>
          <div className="new-board-tile-text">
            Create new board...
          </div>
        </div>
      )
    } else {
      return(
        <BoardFormContainer that={this}/>
      )
    }
  }

  render() {
    if (!this.props.boards) { return null; }
    return(
      <div className="board-index-container">
        <h1 className="board-index-title">Private Boards</h1>
        <div className="board-index-box">
          {this.props.boards.map((board, idx) => (
            <BoardIndexItem board={board} key={`board-${idx}`} />
            )
          )}
          {this.addBoard()}
        </div>
      </div>
    );
  }
}

export default withRouter(BoardIndex);
