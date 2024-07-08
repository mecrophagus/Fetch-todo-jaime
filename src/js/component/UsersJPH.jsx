import React, { useState } from "react";

export const UserJPH = () => {
    
    const host = "https://jsonplaceholder.typicode.com";   // 0. Definiendo la dirección del host
    const [users, setUsers] = useState ()

        const getUsers = async () => {
            //Defino la uri
            const uri = `${host}/users`;
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
                setUsers(data)
                return data
            }

            
           {/* const handleOnClick = () => {
                getUsers();
            };*/}

            useEffect(() => {
                getUsers()
              }, [])

            
            return(
                <div className="container">
                    <h1 className="mt-5">Aqui llamamos la API</h1>
                    <button onClick={handleOnClick} className={`btn btn-success`} type="button">get users</button>
                
                <div className="container"> 
                        <ul className="list-group">
                            {!users ? "No tengo datos." : users.map((item) => <li key={id} className="list-group-item d-flex justify-content-between">{item.name}
                                <div>
                                    <span className="fa fa-trash text-danger"></span>
                                </div>
                            </li> ) }
                        </ul>   
                </div>
            </div>
        );
    };