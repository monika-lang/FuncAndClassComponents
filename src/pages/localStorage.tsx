import { useEffect, useState } from "react";

const LocalStoragePage = () => {
    let item = localStorage.getItem("input_text") as string

    const [text, setText] = useState(item ? item : "");

    useEffect(() => {
        localStorage.setItem("input_text", text);
    }, [text])

    return (
        <input type="text" className="border w-full h-13 p-2" value={text} onChange={(e) => setText(e.target.value)}/>
    )
}

export default LocalStoragePage;