import React from 'react';
import styled from 'styled-components';

const ButtonUi = styled.button<{active: boolean, size: string}>`
    padding: 20px 0;
    flex: ${props => {
        if (props.size === 'm') {
            return '0 1 50%';
        }else if (props.size === 's') {
            return '0 1 33.33333%';
        }else {
            return '0 1 100%';
        }
    }};
    font-size: 22px;
    font-weight: 500;
    color: ${props => props.active ? '#fff' : '#000'};
    background-color: ${props => props.active ? '#4ec380' : '#fff'};
    transition: all .4s ease;
    &:hover {
        background-color: ${props => props.active ? '#4ec380' : '#97d9b3'};
    }
`;

const Button = (props: any) => {
    return (
        <ButtonUi {...props}>
            {props.children}
        </ButtonUi>
    );
};

export default Button;