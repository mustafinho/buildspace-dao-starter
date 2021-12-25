import { useEffect, useState } from 'react';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem, NavLinks,
    NavBtn, NavBtnLink,
    NavLogoWrapper,
    AddrWrapper,
    AddrText,
    ColorBall
} from './NavBar.styles'
// { toggle, items, isWallet, setAddress, address }
const Navbar = ({ address }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 100) {
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogoWrapper to="/">
                        {/* <NavLogo src={}></NavLogo> */}
                    </NavLogoWrapper >
                     {/* <MobileIcon onClick={toggle}> 
                    </MobileIcon> */}
                    {/* <NavMenu>
                        {items.map((item, index) => (
                            <NavItem key={index}>
                                <NavLinks to={`/${item}`}>
                                    {item}
                                </NavLinks>
                            </NavItem>
                        ))}
                    </NavMenu> */}
                    {/* <NavBtn>
                        <NavBtnLink to="/newCampaign">Create campaign</NavBtnLink>
                    </NavBtn> */}
                    <AddrWrapper>
                        <ColorBall active={address} />
                        <AddrText>
                            {address > 10 ? address.slice(0,10) : "0x000000000"}
                        </AddrText>
                    </AddrWrapper>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar