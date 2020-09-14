# Amplify vs Cognito SDK bundle size test

Repo that tests the bundle sizes of AWS Amplify vs Cognito SDKs.

```js
import Amplify from '@aws-amplify/core'
import Auth from '@aws-amplify/auth'
```

vs

```js
import { CognitoUser, AuthenticationDetails, CognitoUserPool } from 'amazon-cognito-identity-js'
import CognitoIdentityServiceProvider from 'aws-sdk/clients/cognitoidentityserviceprovider'
```

## Winner

Amplify by 21.43kb
