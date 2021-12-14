import React from 'react';
import styled from 'styled-components';
import { useTypedProduct } from '../hooks/useProduct';

const ImgCol = styled.div`
    flex: 0 1 40%;
    padding: 0 15px;
`;
const ImgColItem = styled.div`
    padding: 0 0 60% 0;
    position: relative;

    img {
        position: absolute;
        width: 100%;
        hight: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
        border-radius: 10px;
    }
`;

const Img = () => {
    const {image, category} = useTypedProduct(state => state.product);

    return (
        <ImgCol>
            <ImgColItem>
                <img src={image} alt={category} />
            </ImgColItem>
        </ImgCol>
    );
};

export default Img;