const ADD_GUN = '加机关枪';
const REMOVE_GUN = '减机关枪';

// 这就是reducer处理函数，参数是状态和新的action
export function counter(state=0, action) {
    console.log(state, action)
    // let state = state||0
    switch (action.type) {
      case ADD_GUN:
        return state + 1
      case REMOVE_GUN:
        return state - 1
      default:
        return 10
    }
}

// action creator
export function addGun (){
    return {type:ADD_GUN}
}

export function removeGun (){
    return {type:REMOVE_GUN}
}

export function addGunAsync(){
    return dispatch=>{
        setTimeout(()=>{
            dispatch(addGun())
        },2000)
    }
}
