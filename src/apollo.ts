import ApolloClient, { Operation } from "apollo-boost";

const AUTH = "Auth";
const client = new ApolloClient({
	clientState: {
		defaults: {
			auth: {
				__typename: AUTH,
				isLoggedIn: Boolean(localStorage.getItem("X-JWT"))
			}
		},
		resolvers: {
			Mutation: {
				userLogIn: (_, { token }, { cache }) => {
					localStorage.setItem("X-JWT", token);
					cache.writeData({
						data: {
							auth: {
								__typename: AUTH,
								isLoggedIn: true
							}
						}
					});
				},
				userLogOut: (_, __, { cache }) => {
					localStorage.removeItem("X-JWT");
					cache.writeData({
						data: {
							auth: {
								__typename: AUTH,
								isLoggedIn: false
							}
						}
					});
				}
			}
		}
	},
	request: async (operation: Operation) => {
		operation.setContext({
			headers: {
				"X-JWT": localStorage.getItem("X-JWT") || ""
			}
		});
	},
	uri: "http://localhost:4000/graphql"
});

export default client;
