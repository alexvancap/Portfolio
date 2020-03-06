const reducer = (currentState, action) => {
    switch (action.type){
        case '':
        break;
    }
    return currentState
}

const initialState = {}

export const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)