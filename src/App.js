import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Post from './view/Post';
import NoteList from './view/NoteList';
import SignInScreen from './SignInScreen';

import logo from './logo.svg';
import './App.css';

class Logo extends Component {
    render()  {
        return (
            <div className='App'>
                <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo'/>
                    <h1 className='App-title'>Welcome to MemoryPost</h1>
                </header>
            </div>
        );
    }
}

export default class App extends Component {
    render() {
        return (

            <div>
                <Logo/>
                <Route exact path='/' component={SignInScreen}/>
                <Route path='/notes' component={NoteList} />
                <Route path='/post' component={Post}/>
            </div>
        );
    }
}
