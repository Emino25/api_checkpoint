import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DISPLAYUSERS } from './Redux/actionTypes';
import UserCard from './UserCard';

const UserList = ({recipes}) => {

 

  return (
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
        {recipes && recipes.map((el,i) => <UserCard element={el} key={i}/> )}
    </div>
  )
}

export default UserList