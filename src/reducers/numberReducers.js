export function numberReducers(state=1,action)
{
   switch(action.type){
           
    case 'CHANGE_NUMBER':
        let newState=action.payload;
        return newState;
    default:
        return state
   }
}
export default numberReducers