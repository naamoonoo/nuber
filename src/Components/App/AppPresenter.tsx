import { useMutation } from "@apollo/react-hooks";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AddPlace from "../../Routes/AddPlace";
import EditAccount from "../../Routes/EditAccount";
import FindAddress from "../../Routes/FindAddress";
import Home from "../../Routes/Home";
import Login from "../../Routes/Login";
import PhoneLogin from "../../Routes/PhoneLogin";
import Places from "../../Routes/Places";
import Ride from "../../Routes/Ride";
import Settings from "../../Routes/Settings";
import SocialLogin from "../../Routes/SocialLogin";
import VerifyPhone from "../../Routes/VerifyPhone";
import { USER_LOG_OUT } from "../../SharedQueries.local";

interface IProps {
	isLoggedIn: boolean;
}

const AppPresenter: React.FC<IProps> = ({ isLoggedIn }) => {
	const [logOut, { data, error, client }] = useMutation(USER_LOG_OUT);
	return (
		<BrowserRouter>
			{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
			<div>
				{isLoggedIn && <button onClick={() => logOut()}>logout</button>}
			</div>
		</BrowserRouter>
	);
};

const LoggedOutRoutes: React.FC = () => (
	<Switch>
		<Route path={"/"} exact={true} component={Login} />
		<Route path={"/phone-login"} component={PhoneLogin} />
		<Route path={"/verify-phone"} component={VerifyPhone} />
		<Route path={"/social-login"} component={SocialLogin} />
		<Redirect path={"*"} to={"/"} />
	</Switch>
);

const LoggedInRoutes: React.FC = () => (
	<Switch>
		<Route path={"/"} exact={true} component={Home} />
		<Route path={"/ride"} component={Ride} />
		<Route path={"/edit-account"} component={EditAccount} />
		<Route path={"/setting"} component={Settings} />
		<Route path={"/places"} component={Places} />
		<Route path={"/add-place"} component={AddPlace} />
		<Route path={"/find-address"} component={FindAddress} />
		<Redirect path={"*"} to={"/"} />
	</Switch>
);

export default AppPresenter;
