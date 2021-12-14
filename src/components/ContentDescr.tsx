import React from 'react';
import styled from 'styled-components';
import { useTypedProduct } from '../hooks/useProduct';

const ContentDescrItem = styled.div`
    h2 {
        font-size: 20px;
        font-weight: 300;
        color: rgb(100, 100, 100);
    }
    h1 {
        font-size: 30px;
        font-weight: 700;
        margin: 15px 0 20px;
    }
    p {
        font-size: 22px;
        color: rgb(70, 70, 70);
    }
`;

const ContentDescr = () => {
    const {title, category, description} = useTypedProduct(state => state.product);

    return (
        <ContentDescrItem>
            <h2>{category}</h2>
            <h1>{title}</h1>
            <p>{description}</p>
        </ContentDescrItem>
    );
};

export default ContentDescr;