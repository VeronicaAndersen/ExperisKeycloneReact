import { useEffect, useState } from "react";

const Duck = () => {

    const [ducks, setDuck] = useState("");

    const fetchDuck = async () => {
        const response = await fetch("https://random-d.uk/api");
        const data = await response.json()
        setDuck(JSON.stringify(data.message))
    }

    useEffect(() => {
        fetchDuck()
    }, [])

    return (
        <>
            <p>hello</p>
            <p>{ducks}</p>
        </>
    );
};

export default Duck

