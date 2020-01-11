import { gql } from "apollo-boost";

export const IS_LOGGED_IN = gql`
	query {
		auth {
			isLoggedIn @client
		}
	}
`;

export const USER_LOG_OUT = gql`
	mutation logOut {
		userLogOut @client
	}
`;
