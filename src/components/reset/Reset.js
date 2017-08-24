import React, { Component } from 'react';
import './Reset.css';

export default class Reset extends Component {
  
    onResetClick(reset) {
      reset();
    }
  
    render() {
      return (
        <div className='reset' >
          <div className="container">
            <div className="front" onClick={() => this.onResetClick(this.props.reset)}>
              Reset
            </div>
          </div>
        </div>
      );
    }
  }