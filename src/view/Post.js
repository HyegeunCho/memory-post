import React, {Component} from 'react';
import './Post.css';
import DATA_POST from '../resource/MockData';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.data = DATA_POST;
        this.onFlip = this.onFlip.bind(this);
        this.onPrevious = this.onPrevious.bind(this);
        this.onNext = this.onNext.bind(this);
        this.state = {
            isFront: true, 
            index: 0
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
        this.setState(function(prevState) {
            return {
                isFront: true, 
                index: (prevState.index === 0 ? 0 : prevState.index - 1)
            };
        });
        // this.props.onPrevious(e);
    }

    onNext(e) {
        this.setState(function(prevState) {
            return {
                isFront: true, 
                index: (prevState.index === this.data.length - 1 ? prevState.index : prevState.index + 1)
            };
        });
        // this.props.onNext(e);
    }

    onIncreaseWeight(e) {
        // this.props.onChangeWeight(1);
    }

    onDecreaseWeight(e) {
        // this.props.onChangeWeight(-1);
    }

    render() {
        var index = this.props.index;
        var frontType = this.props.frontType;
        // var frontData = this.props.frontData;
        var frontData = this.data[this.state.index].front;
        var backType = this.props.backType;
        // var backData = this.props.backData;
        var backData = this.data[this.state.index].back;
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