import { useEffect, useState } from "react";

const Duck = () => {

    const [duck, setDuck] = useState("");
    const url = 'https://random-d.uk/api/quack';

    const fetchDuck = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setDuck(data.url)
    }

    useEffect(() => {
        fetchDuck()
    }, [])

    return (
        <>
            <img src={duck} alt="duck" />
            <figcaption>Duck of the day</figcaption>
        </>
    );
};

export default Duck
