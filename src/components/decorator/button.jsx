import React, { useState } from "react";


const ButtonClub = () => {
    const [arr, setArr] = useState([...new Array(10).fill(false)])
    // const arr = new Array(10).fill(false)
    return (<>

        {
            arr.map((val, ind) => {
                return (
                    <>
                        <div onClick={() => {
                            const brr = [...arr]
                            brr[ind] = !brr[ind]
                            setArr(brr)
                        }} style={{ 'background': `${arr[ind] ? 'red' : 'blue'}`, 'margin': '20px 0px' }}>Hello </div> </>
                )
            })
        }
    </>)
}

export default ButtonClub;