import React from 'react';
import fetch from 'node-fetch';
import Cookiez from 'next-cookies';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import LoginView from '../src/pages/Login/LoginView';
import { useRouter } from 'next/router';

function handleSuccessfulLogin(router) {
  return function(loginResult) {
    document.cookie = `GofarDashboardUserId=${loginResult.userId};`
    document.cookie = `GofarDashboardToken=${loginResult.authToken};`
    router.push('/dashboard');
  };
}

export default function LoginPage(props) {

  const router = useRouter();

  const client = new ApolloClient({
    uri:
      'https://jt63wdhqqre6rpjo5lnylfhjqm.appsync-api.ap-southeast-2.amazonaws.com/graphql',
    headers: {
      Authorization: props.authToken,
      'X-API-KEY': 'da2-d5trhzrnqraznclr2teue2bmmu',
    },
    fetch,
  });
  return (
    <ApolloProvider client={client}>
      <LoginView
        {...props}
        handleSuccessfulLogin={handleSuccessfulLogin(router)}
      />
    </ApolloProvider>
  );
}

LoginPage.getInitialProps = ctx => {
<<<<<<< HEAD:client/pages/index.js
=======
  console.log(`THIS IS COMING FROM INDEX`,ctx)
>>>>>>> 7562e0bd788e81e7dead2c76ea14beb591c3e5e9:client/pages/login.js
  return {
    cookiez: Cookiez(ctx) || '',
  };
};
