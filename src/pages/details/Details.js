import React from 'react'
import { useLocation } from 'react-router-dom'
import { DetailContainer, HeaderContainer } from './DetailsStyle'
import dietSvg from "../../assets/diet.svg"

const Details = (props) => {

    const location= useLocation()
    console.log(location.state.recipe)
    const recipe = location.state.recipe
    return (
        <DetailContainer>
            <HeaderContainer>
                <h1>{recipe.label}</h1>
                <img src={dietSvg}/>
            </HeaderContainer>
        </DetailContainer>
    )
}

export default Details
