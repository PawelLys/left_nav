import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { Icon } from 'office-ui-fabric-react/lib/Icon';

const blueActiveBar = css`
    content: " ";
    position: absolute;
    left: .25rem;
    width: .25rem;
    background-color: rgb(0, 120, 212);
    opacity: 0;
    transition: opacity 300ms ease 0s;

    ${props => props.activeBar && css`
        opacity: 1;`
    }
`;

export const HeaderLeft = styled.div`
    background-color: ${props => props.theme.leftNavBg};
    color: ${props => props.theme.leftNavColor};
    font-size: ${props => props.theme.leftNavSize};
    width: 3rem;
    user-select: none;
    transition: width .2s;

    ${props => props.openBurger && css`
        width: 18rem;`
    }
`;

export const HeaderFixed = styled.nav`
    width: 3rem;
    height: calc(100vh - 2rem);
    top: 2rem;
	position: fixed;
    transition: width .2s;

    ${props => props.openBurger && css`
        width: 18rem;
        overflow-y: auto;
        overflow-x: hidden;`
    }
`;

export const NavBurger = styled.div`
    width: 100%;
    padding: 1rem 0;
    cursor: pointer;
    transition: all .2s;

    :hover {
        background-color: ${props => props.theme.leftNavBgHover};
    }

    :active {
        background-color: ${props => props.theme.leftNavBgActive};
    }
`;

export const Burger = styled(Icon)`
    width: 3rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Nav = styled.ul`
    margin: 0;
    padding: 0;
`;

export const NavWrapper = styled.li`
    height: 3rem;
    width: 100%;
    display: flex;
    cursor: pointer;
    transition: all .2s;
    position: relative;

    ::before {
        ${blueActiveBar};
        top: .75rem;
        height: 1.5rem;
    }

    :hover {
        background-color: ${props => props.theme.leftNavBgHover};
    }

    ${props => props.pseudoClassActive && css`
        :active {
            background-color: ${props => props.theme.leftNavBgActive};
        }`
    }
    
    
`;

export const NavIcons = styled(Burger)`
    flex: 0 0 3rem;
    height: 3rem;
`;

export const NavTitle = styled.div`
    flex: 1 1 auto;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    transition: ${props => props.show ? `all .1s .1s` : `none`};
    transform: translateX(-100%);

    ${props => props.show && css`
        transform: translateX(0%);
        opacity: 1;
        visibility: visible;`
    }
`;

export const IconContainer = styled.div`
    flex: 0 0 3rem;
    transform: translateX(-100%);
    opacity: 0;
    visibility: hidden;
    transition: ${props => props.show ? `all .1s .1s` : `none`};

    ${props => props.show && css`
        transform: translateX(0%);
        opacity: 1;
        visibility: visible;`
    }
`;

export const ArrowIcon = styled(NavIcons)`
    width: 100%;
    margin-right: 0;
    transition: transform .2s;
    
    ${props => props.rotate && css`
        transform: rotate(180deg);`
    }
`;

export const NestedContainer = styled.div`
    position: absolute;
    left: 3rem;
    height: ${props => props.heightCalc}rem;
    width: 14rem;
    text-transform: capitalize;
    background-color: rgb(244, 244, 244);
    cursor: initial;
`;

export const NestedTitle = styled.div`
    height: 3rem;
    background-color: ${props => props.theme.leftNavBgHover};
    display: flex;
    align-items: center;
    padding-left: 5%;
`;

export const NavUnderTitle = styled.ul`
    margin: 0;
    padding: 0;
`;

export const UnderItems = styled.li`
    height: 2rem;
    display: flex;
    position: relative;

    ::before {
        ${blueActiveBar};
        left: 11%;
        top: .4375rem;
        height: 1.12rem;
    }
    
    :hover {
        background-color: ${props => props.theme.leftNavBgHover};
    }

    :active {
        background-color: ${props => props.theme.leftNavBgActive};
    }
`;

export const ItemsLink = styled(Link)`
    flex: 1;
    display: flex;
    align-items: center;
    height: 2rem;
    padding-left: 15%;
    text-decoration: none;
    color: inherit;
    text-transform: capitalize;
    transition: all .2s;

    :hover {
        background-color: ${props => props.theme.leftNavBgHover};
    }

    :active {
        background-color: ${props => props.theme.leftNavBgActive};
    }
`;

export const NestedUnderItems = styled(UnderItems)`
    ::before {
        left: 2%;
    }
`;

export const NestedItemsLink = styled(ItemsLink)`
    padding-left: 5%;
`;