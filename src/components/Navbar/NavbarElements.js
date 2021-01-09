import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom'
import { FaPizzaSlice } from 'react-icons/fa'

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 400px){
        position: absolute;
        top: 10px;
        left: 25px;
    }
`

export const NavIcon = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;
    margin-top: 2rem;
    font-size: 1.5rem;
    

    p{
        transform: translate(-175%, 100%)
        font-weight: bold;
        margin-right: 3rem;
    }
`

export const Bars = styled(FaPizzaSlice)`
    font-size: 2.2rem;
    transform: translate(-50%, -15%);
`