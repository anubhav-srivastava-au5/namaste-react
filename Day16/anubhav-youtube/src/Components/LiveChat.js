import { useEffect } from "react"
import ChatMessage from "./ChatMessage"
import { addMessage } from "../utils/chatSlice"
import { useDispatch, useSelector } from "react-redux"
import { generateRandomName,generateRandomString } from "../utils/helper" 

const LiveChat = () => {
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages)
    useEffect(() => {
        const i = setInterval(() => {
            console.log("api polling");
            dispatch(addMessage({
                name: generateRandomName(),
                message: generateRandomString(20)
            }))
        }, 2000)

        return ()=>clearInterval(i)
    }, [])
    return (
        <>
        <div className="flex items-center shadow-sm p-2 flex-col-reverse">
            {/* <ChatMessage name={"anubhav"} message={"lorem ipsum...." }/> */}
            {chatMessages && chatMessages.map((c, i) => (
                <ChatMessage key={i} name={c.name} message={c.message} />
            ))}
        </div>
         <div className="border border-red-500 mt-5 end-0">
         <input type="text"/>
         <button>Send</button>
     </div>
     </>
    )
}

export default LiveChat