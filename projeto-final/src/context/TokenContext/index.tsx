import React, { createContext, useEffect, useState } from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';

export interface TipoContextoToken {
    token?: string,
    HandleSetToken: (newToken: string) => void;
    LogOut: () => void
}

export const TokenContext = createContext<TipoContextoToken>({
    token: "",
    HandleSetToken: (valor: any) => { },
    LogOut: () => { }
})

export const ProvedorToken = ({ children }) => {
    const [token, setToken] = useState<string>();

    useEffect(() => {
        
    }, [token]);

    useEffect(() => {
        getData().then((res) => {
            res && setToken(res);
        })
    }, [token])


    function LogOut() {
        setToken("");
        storeData("")
        
    };

    function HandleSetToken(newToken: any) {
        
        setToken(newToken);
        console.log(token);
    }

    const storeData = async (value: string) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@Token', jsonValue)
        } catch (e) {
            // saving error
        }
    }

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@Token')
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // error reading value
        }
    }

    return (
        <TokenContext.Provider
            value={{
                token,
                HandleSetToken,
                LogOut
            }}
        >
            {children}
        </TokenContext.Provider>
    )

}