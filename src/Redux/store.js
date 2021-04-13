import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { ADD_TRANSACTION, DELETE_TRANSACTION } from "./Types"

const initialState = {
    transactions: [
        // { id: 1, text: 'Flower', amount: -20 },
        // { id: 2, text: 'Salary', amount: 300 },
        // { id: 3, text: 'Book', amount: -10 },
        // { id: 4, text: 'Camera', amount: 150 }
    ]
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TRANSACTION: return {
            ...state,
            transactions: [...state.transactions, action.payload]
        }
        case DELETE_TRANSACTION: return {
            ...state,
            transactions: [...state.transactions.filter(val => val.id !== action.payload)]
        }

        default:
            return state
    }
}

const store = createStore(mainReducer, composeWithDevTools(applyMiddleware()));

export default store;