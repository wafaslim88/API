import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import UserCard from "./UserCard";
import './UserList.css';

export const UserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUserList(response.data);
      })
        .catch((error) => console.log(error)); 
  }, []);

  console.log(userList);

  return (
    <div>
      <h1 className="title">User List</h1>
     
        <div className="user-list" >
          {userList.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div> 
    </div>
  );
};

export default UserList;
