/* eslint-disable */
import React from 'react';

// Remove / below to disable cognito SDK
/*
import { CognitoUser, AuthenticationDetails, CognitoUserPool } from 'amazon-cognito-identity-js'
import CognitoIdentityServiceProvider from 'aws-sdk/clients/cognitoidentityserviceprovider'
console.log('CognitoIdentityServiceProvider', CognitoIdentityServiceProvider)
console.log('CognitoUser', CognitoUser)
console.log('AuthenticationDetails', AuthenticationDetails)
console.log('CognitoUserPool', CognitoUserPool)
/**/

// Uncomment for amplify deps
//*
import Amplify from '@aws-amplify/core'
import Auth from '@aws-amplify/auth'
console.log('Amplify', Amplify)
console.log('Auth', Auth)

const config = {
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_j1221S4',
    USER_POOL_DOMAIN: 'testing-api-xyz',
    SIGNIN_CALLBACK: 'http://localhost:3000/login/oauth2/code/cognito',
    SIGNOUT_CALLBACK: 'http://localhost:3000/logout',
    APP_CLIENT_ID: '5j6ivro7ers112131121',
    IDENTITY_POOL_ID: 'us-east-1:2313121-f816-4de5-a606-23123',
  }
}

Auth.init({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  },
})
/**/


function App() {
  return (
    <div className="App">
      size test
    </div>
  );
}

export default App;
