import PropTypes from "prop-types"; 
export const todoReducer =(initialState =[], action) =>{
    switch (action.type) {
        case 'add':
            return [...initialState, action.payload]
        case 'delete':
            return initialState.filter(todo => todo.id !== action.payload)
    
        case 'toggle':
            return initialState.map(todo =>{
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            })
    
        default:
            break;
    }
    return initialState;
}

todoReducer.propTypes ={
    initialState: PropTypes.array.isRequired,
    action: PropTypes.object.isRequired
}