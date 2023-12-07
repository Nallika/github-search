import React from 'react';
import ReactDOM from 'react-dom/client';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import './index.css';
import reportWebVitals from './reportWebVitals';
import Shell from './components/Shell';
import { TOKEN, API_URL } from './constants';

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <Shell />
    </React.StrictMode>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
