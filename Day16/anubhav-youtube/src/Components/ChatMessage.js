const ChatMessage = ({name,message}) => {
    return (
        <div className="flex items-center shadow-sm p-2">
            <img className="w-5 h-5" alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
            <span className="px-2 font-extralight">{name}</span>
            <span>{message}</span>
        </div>
    )
}

export default ChatMessage