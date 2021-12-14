import getApiProduct, { ApiProduct } from "../product";

type ProductType = 'commonm' | 'commonl' | 'thinm' | 'thinl';

interface ProductAction {
    type: ProductType;
    payload: any[];
}

const defaultState = {...getApiProduct()};

export const productReducer = (state = getApiProduct(), action: ProductAction): ApiProduct => {
    switch (action.type) {
        case 'commonm':
            return {
                ...state, ...state.variant[0]
            };
        case 'commonl':
            return {
                ...state, ...state.variant[1]
            };
        case 'thinm':
            return {
                ...state, ...state.variant[2]
            };
        case 'thinl':
            return {
                ...state, ...state.variant[3]
            }
        default:
            return defaultState;
    }
};