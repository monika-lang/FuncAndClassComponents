import { useEffect, useState } from "react"

const ClickerPage = () => {

    const [count, setCount] = useState(0);

    let title = document.title;

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count])

    useEffect(() => {
        return () => {
            document.title = title;
        }
    }, [])

    return (
        <div className="flex items-center justify-center gap-2 flex-col">
            <div>Count: {count}</div>
            <div className="flex flex-row justify-center gap-1">
                <button className="border rounded p-1 select-none" onClick={() => setCount(count + 1)}>++</button>
                <button className="border rounded pt-1 pb-1 pr-2 pl-2 select-none" onClick={() => setCount(count - 1)}>--</button>
            </div>
        </div>
    )
}

export default ClickerPage;