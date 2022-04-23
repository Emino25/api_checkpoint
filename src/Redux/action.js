import axios from "axios"
import { GETONERECIPEFAILED, GETONERECIPELODING, GETONERECIPESUCESS, GETRECIPEFAILED, GETRECIPELODING, GETRECIPESUCESS } from "./actionTypes"


export const getRecipe =(value)=> async (dispatch)=>{

    try {
        dispatch({type:GETRECIPELODING})
        const res = await axios.get(
            `https://api.edamam.com/api/recipes/v2?type=public&q=milk&app_id=01dd33e2&app_key=64ccda011be1b3a5552df0c364eedc95`
        )
        dispatch({type:GETRECIPESUCESS,payload:res.data.hits})
    } catch (error) {
        dispatch({type:GETRECIPEFAILED,payload:error})
        
    }
}
export const getOneRecipe =(id)=> async (dispatch)=>{

    try {
        dispatch({type:GETONERECIPELODING})
        const res = await axios.get(
            `https://api.edamam.com/api/recipes/v2/95661be6f77a57b4c85c789a3b737ada?type=public&app_id=01dd33e2&app_key=64ccda011be1b3a5552df0c364eedc95`
        )
        dispatch({type:GETONERECIPESUCESS,payload:res.data.recipe})
    } catch (error) {
        dispatch({type:GETONERECIPEFAILED,payload:error})
        
    }
}