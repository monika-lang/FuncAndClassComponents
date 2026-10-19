import { useEffect, useState } from "react"

const AutoImageSlider = () => {

    const links:string[] = ["https://content.rozetka.com.ua/goods/images/big/441877514.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTatf-xaC-Zw48oeITt0GQWjq3nrBExcQMHfzZ3jWFSUvnM1w4Z4qHE1Qc&s=10", "https://cdng.europosters.eu/pod_public/750/240922.jpg"]

    const [imageLink, setImageLink] = useState(links[0]);
    
    useEffect(() => {
        let index = 0;
        const changeInterval = setInterval(() => {
            index = (index + 1) % links.length;
            setImageLink(prev => prev = links[index])
        }, 3000);
        return () => {
            clearInterval(changeInterval);
        }
    }, [])


    return (

        <div className="flex items-center justify-center">
            <img src={imageLink} alt="" />
        </div>

    )
}

export default AutoImageSlider;