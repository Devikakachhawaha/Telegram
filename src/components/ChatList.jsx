import React, { useEffect, useState } from 'react';
import SideBar from './Sidebar/SideBar';

const ChatList = ({ onChatSelect }) => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedChatId, setSelectedChatId] = useState(null);

  useEffect(() => {
    fetch('https://devapi.beyondchats.com/api/get_all_chats?page=1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setChats(data.data.data); 
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    
    const isCurrentYear = date.getFullYear() === now.getFullYear();

    if (isCurrentYear) {
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const month = monthNames[date.getMonth()];
      const day = date.getDate();
      return `${month} ${day}`; 
    } else {
      return dateString; 
    }
  };

  const handleChatClick = (chatId, creatorName, chatStatus) => {
    setSelectedChatId(chatId); 
    onChatSelect(chatId, creatorName, chatStatus); 
  };

  const CreatorFirstLetter = (creatorName) => {
    if (creatorName) {
      return creatorName.charAt(0).toUpperCase();
    } else {
      return 'U'; 
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className='p-4 shadow sticky top-0'><SideBar /></div>
      <div className='pt-5 '>
        {chats.map(chat => (
          <div
            key={chat.id}
            onClick={() => handleChatClick(chat.id, chat.creator.name, chat.status)}
            className={`flex items-center p-4 ml-2 rounded-md shadow cursor-pointer text-white ${selectedChatId === chat.id ? 'bg-customButton text-white' : '' } hover:bg-customButton`}
          >
            <div className='rounded-full bg-purple-500 text-white w-10 h-10 m-2 flex items-center justify-center text-xl font-bold'>
              {CreatorFirstLetter(chat.creator.name)}
            </div>
            <div className="flex-grow ">
              <div className="text-lg font-medium">{chat.creator.name || 'Unknown'}</div>              
              <div className="text-sm">
                Status: <span className="ml-1">{chat.status === 'ongoing' ? 'Ongoing' : 'Ended'}</span>
              </div>
            </div>
            <div className="flex flex-col items-center ml-4 ">
              <div className="text-sm text-white text-right">
                {formatDate(chat.updated_at)}
              </div>
              <div className="flex items-center justify-center w-6 h-6 bg-purple-600 rounded-full m-2 ">
                <span className="text-xs text-white ">{chat.msg_count}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
