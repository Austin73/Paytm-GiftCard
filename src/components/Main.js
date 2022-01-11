import React from 'react'
import { Button } from '@mui/material'
import { TextField } from '@mui/material'
import { Dispatch } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { add_number, change_isDigit10, change_number, change_thankyou } from '../actions'
const styles = {
    mainContainer: {
        width: '80%',
        height: '60%',
        margin: 'auto',
        marginTop: '100px',
    },
    giftDetails: {
        fontFamily: 'appleSystem',
        fontSize: '20px',
        letterSpacing: '1px',
        textAlign: 'center'
    }
}


const digitCount2 = num => String(Math.floor(Math.abs(num))).length;
function Main() {
    const number = useSelector(state => state.number)
    const isdigit = useSelector(state => state.isdigit)
    const thankyou = useSelector(state => state.thankyou)
    const addnumber = useSelector(state => state.addnumber)
    const dispatch = useDispatch()
    console.log(number)
    console.log(isdigit)
    console.log(digitCount2(number))
    if (digitCount2(number) === 10) {
        dispatch(change_isDigit10(true))
        dispatch(change_number(number))
    }
    else {
        dispatch(change_isDigit10(false))
    }

    useEffect(() => {
        console.log("sfsf")
        const arr = localStorage.getItem('number')
        console.log(arr)
        if (arr!==null&&arr.includes(number)) {

            dispatch(change_thankyou(false))
        }
        else {
            localStorage.setItem('number', addnumber)

        }


    }, [addnumber])
   

    return (
        <div style={styles.mainContainer}>



            <div style={styles.giftDetails}>
                You have WON Paytm Gift Card of Rs 200 for <b>placing the order on Man Matters</b>
            </div>



            <input style={
                {
                    borderRadius: '35px',
                    width: '95%',
                    height: '55px',
                    fontSize: '20px',
                    border: '3px solid grey',
                    backgroundColor: 'lightgray',
                    textAlign: 'center'
                }
            } placeholder='Enter Mobile Number'

                onChange={(e) => {
                    dispatch(change_number(e.target.value))
                    dispatch(change_thankyou(false))

                }}
                value={number} />

            <br /><br />
            <div>
                <Button variant={(isdigit ? 'contained' : 'outlined')} style={{
                    width: '100%',
                    fontSize: '13px',
                    borderRadius: '35px',
                    textAlign: 'center',
                    height: '60px',
                    fontWeight: 'bold'
                }}
                    onClick={() => {
                        isdigit && dispatch(change_thankyou(true))
                    }}>Wow! Get my Paytm Gift Card &nbsp;<b>&gt;</b></Button>

            </div>





            {thankyou && <div
                style={{
                    textAlign: 'center',
                    marginTop: '15px',
                    color: 'blueviolet',
                    fontSize: '20px',
                    marginBottom: '15px',
                    fontWeight: 'bold'
                }}
            > Thank You! </div>}



        </div>
    )
}

export default Main
