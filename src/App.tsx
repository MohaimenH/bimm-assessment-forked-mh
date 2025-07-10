import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  // useQuery,
} from "@apollo/client";
import { CarDashboard } from "./dashboards/car/CarDashboard";

const client = new ApolloClient({
  uri: "/graphql", // MSW intercepts this
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <CarDashboard />
    </ApolloProvider>
  );
}
