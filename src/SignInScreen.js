import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import React, {Component} from 'react';

export default class SignInScreen extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isSignedIn: false
        };

        this.uiConfig = {
            // Popup signin flow rather than redirect flow
            signInFlow: 'popup',
            // Redirect to /signedIn after sign in is successful.
            // Alternatively you can provide a callbacks.signInSuccess function
            signInSuccessUrl: '/signedIn', 
            // We will display Google and Facebook as auth proviers.
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID, 
                firebase.auth.FacebookAuthProvider.PROVIDER_ID
            ]
        };
    }

    // Listen to the FIrebase Auth state and set the local state.
    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => this.setState({isSignedIn: !!user}));
    }

    // Make sure we un-regiseter Firebase boservers when the component unmounts.
    componentWillUnmount() {
        this.unregisterAuthObserver();
    }

    render() {
        if (!this.state.isSignedIn) {
            return (
                <div>
                    <h1>Memory Post</h1>
                    <p>Please sign-in</p>
                    <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
                </div>
            );
        }

        return (
            <div>
                <h1>Memory Post</h1>
                <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
                <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
            </div>
        );
    }
}
