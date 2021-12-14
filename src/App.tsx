import React from 'react';
import styled from 'styled-components';
import Basket from './components/Basket';
import Content from './components/Content';
import Img from './components/Img';
import { useTypedProduct } from './hooks/useProduct';
import GlobalStyles from './styles/GlobalStyles';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
`;
const AppWrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 60px 0 0 0;
    margin: 0 -15px;
`;

const App = () => {
    const state = useTypedProduct(state => state);

    return (
        <Wrapper>
            <div className="container">
                <AppWrapper>
                    <Img/>
                    <Content></Content>
                </AppWrapper>
            </div>
            <Basket active={true}></Basket>
            <GlobalStyles/>
        </Wrapper>
    );
};

export default App;