import { useEffect, useState } from "react"
import useConversations from "../zustand/useConversations"
import toast from "react-hot-toast";

const useGetMessages = () => {
    const [loading,setLoading] = useState(false)

    const {messages,setMessages,selectedConversation} = useConversations();

    useEffect(()=>{
        const getMessages = async()=>{
            setLoading(true)
            try{
                
                const res = await fetch(`/api/messages/${selectedConversation._id}`)
                const data = await res.json()

                if(data.e){
                    throw new Error(e.message)
                }
                console.log(data)
                setMessages(data)

            }catch(e){
                toast.error(e.message)
            }finally{
                setLoading(false)
            }
        }
        if(selectedConversation?._id) getMessages()

    },[selectedConversation?._id,setMessages])

    return {messages,loading}
}

export default useGetMessages