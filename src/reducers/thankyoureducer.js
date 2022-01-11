export function thankyoureducer(state=false,action)
{
   switch(action.type){
           
    case 'CHANGE_THANKYOU':
        let newState=action.payload;
        return newState;
    default:
        return state
   }
}
export default thankyoureducer