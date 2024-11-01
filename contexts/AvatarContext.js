import { createContext, useState } from "react";

export const AvatarContext = createContext()

export const AvatarProvider = ({ children }) => {
    const [avatar, setAvatar] = useState(require('../assets/avatar/cat.png'))

    return (
        <AvatarContext.Provider value={{ avatar, setAvatar }}>
            {children}
        </AvatarContext.Provider>
    )
}