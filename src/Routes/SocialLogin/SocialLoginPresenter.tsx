import React from "react";
import FacebookLogin from "react-facebook-login";
import { ReactComponent as FaceBookIcon } from "../../assets/icons/facebook.svg";
import * as S from "./SocialLoginStyle";

interface IProps {
	a: string;
}

const SocialLoginPresenter: React.FC<IProps> = ({ a }) => {
	return (
		<S.Container>
			<S.Title>Choose an account</S.Title>
			<S.BackArrowExtended backTo={"/"} />
			{/* <FacebookLogin
				appId="1718196768212364"
				autoLoad={false}
				fields="name,first_name,last_name,email"
				// callback={loginCallback}
				render={(renderProps: ReactFacebookLoginProps) => {
					return (<S.Link onClick={renderProps.onClick}>
						<S.Icon>
							<FaceBookIcon />
						</S.Icon>
						Facebook
					</S.Link>)
				}}
			/> */}
			<FaceBookIcon />
			<FacebookLogin
				appId="1088597931155576"
				autoLoad={true}
				fields="name,email,picture"
				callback={() => console.log("facebook")}
			/>
		</S.Container>
	);
};

export default SocialLoginPresenter;
