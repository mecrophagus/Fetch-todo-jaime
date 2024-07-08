import React from "react";

export const UserJPH = () => {
        const getUser = async () => {
            const uri = "https://jsonplaceholder.typicode.com/" + "/user";
            const options = {
                method: "GET"
            };
            
            const response = await fetch(uri, options);
            if(!response.ok){
                console.log("Error", response.status, response.statusText);
                return
            } 
                const data = await response.json()
                console.log(data);
            }
            const handleOnClick = () => {
                getUser();
            };
            
            return(
                <div className="container">
                 <h1 className="mt-5">Aqui llamamos la API</h1>
                <button onClick={handleOnClick} className={`btn btn-success`} type="button">get user</button>
            </div>
        );
    };