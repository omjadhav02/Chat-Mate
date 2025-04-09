import toast from "react-hot-toast";
import useConversations from "../zustand/useConversations";
import { useState } from "react";

const useSendMessage = ()=>{

    const [loading,setLoading] = useState(false)
    const {messages, setMessages, selectedConversation} = useConversations();

    const sendMessage = async(message)=>{
        setLoading(true)
        try{
            const res = await fetch(`/api/messages/send/${selectedConversation._id}`,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({message})
            })

            const data = await res.json();
            if(data.e) throw new Error(e.message)

            setMessages([...messages,data])
            

        }catch(e){
            toast.error(e.message)
        }finally{
            setLoading(false)
        }
    }
    return {sendMessage,loading} 
}
export default useSendMessage;

