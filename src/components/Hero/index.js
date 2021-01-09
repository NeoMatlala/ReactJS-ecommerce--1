import React, {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import {HeroContainer, HeroBtn, HeroContent, HeroH1, HeroItems, HeroP} from './HeroElements'

const Hero = () => {
    // states for the Sidebar close menu
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Greatest Pizza Ever</HeroH1>
                    <HeroP>At no extra cost</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
