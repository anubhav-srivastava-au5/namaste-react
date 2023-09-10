import { useEffect } from "react"
import ChatMessage from "./ChatMessage"
import { addMessage } from "../utils/chatSlice"
import { useDispatch, useSelector } from "react-redux"

const LiveChat = () => {
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages)

    console.log("hiiiiiiiiiiiiiiii1");
    useEffect(() => {
        console.log("hiiiiiiiiiiiiiiii1.5");
        const i = setInterval(() => {
            console.log("hiiiiiiiiiiiiiiii2");

            console.log("api polling");
            dispatch(addMessage({
                name: "anubhav Sri",
                message: "lorem again again"
            }))
        }, 2000)

        return ()=>clearInterval(i)
    }, [])
    return (
        <div >
            {/* <ChatMessage name={"anubhav"} message={"lorem ipsum...." }/> */}
            {chatMessages && chatMessages.map((c, i) => (
                <ChatMessage key={i} name={c.name} message={c.message} />
            ))}
        </div>
    )
}

export default LiveChat