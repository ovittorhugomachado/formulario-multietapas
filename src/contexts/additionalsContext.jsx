import { createContext, useState } from "react";

export const AdditionalsContext = createContext();

export const AdditionalsProvider = ({ children }) => {

    const [additionals, setAdditionals] = useState([]);

    const addAdditional = (additional) => {
        setAdditionals((prev) => {
            if (prev.some((item) => item.key === additional.key)) {
                return prev.filter((item) => item.key !== additional.key);
            } else {
                return [...prev, additional];
            }
        });
    };
    

    return (
        <AdditionalsContext.Provider value={{ additionals, addAdditional }}>
            {children}
        </AdditionalsContext.Provider>
    );
};