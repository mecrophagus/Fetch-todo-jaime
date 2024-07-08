import React from "react";
import { Task } from "./Task.jsx";
import { UserJPH } from "./UsersJPH.jsx";

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5"> 
				To-Do list, whit some fetch
			</h1>
			< UserJPH />
			< Task />
		</div>
	);
};

export default Home;
