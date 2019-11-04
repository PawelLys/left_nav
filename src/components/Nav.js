import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { initializeIcons } from '@uifabric/icons';

import history from '../history';
import { GlobalStyle, theme, ComponentsWrapper, PageContent } from './header/styledNav';
import HeaderTop from './header/HeaderTop';
import HeaderLeft from './header/HeaderLeft';
import elements from './header/elements';
import UserContent from './mainPage/userContent';

initializeIcons();

const Nav = () => {
    return (
        <Router history={history}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <ComponentsWrapper>
                    <HeaderTop />
                    <PageContent>
                        <HeaderLeft elements={elements} />
                        <Switch>
                            <Route path="/" exacy component={UserContent} />
                            <Route component={null} />
                        </Switch>
                    </PageContent>
                </ComponentsWrapper>
            </ThemeProvider>
        </Router>
    );
};

export default Nav;