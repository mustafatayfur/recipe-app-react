import axios from 'axios';
import React, { useState, useEffect } from 'react'

const mealTypes=["Breakfast","Lunch","Dinner","Snack", "Teatime"]
const APP_ID = "ca15b955";
const APP_KEY = "49591fe0e84f16db3929bbff1af5ba33"

const Home = () => {
    const [query, setQuery] = useState("pizza")
    const [recipes, setRecipes]= useState()
    const [meal, setMeal] = useState(mealTypes[0].toLowerCase())
     
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

    const getData = async()=> {
        if(query !== ""){
        const result = await axios.get(url)
        console.log(result);
        }
    }
    useEffect(() => {
        getData()      
    }, [])

    return (
        <div>
            <h1>home</h1>
        </div>
    )
} 

export default Home
