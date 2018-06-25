import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Post from './view/Post';
import SignInScreen from './SignInScreen';

export default class App extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={SignInScreen}/>
                <Route path='/post' component={Post}/>
            </div>
        );
    }
}
