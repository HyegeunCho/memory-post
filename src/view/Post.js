import React, {Component} from 'react';
import './Post.css';

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.onFlip = this.onFlip.bind(this);
        this.onPrevious = this.onPrevious.bind(this);
        this.onNext = this.onNext.bind(this);
        this.state = {
            isFront: true
        };
    }

    onFlip(e) {
        this.setState(function(prevState) {
            return {
                isFront: !prevState.isFront
            };
        });
    }

    onPrevious(e) {
        this.props.onPrevious(e);
    }

    onNext(e) {
        this.props.onNext(e);
    }

    onIncreaseWeight(e) {
        this.props.onChangeWeight(1);
    }

    onDecreaseWeight(e) {
        this.props.onChangeWeight(-1);
    }

    render() {
        var index = this.props.index;
        var frontType = this.props.frontType;
        var frontData = this.props.frontData;
        var backType = this.props.backType;
        var backData = this.props.backData;
        var weight = this.props.weight;
        return (
            <div className='Post-container'>
                <span className='Post-badge'>{index}</span>
                <div className='Post-memory' onClick={this.onFlip}>{this.state.isFront ? frontData : backData}</div>
                <div className='Post-footer'>
                    <button className='Post-previous' onClick={this.onPrevious}>Previous</button>
                    <div className='Post-weight'>
                        <span className='Post-minus' onClick={this.onDecreaseWeight}>-</span>
                        <span className='Post-value'>{weight}</span>
                        <span className='Post-plus' onClick={this.onIncreaseWeight}>+</span>
                    </div>
                    <button className='Post-next' onClick={this.onNext}>Next</button>
                </div>
            </div>
        );
    }
}