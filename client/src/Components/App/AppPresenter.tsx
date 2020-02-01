import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AddPlace from "../../Routes/AddPlace";
import Chat from "../../Routes/Chat";
import EditAccount from "../../Routes/EditAccount";
import EmailVerify from "../../Routes/EmailVerify";
import FindAddress from "../../Routes/FindAddress";
import GetPlaces from "../../Routes/GetPlaces";
import Home from "../../Routes/Home";
import Login from "../../Routes/Login";
import PhoneLogin from "../../Routes/PhoneLogin";
import Ride from "../../Routes/Ride";
import RideHistory from "../../Routes/RideHistory";
import Routes from "../../Routes/routes";
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
		<Route path={Routes.HOME} exact={true} component={Login} />
		<Route path={Routes.PHONE_LOGIN} component={PhoneLogin} />
		<Route path={Routes.VERIFY_PHONE} component={VerifyPhone} />
		<Route path={Routes.SIGN_UP} component={SignUp} />
		<Route path={Routes.SOCIAL_LOGIN} component={SocialLogin} />
		<Redirect path={"*"} to={Routes.HOME} />
	</Switch>
);

const LoggedInRoutes: React.FC = () => (
	<Switch>
		<Route path={Routes.NUBER} exact={true} component={Home} />
		<Route path={Routes.RIDE_FORM} component={Ride} />
		<Route path={Routes.EDIT_ACCOUNT} component={EditAccount} />
		<Route path={Routes.EMAIL_VERIFY_FORM} component={EmailVerify} />
		<Route path={Routes.EMAIL_VERIFY} component={EmailVerify} />
		<Route path={Routes.SETTING} component={Settings} />
		<Route path={Routes.PLACES} component={GetPlaces} />
		<Route path={Routes.ADD_PLACE} component={AddPlace} />
		<Route path={Routes.FIND_ADDRESS} component={FindAddress} />
		<Route path={Routes.CHAT_FORM} component={Chat} />
		<Route path={Routes.RIDE_HISTORY} component={RideHistory} />
		<Redirect path={"*"} to={Routes.NUBER} />
	</Switch>
);

export default AppPresenter;
