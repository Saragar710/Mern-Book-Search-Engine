import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
//import { setContext } from '@apollo/client/link/context';
//import { ApolloServer } from '@apollo/server';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
}); 

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
