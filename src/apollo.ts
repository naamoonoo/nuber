import ApolloClient, { Operation } from "apollo-boost";

// localstroage ->  sessionStorage
// b/c shared local storage between incognito and not
const AUTH = "Auth";
const client = new ApolloClient({
	clientState: {
		defaults: {
			auth: {
				__typename: AUTH,
				isLoggedIn: Boolean(sessionStorage.getItem("X-JWT"))
			}
		},
		resolvers: {
			Mutation: {
				userLogIn: (_, { token }, { cache }) => {
					sessionStorage.setItem("X-JWT", token);
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
					sessionStorage.removeItem("X-JWT");
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
				"X-JWT": sessionStorage.getItem("X-JWT") || ""
			}
		});
	},
	uri: "http://localhost:4000/graphql"
});

export default client;
