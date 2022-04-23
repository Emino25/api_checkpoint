import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRecipe } from './Redux/action';
import { DISPLAYUSERS } from './Redux/actionTypes';
import UserCard from './UserCard';
import UserList from './UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import Details from './Details';



function App() {

  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.data)
  const loding = useSelector((state) => state.loding)
  const [input, setInput] = useState("")
  const [qury, setQury] = useState("")
  console.log(recipes);
  useEffect(() => {

    dispatch(getRecipe())

  },[])


  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={
          <div>
            <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
            <button onClick={() => setQury(input)}>search</button>
            <UserList recipes={recipes} />
          </div>
        } />
        <Route path="details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
