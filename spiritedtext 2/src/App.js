// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import MessageBubble from './components/MessageBubble';
import MessageInput from './components/MessageInput';

function App() {
    const [messages, setMessages] = useState([
        { text: 'Hello! Ask me anything about the Bible.', isUser: false }
    ]);

    // Callback to add new messages into the conversation
    const handleSend = (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    return (
        <div
            id="app-container"
            style={{
                width: '100%',
                maxWidth: '480px',
                margin: '0 auto',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                fontFamily: 'Arial, sans-serif',
                border: '1px solid #ccc',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
        >
            <Header />
            {/* Chat Window */}
            <div
                style={{
                    flex: 1,
                    padding: '20px',
                    backgroundColor: '#F0F0F0',
                    display: 'flex',
                    flexDirection: 'column',
                    overflowY: 'auto'
                }}
            >
                {messages.map((msg, index) => (
                    <MessageBubble key={index} text={msg.text} isUser={msg.isUser} />
                ))}
            </div>
            <MessageInput onSend={handleSend} />
        </div>
    );
}

export default App;
