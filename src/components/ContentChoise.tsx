import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useTypedProduct } from '../hooks/useProduct';
import Button from './UI/Button';
import ButtonLike from './UI/ButtonLike';

const ContentChoiseItem = styled.div`
    margin: 30px 0 30px;
`;
const ContentChoiseInfo = styled.div`
    display: flex;
    margin: 0 0 25px 0;

    h2 {
        font-size: 22px;
        font-weight: 600;
        margin: 0 20px 0 0;
        color: #000;
    }
`;

const ButtonWrapper = styled.div`
    margin: 0 0 20px 0;
    width: 100%;
    display: flex;
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid rgb(200,200,200);
`;

const Price = styled.div`
    font-size: 35px;
    color: #000;
    margin: 0 0 30px;
`;

const Btns = styled.div`
    display: flex;
`;

const ContentChoise = () => {
    const state = useTypedProduct(state => state);
    const dispatch = useDispatch();

    const changeTypeContent = (type: string) => {
        if (type === 'thins') {
            type = 'thinm';
        }
        dispatch({type: type, payload: state.product.variant});
    };

    return (
        <ContentChoiseItem>
            <ContentChoiseInfo>
                <h2>{state.product.weight} г</h2>
                <h2>{state.product.energy} ккал</h2>
            </ContentChoiseInfo>

            <ButtonWrapper>
                <Button
                    size='m'
                    active={true}
                    onClick={() => changeTypeContent('common' + state.product.size)}>
                    Обычное тесто
                </Button>
                <Button
                    size='m'
                    active={false}
                    onClick={() => changeTypeContent('thin' + state.product.size)}>
                    Тонкое тесто
                </Button>
            </ButtonWrapper>

            <ButtonWrapper>
                {(state.product.type === 'common') ?
                    <>
                        <Button
                            size='s'
                            active={true}
                            onClick={() => changeTypeContent(state.product.type + 's')}>
                            Маленькая
                        </Button>
                        <Button
                            size='s'
                            active={false}
                            onClick={() => changeTypeContent(state.product.type + 'm')}>
                            Средняя
                        </Button>
                        <Button
                            size='s'
                            active={false}
                            onClick={() => changeTypeContent(state.product.type + 'l')}>
                            Большая
                        </Button>
                    </> :
                    <>
                        <Button
                            size='m'
                            active={true}
                            onClick={() => changeTypeContent(state.product.type + 'm')}>
                            Средняя
                        </Button>
                        <Button
                            size='m'
                            active={false}
                            onClick={() => changeTypeContent(state.product.type + 'l')}>
                            Большая
                        </Button>
                    </>
                }
                
            </ButtonWrapper>

            <Price>{state.product.price},00 &#8381;</Price>

            <Btns>
                <ButtonWrapper style={{width: '40%', margin: 0}}>
                    <Button size='' active>В корзину</Button>
                </ButtonWrapper>
                <ButtonLike active={false}>&#9829;</ButtonLike>
            </Btns>
        </ContentChoiseItem>
    );
};

export default ContentChoise;