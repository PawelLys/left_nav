import React from 'react';
import styled from 'styled-components';

import HeaderTop from './HeaderTop';
import HeaderLeft from './HeaderLeft';
import UserContent from './userContent';
import elements from './elements';

const ComponentsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

const MainPageContent = styled.div`
    display: flex;
`;

export default () => {
    return(
        <ComponentsWrapper>
            <HeaderTop />
            <MainPageContent>
                <HeaderLeft elements={elements} />
                <UserContent />
            </MainPageContent>
        </ComponentsWrapper>
    );
}