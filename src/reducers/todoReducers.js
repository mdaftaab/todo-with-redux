const initialData = {
    list: []
}

const todoReducers = (state = initialData, action) => {
    switch (action.type) {
        case 'ADD_TODO':

            const { id, data } = action.payload;

            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }

            // default : return state;

        case 'DELETE_TODO':
            return {
                ...state,
                list: state.list.filter(todo => todo.id !== action.payload)
            }
        case 'REMOVE_TODO':
            return {
                ...state,
                list: state.list.filter(todo => todo.id !== action.payload)
            }
        default:
            return state
    }
}

export default todoReducers;