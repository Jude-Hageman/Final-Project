// src/pages/ChatPage.js
import React, { useState } from 'react';
import Header from '../components/Header';
import MessageBubble from '../components/MessageBubble';
import MessageInput from '../components/MessageInput';

const ChatPage = () => {
    const [messages, setMessages] = useState([
        { text: 'Hello! Ask me anything about the Bible.', isUser: false },
    ]);

    // Append new messages to the list
    const handleSend = (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    return (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Header />
            <div style={{ flex: 1, padding: '10px', overflowY: 'scroll' }}>
                {messages.map((msg, index) => (
                    <MessageBubble key={index} text={msg.text} isUser={msg.isUser} />
                ))}
            </div>
            <MessageInput onSend={handleSend} />
        </div>
    );
};

export default ChatPage;
