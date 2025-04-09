import { useEffect, useState } from "react";
import toast from "react-hot-toast";


const useGetConversation = ()=>{
    const [loading,setLoading] = useState(false);
    const [conversations,setConversation] = useState([])

    useEffect(()=> {
        const getConversations = async ()=>{
            setLoading(true);
            try{
                const res = await fetch('/api/users')
                const data = await res.json();
                if(data.e){
                    throw new Error(data.e)
                }
                setConversation(data)
            }catch(e){
                toast.error(e.message)
            }finally{
                setLoading(false);
            }
        }

        getConversations();
    },[]);

    return {loading, conversations}
}

export default useGetConversation;
