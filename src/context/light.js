import { createContext, useState } from "react";

export const LightContext = createContext(null);

export const LightProvider = (props) => {
    const [lightStatus, setlightStatus] = useState(true)
    return (
        <LightContext.Provider value={{ lightStatus, setlightStatus }}>
            {props.children}
        </LightContext.Provider>
    )
}