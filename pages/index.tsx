// import { ApolloProvider } from "@apollo/client"
import Home from "../src/components/home";
// import { client } from "../src/library/apollo"

const Index = () => {
    return (
        <>
            {/* <ApolloProvider client={client}> */}
            <Home />
            {/* </ApolloProvider> */}
        </>
    );
};

export default Index;
