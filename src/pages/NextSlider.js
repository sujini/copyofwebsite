import React, { Component  } from 'react';

class NextSlider extends Component {
    render() {
        return(
            <div className={this.props.cls} onClick={this.props.next}>
                <div className="head-line split-lines a-slide-text">{this.props.headline} </div>
                <div className="name split-lines split-lines a-slide-text">{this.props.name} </div>
            </div>
        );
    }
}

export default NextSlider;