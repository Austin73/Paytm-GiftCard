export function AddNumberreducer(state=[],action)
{
   switch(action.type){
           
    case 'ADD_NUMBER':
        let newState=[...state];
        newState.push(action.payload)
        return newState;
    default:
        return state
   }
}
export default AddNumberreducer