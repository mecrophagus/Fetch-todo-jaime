import React from "react";
import { Task } from "./Task.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5"> 
				To-Do list, whit some fetch
			</h1>
			< Task />
		</div>
	);
};

export default Home;
