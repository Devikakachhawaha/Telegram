import React, { useState } from 'react';
import ChatList from './components/ChatList';
import ChatMessages from './components/ChatMessages';
import './App.css';


const App = () => {
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [selectedCreatorName, setSelectedCreatorName] = useState('');
  const [status, setstatus] = useState('')

  const handleChatSelect = (chatId, creatorName,chatStatus) => {
    console.log('Chat selected:', { chatId, creatorName, chatStatus}); // Log the chatId and creatorName
    setSelectedChatId(chatId);
    setSelectedCreatorName(creatorName);
    setstatus(chatStatus);
  };

  return (

    <div className="flex h-screen overflow-hidden">
      
      <div className="w-1/3 bg-customGray overflow-y-auto custom-scrollbar ">
        <ChatList onChatSelect={handleChatSelect} />
      </div>
      <div className="w-2/3  bg-black  overflow-y-auto custom-scrollbar">
        {selectedChatId ?(
          <ChatMessages chatId={selectedChatId} creatorName={selectedCreatorName} chatStatus={status}  />
        ) : (
          <div className="text-gray-500">Select a chat to view messages</div>
        )
        }
      </div>
    </div>
    
   
  );
};

export default App;
