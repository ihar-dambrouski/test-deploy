import React from 'react'
import ReactCountdownClock from 'react-countdown-clock'
const fetchUsers = () => {
    for(let i = 0; i < 10000; i++) {
        console.log('asdasd')
    }
}

const Home = () => {
    return (
        <>
            <button className="btn-direct" onClick={fetchUsers}>
                Fetch Users Directly
            </button>
        <ReactCountdownClock />
        </>
    )
}

export default Home
