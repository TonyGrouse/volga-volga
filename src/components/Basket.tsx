import React from 'react';
import styled from 'styled-components';
import { useTypedProduct } from '../hooks/useProduct';

const BasketItem = styled.div<{active: boolean}>`
    position: absolute;
    bottom: 0;
    left: 0;
    transform: ${props => props.active ? 'translateY(0)' : 'translateY(100%)'};
    width: 100%;
    text-align: center;
    background-color: #8489bc;
    padding: 20px 0;
    color: #fff;
    font-size: 22px;
    font-weight: 500;
    transition: all .4s ease;
`;

const Basket = (props: any) => {
    const {price} = useTypedProduct(state => state.product);

    return (
        <BasketItem {...props}>
            <p>Итого к оплате: {price},00 &#8381;</p>
        </BasketItem>
    );
};

export default Basket;