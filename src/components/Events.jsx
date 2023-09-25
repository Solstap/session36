import { useState } from 'react'

function Events() {

    // let number = 5; // React doesn't see this number

    // const handler = () => {
    //     console.log('click') // you can pass it directly
    // }

    const [number, setNumber] = useState(0)

    const logValue = (value) => {
        console.log(value) // when value is like this you need to put a => function
        setNumber(number + 1)
    }

    return (
        <>{number}
        {/* <button onClick={handler}>Press me</button> */}
        <button onClick={() => logValue(number)}>Press me too</button> 

        </>
    )
}


export default Events