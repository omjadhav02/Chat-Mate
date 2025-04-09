import { useState } from "react";
import { useAuthContext } from "../context/AuthContext"
import toast from "react-hot-toast";


const useLogout = ()=>{
    const [loading,setLoading] = useState(false)

    const {setAuthUser} = useAuthContext();

    const logout = async() =>{
        try{
            const res = await fetch("/api/auth/logout",{
                method:"POST",
                headers:{"Context-Type":"appllication/json"},
            })
            const data = await res.json();
            if(data.e){
                throw new Error(data.e);
            }

            localStorage.removeItem("chat-user");
            setAuthUser(null)
        }catch(e){
            toast.error(e.message)
        }finally{
            setLoading(false)
        }
    }

    return {loading,logout}
}

export default useLogout;