import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "../../graphql/schema";
import {Query} from "../../graphql/resolvers/Query";
import {Category } from "../../graphql/resolvers/Category";
import {Product} from "../../graphql/resolvers/Product";
import {Mutation} from '../../graphql/resolvers/Mutation'
import {db} from '../../graphql/db'
import Cors from "micro-cors";

const cors = Cors();

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers: {
		Query,
		Category,
		Product,
    Mutation,
	},
  context:{
    db, 
  }
});  

const startServer = apolloServer.start();

export default cors(async function handler(req, res) {
	if (req.method === "OPTIONS") {
		res.end();
		return false;
	}
	await startServer;
	await apolloServer.createHandler({
		path: "/api/graphql",
	})(req, res);
});

export const config = {
	api: {
		bodyParser: false,
	},
};
