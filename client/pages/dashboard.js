import DashboardView from '../src/pages/Dashboard/DashboardView';
import React, {useState} from 'react';
import Cookies from 'js-cookie';
import Cookiez from 'next-cookies';
import fetch from 'node-fetch';
import { Redirect } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';

const link = createHttpLink({ uri: '/graphql', fetch: fetch });

export default function DashboardPage(props) {
  // TODO if not logged in redirect to login

  const client = new ApolloClient({
    uri:
      'https://jt63wdhqqre6rpjo5lnylfhjqm.appsync-api.ap-southeast-2.amazonaws.com/graphql',
    headers: {
      Authorization: props.token,
      UserID: props.userId,
      'X-API-KEY': 'da2-d5trhzrnqraznclr2teue2bmmu',
    },
    fetch,
  });

  return (
    <ApolloProvider client={client}>
      <DashboardView />
    </ApolloProvider>
  );
}

DashboardPage.getInitialProps = ctx => {
<<<<<<< HEAD
=======
  const token = Cookiez(ctx).GofarDashboardToken;
  const userId = Cookiez(ctx).GofarDashboardUserId;
>>>>>>> 7562e0bd788e81e7dead2c76ea14beb591c3e5e9
  return {
    cookiez: Cookiez(ctx) || '',
    token,
    userId
  };
};
