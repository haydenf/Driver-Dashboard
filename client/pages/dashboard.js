import DashboardView from '../src/pages/Dashboard/DashboardView';
import React from 'react';
import Cookiez from 'next-cookies';
import fetch from 'node-fetch';
import { Redirect } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';

const link = createHttpLink({ uri: '/graphql', fetch: fetch });

export default function DashboardPage(props) {
  // TODO if not logged in redirect to login
  const cookiezToken = document.cookie.replace(/(?:(?:^|.*;\s*)GofarDashboardToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  const cookiezUser = document.cookie.replace(/(?:(?:^|.*;\s*)GofarDashboardUserId\s*\=\s*([^;]*).*$)|^.*$/, "$1");



  const client = new ApolloClient({
    uri:
      'https://jt63wdhqqre6rpjo5lnylfhjqm.appsync-api.ap-southeast-2.amazonaws.com/graphql',
    headers: {
      Authorization: cookiezToken,
      UserID: cookiezUser,
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
  return {
    cookiez: Cookiez(ctx) || '',
  };
};
