import { useEffect } from "react";
import { useState } from "react"


export default function Users(){
    const[usersList, setUserList] = useState([]);

    async function fetchAllUsers(){
        try {
           const apiResponse = await fetch('https://dummyjson.com/users')

           // convert to json
           const result = await apiResponse.json();
           if(result?.users){
            setUserList(result?.users)
           } else{
            setUserList([])
           }
           
           
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        fetchAllUsers()
    },[])

    return (
    <div>
        <h1>All Users Lists</h1>
        <ul>
            {
                usersList && usersList.length > 0 ? usersList.map(userItem=><li key={userItem?.id}>
                    <p>{userItem?.firstName} {userItem?.LastName}   </p>
                </li>): <h1>No user Found</h1>
            }
        </ul>
    </div>
    )
}