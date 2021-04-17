import React from 'react';
import Container from 'react-bootstrap/Container';
import HeaderNav from '../../Shared/HeaderNav/HeaderNav';
import HeaderMain from '../HeaderMain/HeaderMain';
const Header = () => {
    return (
        <Container>
            <HeaderNav/>
            <HeaderMain/>
        </Container>
    );
};

export default Header;