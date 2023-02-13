import React from 'react';
import './App.css';
import { Engines } from './Engines';

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

// const httpLink = new HttpLink({ uri: "/api/graphql", useGETForQueries: true });

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
    },
  }),
  uri: "http://localhost:5199/graphql",
  //uri: "/api/graphql/",
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <Engines/>
    </div>
  </ApolloProvider>
  );
}

export default App;
