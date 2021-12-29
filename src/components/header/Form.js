import React from 'react'
import { Button, FoodInput, FormContainer, Select } from './HeaderStyles'

const Form = () => {
    return (
        <FormContainer>
            <FoodInput
                type="text"
                placeholder= "Search"
            />
            <Button>Search</Button>
            <Select></Select>
        </FormContainer>
    )
}

export default Form