import { createContext, useState } from "react";


export const AdditionalsContext = createContext();

export const AdditionalsProvider = ({ children }) => {

    const [additionals, setAdditionals] = useState([]);

    const addOrRemove = (index) => {
        setAdditionals((e) => {
            if (e.includes(index)){
                return e.filter(divIndex => divIndex !== index)
            }else {
                return [...e, index];
              }
        });
      };


    return (
        <AdditionalsContext.Provider value={{ additionals, setAdditionals, addOrRemove }}>
            {children}
        </AdditionalsContext.Provider>
    );
};
