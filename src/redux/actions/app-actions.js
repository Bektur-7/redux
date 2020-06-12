import store from '../store'


export const addTask = (task) => {
    return {
        type:'ADD-TASK',
        payload: task
    }
}

export const changeStatus = (index) => { 
    const appReduserData = [...store.getState().AppReducer.data]
    appReduserData[index].status = !appReduserData[index].status
    return {
        type: 'CHANGE_STATUS',
        payload: appReduserData
    }
}

export const Delete = (index) => {
    const appReduserData = [...store.getState().AppReducer.data]
    appReduserData.splice(index, 1)
    return {
        type: 'DELETE',
        payload: appReduserData
    }

}

export const changeTitle = (e) => {
    return {
        type:'CHANGE_TITLE',
        payload: e.target.value
    }
}

export const add = (e) => {
    return {
        type:'CHANGE_TITLE',
        payload: e.target.value
    }
}

