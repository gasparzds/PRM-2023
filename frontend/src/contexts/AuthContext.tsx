import { ICredential, IUser,  } from "../@types";
import {ReactNode, createContext,useState, } from "react";
import { sigIn } from "../services";
import jwtDecode from "jwt-decode";


type AuthContextProps = {
    user: IUser | undefined;
    token: string | undefined;
    login: (Credential: ICredential) => Promise <void>;
    logout: () => void;
    register: (user: IUser) => void;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

type AuthContextProviderProps = {
    children: ReactNode
}
export function AuthContextProvider(props: AuthContextProviderProps){
    const [user, setUser] = useState<IUser>();
    const [token, setToken] = useState<string>();

    useEffect(()=>{
        //recupera os valores da Local Storage
        const storageToken = localStorage.getItem('token');
        const storageUser = localStorage.getItem('user');

        if (storageToken&&storageUser){
            setToken(storageToken)
            setUser(JSON.parse(storageUser))
        }


    },[]);

    const login = async (credential: ICredential) => {
        await sigIn(credential)
            .then(result => {
                const token = result.data.accessToken;

                //PEGA o usuario do token 
                const payloadDecoded: Record<string,any> = jwtDecode(token);

                const userToken: IUser = {
                    id: payloadDecoded.userId,
                    fullname: payloadDecoded.fullname,
                    username: payloadDecoded.username,
                }

                localStorage.setItem('user', JSON.stringify(userToken));
                localStorage.setItem('token', token);


                setUser(userToken);
                setToken(token);

            })
            .catch(error => {
                return new Promise((resolve, reject) => {
                    reject(error.response.data)
                })

            })

    }

    function logout(){}
    function register(){}

    return (
        <AuthContext.Provider value={{user, token, login, logout, register}}>
            {props.children}
        </AuthContext.Provider>
    )
}

function useEffect(arg0: () => void, arg1: never[]) {
    throw new Error("Function not implemented.");
}
