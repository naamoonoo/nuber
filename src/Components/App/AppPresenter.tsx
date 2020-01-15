import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Routes from "../../Routes";
import AddPlace from "../../Routes/AddPlace";
import EditAccount from "../../Routes/EditAccount";
import FindAddress from "../../Routes/FindAddress";
import Home from "../../Routes/Home";
import Login from "../../Routes/Login";
import PhoneLogin from "../../Routes/PhoneLogin";
import Places from "../../Routes/Places";
import Ride from "../../Routes/Ride";
import Settings from "../../Routes/Settings";
import SignUp from "../../Routes/SignUp";
import SocialLogin from "../../Routes/SocialLogin";
import VerifyPhone from "../../Routes/VerifyPhone";

interface IProps {
	isLoggedIn: boolean;
}

const AppPresenter: React.FC<IProps> = ({ isLoggedIn }) => {
	return (
		<BrowserRouter>
			{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
		</BrowserRouter>
	);
};

const LoggedOutRoutes: React.FC = () => (
	<Switch>
		<Route paht={Routes.HOME} excat={true} component={Login} />
		<Route paht={Routes.PHONE_LOGIN} component={PhoneLogin} />
		<Route paht={Routes.VERIFY_PHONE} component={VerifyPhone} />
		<Route paht={Routes.SIGN_UP} component={SignUp} />
		<Route paht={Routes.SOCIAL_LOGIN} component={SocialLogin} />
		<Redirect path={"*"} to={"/"} />
	</Switch>
);

const LoggedInRoutes: React.FC = () => (
	<Switch>
		<Route paht={Routes.HOME} excat={true} component={Home} />
		<Route paht={Routes.RIDE} component={Ride} />
		<Route paht={Routes.EDIT_ACCOUNT} component={EditAccount} />
		<Route paht={Routes.SETTING} component={Settings} />
		<Route paht={Routes.PLACES} component={Places} />
		<Route paht={Routes.ADD_PLACE} component={AddPlace} />
		<Route paht={Routes.FIND_ADDRESS} component={FindAddress} />
		<Redirect path={"*"} to={"/"} />
	</Switch>
);

export default AppPresenter;
