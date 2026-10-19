import { useEffect } from "react"

const FocusFieldPage = () => {
    useEffect( () => {
        document.getElementById("focus")?.focus();
    })
    
    return (
        <input type="text" className="border w-full h-13 p-2" id="focus"/>
    )
}

export default FocusFieldPage;