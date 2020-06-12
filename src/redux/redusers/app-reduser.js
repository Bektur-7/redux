const initialState = {
    data : [ 
        {
         title: 'учеБа',
         status: false
        },
        {
         title: 'тренировка',
         status: true
        }
        
   
       ],

        title: '',
        status: false
    
        
}
function AppReducer (state = initialState, action){
    switch (action.type) {
        case 'ADD-TASK': return {
            data: [
                ...state.data, {
                    title: state.title,
                    status: false
                   
                }
            ]

        }
        case 'CHANGE_STATUS': return {
            data: action.payload
        }
        case 'DELETE': return {
            data: action.payload
        }
        case 'CHANGE_TITLE': return {
            ...state,
            title: action.payload
        }

       


        default: return state
    }

    

}

export default AppReducer;