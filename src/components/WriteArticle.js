import React, { Component } from 'react';

class WriteArticle extends Component {
  constructor(props) {
    super(props);
  }

  moveToArticle = () => {
    this.props.moveToArticle(this.props.article);
  };

  render() {
    return (
      <div>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">With textarea</span>
          </div>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
      </div>
    );
  }
}

export default WriteArticle;
