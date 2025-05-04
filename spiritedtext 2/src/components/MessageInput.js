// src/components/MessageInput.js
import React, { useState } from 'react';
import backendService from '../services/backendService';

const MessageInput = ({ onSend }) => {
    const [text, setText] = useState('');

    const handleSend = async () => {
        if (text.trim()) {
            onSend({ text, isUser: true });
            const aiResponse = await backendService(text);
            onSend({ text: aiResponse, isUser: false });
            setText('');
        }
    };

    return (
        <div style={{ display: 'flex', padding: '10px', borderTop: '1px solid #ccc' }}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Ask me anything about the Bible..."
                style={{ flex: 1, padding: '10px', marginRight: '10px' }}
                onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
            />
            <button
                onClick={handleSend}
                style={{
                    padding: '10px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none'
                }}
            >
                Ask AI
            </button>
        </div>
    );
};

export default MessageInput;
