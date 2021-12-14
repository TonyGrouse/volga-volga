import React from 'react';
import styled from 'styled-components';
import ContentChoise from './ContentChoise';
import ContentDescr from './ContentDescr';

const ContentCol = styled.div`
    flex: 0 1 60%;
    padding: 0 15px;
`;

const Content = () => {
    return (
        <ContentCol>
            <ContentDescr/>
            <ContentChoise/>
        </ContentCol>
    );
};

export default Content;