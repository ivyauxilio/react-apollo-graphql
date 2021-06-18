import { ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
// import './styles/app.scss';

function Index() {

  const client = new ApolloClient({
      cache: new InMemoryCache(),
      uri: 'https://graphql.anilist.co'
  })  

  return (
    <ApolloProvider client={client}>
        <Header/>
        <Main/>
        <Footer/>
    </ApolloProvider>
  );
}

export default Index;
