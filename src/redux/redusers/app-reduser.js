const initialState = {
    data : [ 
        {
         title: 'учеБа',
         status: false
        },
        {
         title: 'тренировка',
         status: true
        },
        
   
       ]
       {
        title: '',
        status: false
    }
}
function AppReducer (state = initialState, action){
    switch (action.type) {
        case 'ADD-TASK': return {
            data: [
                ...state.data,
                action.payload
            ]

        }
        case 'CHANGE_STATUS': return {
            data: action.payload
        }
        case 'DELETE': return {
            data: action.payload
        }
        case 'CHANGE_TITLE': return {
            data: action.payload
        }

       


        default: return state
    }

    

}

export default AppReducer;