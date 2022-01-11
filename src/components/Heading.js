import React from 'react'
import { useMediaQuery } from 'react-responsive'
const styles = {
    header: {
        width: '98vw',
        height: '40vh',
        backgroundColor: 'black',
        border: '2px solid blue'
    }
}
function Heading() {
    const isTabletOrMobile = useMediaQuery({ query: '(minWidth: 300px)' })
    return (
        <div style={styles.header}>


            <div style={{
                color: 'white',
                lineHeight: '9px'
            }}>
                <div style={{
                    marginLeft: '100px'
                }}>
                    <h1 >man</h1></div>
                <div style={{
                    marginLeft: '125px'
                }}>
                    <h1>matters</h1>
                </div>
            </div>

            <div style={{
                textAlign: 'center',
                marginTop: '30px'
            }}>
                <h2>
                    <span style={{ color: '#ff0000' }}>C
                    </span>
                    <span style={{ color: '#ff2a00' }}>o
                    </span>
                    <span style={{ color: '#ff5500' }}>n
                    </span><span style={{ color: '#ff7f00' }}>g
                    </span><span style={{ color: '#ffbf00' }}>r
                    </span><span style={{ color: '#ffff00' }}>a
                    </span><span style={{ color: '#aaff00' }}>t
                    </span><span style={{ color: '#55ff00' }}>u
                    </span><span style={{ color: '#00ff00' }}>l
                    </span><span style={{ color: '#00ff80' }}>a
                    </span><span style={{ color: '#00ffff' }}>t
                    </span><span style={{ color: '#00aaff' }}>o
                    </span><span style={{ color: '#0055ff' }}>n
                    </span><span style={{ color: '#0000ff' }}>s
                    </span>
                </h2>
            </div>


            {/* //Code for paytm gift card */}

            <div style={{
                width: '90%',
                height: '80%',

                margin: 'auto',
                borderRadius: '25px',
                backgroundColor: '#f2f2f2'
            }}>


                <div style={{
                    textAlign: 'center',
                    fontFamily: 'Arial',
                    fontWeight: 'bold',
                    fontSize: '21px',
                    letterSpacing: '1px'
                }}>
                    <br />
                    <span>
                        <span style={{ color: '#191970' }}>P</span>
                        <span style={{ color: '#191970' }}>A</span>
                        <span style={{ color: '#191970' }}>Y</span>
                        <span style={{ color: '#0000FF' }}>T</span>
                        <span style={{ color: '#0000FF' }}>M</span>
                    </span>
                </div>

                <div class="card-body">

                    <div style={{
                        fontFamily: 'Courgette',
                        fontSize: '50px',
                        fontWeight: 'bold',

                        margin: 'auto',
                        backgroundColor: 'red',
                        textAlign: 'center',
                        marginTop: '20px',
                        backgroundImage: 'linearGradient(45deg,#ac0aa4, #f6e607)',
                        backgroundSize: '100%',
                        backgroundRepeat: 'repeat',
                        webkitBackgroundClip: 'text',

                        webkitTextFillColor: 'transparent',

                        mozBackgroundClip: 'text',

                        mozTextFillColor: 'transparent',

                        userSelect: 'none',

                    }}>Gift Card ₹200</div>

                </div>
            </div>
        </div >
    )
}

export default Heading
