import { ADD_TO_CART } from '../actions/cartActions';

const initialState = {
    cart: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const exists = state.cart.find(item => item.id === action.payload.id);

            if (exists) {
                return state;
            }

            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        default:
            return state;
    }
};

export default cartReducer;
