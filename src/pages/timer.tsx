import { useEffect, useState } from "react"

const TimerPage = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            setSeconds(prev => prev+1);
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <div className="justify-center items-center">{seconds} seconds passed</div>
    )
}

export default TimerPage;