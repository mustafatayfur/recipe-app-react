import React from 'react'
import Form from './Form'
import { HeaderContainer, MainHeader } from './HeaderStyles'

const Header = () => {
    return (
        <HeaderContainer>
            <MainHeader>
                Food App
            </MainHeader>
            <Form/>
        </HeaderContainer>
    )
}

export default Header

