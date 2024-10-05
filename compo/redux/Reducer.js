import { Add_To_Cart } from "./Constant";
const initialstate=[]
export const Reducer=(state=initialstate,action)=>{
switch(action.type){
    case Add_To_Cart:
        return[
            ...state,
            action.data
        ]
        default:
            return state
}
}