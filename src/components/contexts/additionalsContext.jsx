import { createContext, useState } from "react";


export const AdditionalsContext = createContext();

export const AdditionalsProvider = ({ children }) => {

    const [additionals, setAdditionals] = useState([]);

    const addOrRemove = (name) => {
        setAdditionals((e) => {
            if (e.includes(name)){
                return e.filter(divIndex => divIndex !== name)
            }else {
                return [...e, name];
              }
        });
      };


    return (
        <AdditionalsContext.Provider value={{ additionals, setAdditionals, addOrRemove }}>
            {children}
        </AdditionalsContext.Provider>
    );
};
