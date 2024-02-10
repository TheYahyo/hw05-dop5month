import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./style.module.css";
import { Link } from "react-router-dom";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import fetchAllUsers from "../../store/Reducers/UserReducer";


const Users = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { users, isLoading, errorUser } = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(fetchAllUsers());

   
  }, []);
  function getshortvalue(value, id) {
    if (value.length > 20) {
     
    }
  }
  return (
    <div className={classes.container}>
      {users.length &&
        users.map((user) => (
          <div className={classes.mod}>
            <div className={classes.posts} key={user.id}>
              <h1>{user.id} </h1>
              <div className={classes.flexing}>
                <h3>
                  {user.name} {user.email}{" "}
                </h3>
                <button onClick={() => navigate(`/users/${user.id}`)}>
                  Learn More
                </button>
              </div>
              <br />
              <p>catchPhrase:{getshortvalue(user.company.catchPhrase, user.id)}</p>
            </div>
          </div>
        ))}
      {isLoading && "loading..."}
      {errorUser && errorUser}
    </div>
  );
};

export default Users;   