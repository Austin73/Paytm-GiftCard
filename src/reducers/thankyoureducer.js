export function thankyoureducer(state=0,action)
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