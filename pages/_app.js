import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client';
import client from '../config/apollo';
import { render } from 'react-dom';



const MyApp = ({ Component, pageProps }) => {
  
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
