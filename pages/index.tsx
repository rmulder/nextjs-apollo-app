import fetch from "isomorphic-unfetch";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { gql } from "apollo-boost";

import BookInfo from "../components/BookInfo";
import AuthorInfo from "../components/AuthorInfo";

const Home = () => {
  const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql",
  });

  return (
    <ApolloProvider client={client}>
      <div>
        <h1>NextJS GraphQL Apollo App</h1>
        <BookInfo />
        <AuthorInfo />
      </div>
    </ApolloProvider>
  );
};

export default Home;
