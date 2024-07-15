import React, { useEffect, useState, useRef } from "react";
import { FiSmile, FiSend,FiChevronDown } from "react-icons/fi";


const ChatMessages = ({ chatId, isSelected, creatorName, chatStatus }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  

  const messageEndRef = useRef(null);

  useEffect(() => {
    setLoading(true); 
    fetch(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setMessages(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [chatId, creatorName, chatStatus]);

  const getCreatorInitial = () => {
    if (creatorName) {
      return creatorName.charAt(0).toUpperCase();
    } else {
      return 'U';
    }
  };

  const getCreatorName = () => {
    if (creatorName) {
      return creatorName;
    } else {
      return "Unknown";
    }
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const newMsg = {
      id: new Date().getTime(),
      sender: { name: "You" }, 
      message: newMessage,
      created_at: new Date().toISOString(),
    };


    setMessages([...messages, newMsg]);
    setNewMessage("");

  
    const storedMessages = JSON.parse(localStorage.getItem(chatId)) || [];
    localStorage.setItem(chatId, JSON.stringify([...storedMessages, newMsg]));

    
    scrollToBottom();
  };

  const scrollToBottom = () => {
    if (messageEndRef.current) {
      setTimeout(() => {
        messageEndRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div className={`flex flex-col ml-1 items-center justify-center  ${isSelected ? "bg-purple-200" : ""}`}>
      <div className="bg-customGray w-full h-14 text-white sticky top-0 z-10 p-1">
        {chatId ? (
          <div className="flex flex-row items-center ml-2 ">
            <div className="rounded-full bg-purple-500 text-white w-10 h-10 flex items-center justify-center text-xl font-bold">
              {getCreatorInitial()}
            </div>
            <div className="ml-2">
              <p className="font-bold text-l">{getCreatorName()}</p>
              <span className="text-slate-500 text-sm ">
                {chatStatus === 'ongoing' ? 'Ongoing' : 'Ended'}
              </span>
            </div>
          </div>
        ) : null}
        
      </div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {!loading && !error && (
        <div className="w-full flex flex-col items-center  relative">
          <div className="w-full max-w-lg flex flex-col mb-2 overflow-y-auto pt-2"
               style={{ maxHeight: 'calc(100vh - 20vh)', overflowY: 'scroll', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
            {messages.map((message) => (
              <div key={message.id} className={`p-2 rounded-md shadow mb-2 text-left ${message.sender.name === "You" ? 'text-right text-white bg-customButton ' : 'bg-customButton text-left'}`}>
                <div className=" text-purple-600 text-xs">
                  {message.sender.name || "Unknown"}
                </div>
                <div className="text-sm text-white mt-1 whitespace-pre-wrap break-words">
                  {message.message}
                </div>
                <div className="text-xs text-gray-400 mt-1 text-right">
                  {new Date(message.created_at).toLocaleString()}
                </div>
              </div>
            ))}
            <div ref={messageEndRef}></div>
          </div>
          
          <div className="w-full max-w-lg mt-2 flex items-center fixed bottom-2 z-10 bg-customButton rounded-2xl ">
            <div className=" text-white p-2 rounded-full flex items-center justify-center shadow hover:bg-purple-700">
              <FiSmile className=" text-white text-2xl cursor-pointer" /> {/* Emoji button */}
            </div>
            <input
              type="text"
              className="w-full p-2 rounded-md shadow bg-customButton focus:outline-none caret-white text-white "
              style={{ minWidth: "200px", maxWidth: "100%" }}
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            
            <button
              className="ml-2  text-white p-2 rounded-full flex items-center justify-center shadow hover:bg-purple-700"
              onClick={handleSendMessage}
            >
              <FiSend className="text-xl" />
            </button>
            <button
          className="ml-2 text-white p-2 rounded-full flex items-center justify-center shadow hover:bg-purple-700"
          onClick={scrollToBottom}
        >
          <FiChevronDown className="text-xl" />
        </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessages;

