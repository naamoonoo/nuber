import React from "react";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/react-hooks";
import { USER_LOG_OUT } from "./AppQueries";

interface IProps {
	isLoggedIn: boolean;
}

const AppPresenter: React.SFC<IProps> = ({ isLoggedIn }) => {
	const [logOut, { data, error, client }] = useMutation(USER_LOG_OUT);
	console.log(data);
	console.log(error);
	console.log(client);

	return (
		<div>
			<div>You are {isLoggedIn ? "In" : "Out"}</div>
			{isLoggedIn && <button onClick={() => logOut()}>logout</button>}
		</div>
	);
};

AppPresenter.propTypes = {
	isLoggedIn: PropTypes.bool.isRequired
};

export default AppPresenter;
