export function changeReducer(state=false,action)
{
   switch(action.type){
           
    case 'CHANGE_ISDIGIT10':
        let newState=action.payload;
        return newState;
    default:
        return state
   }
}
export default changeReducer