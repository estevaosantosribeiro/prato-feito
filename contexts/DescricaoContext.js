import { createContext, useState } from "react";

export const DescricaoContext = createContext()

export const DescricaoProvider = ({ children }) => {
    const [descricao, setDescricao] = useState('')

    return (
        <DescricaoContext.Provider value={{ descricao, setDescricao }}>
            {children}
        </DescricaoContext.Provider>
    )
}