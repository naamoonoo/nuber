import { useQuery } from "@apollo/react-hooks";
import React from "react";
import HomePresenter from "./HomePresenter";
import { GET_CURRENT_USER } from "./HomeQueries";

const HomeContainer: React.FC = () => {
	const { loading, error, data } = useQuery(GET_CURRENT_USER);
	if (loading) {
		return <p>Loading...</p>;
	}
	if (error) {
		return <p>{`${error}`}</p>;
	}
	console.log(data);
	return <HomePresenter />;
};

export default HomeContainer;
