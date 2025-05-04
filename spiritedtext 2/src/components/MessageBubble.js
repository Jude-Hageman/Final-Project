import React from 'react';
import './MessageBubble.css';

const MessageBubble = ({ text, isUser }) => (
    <div className={`message-bubble ${isUser ? 'user' : 'ai'}`}>
        <p>{text}</p>
    </div>
);

export default MessageBubble;
