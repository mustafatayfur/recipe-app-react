import React, { useState } from 'react'
import { Hamburger, Logo, Menu, MenuLink, Nav } from './NavbarStyles'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Nav>
            <Logo to='/'>
                <i>{"<TayfurAcademy>"}</i><span>recipe</span>
            </Logo>
            <Hamburger onClick={()=>setIsOpen(!isOpen)}>
                <span/>
                <span/>
                <span/>
            </Hamburger>
            <Menu isOpen={isOpen}>
                <MenuLink to="/about">About</MenuLink>
                <MenuLink to={{pathname: "https://github.com/mustafatayfur?tab=repositories"}} >Github</MenuLink>
                <MenuLink to="/login">Logout</MenuLink>

            </Menu>
        </Nav>
    )
}

export default Navbar
