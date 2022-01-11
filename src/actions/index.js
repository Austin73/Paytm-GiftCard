export function change_number(number){
    return{
        type:'CHANGE_NUMBER',
        payload:number
    }
}
export function change_isDigit10(value)
{
    return{
        type:'CHANGE_ISDIGIT10',
        payload:value
    }
}
export function change_thankyou(value)
{
    return{
        type:'CHANGE_THANKYOU',
        payload:value
    }
}
export function add_number(number)
{
    return{
        type:'ADD_NUMBER',
        payload:number
    }
}