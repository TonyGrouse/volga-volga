import React from 'react';
import styled from 'styled-components';

const ButtonUiLike = styled.button<{active: boolean}>`
    margin: 0 0 0 20px;
    padding: 10px 23px;
    border-radius: 50%;
    font-size: 40px;
    display: inline-block;
    border: 1px solid ${props => props.active ? '#bd4652' : '#d1d0d2'};
    color: ${props => props.active ? '#fffeff' : '#d1d0d2'};
    background-color: ${props => props.active ? '#bd4652' : '#fff'};
    transition: all .4s ease;
    &:hover {
        background-color: #fde0e3;
    }
`;

const toggleActive = (active: boolean) => {
    
};

const ButtonLike = (props: any) => {
    return (
        <ButtonUiLike {...props} onClick={() => toggleActive(props.active)}>
            {props.children}
        </ButtonUiLike>
    );
};

export default ButtonLike;