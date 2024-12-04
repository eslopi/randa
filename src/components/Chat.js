import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        const unsubscribe = db.collection('chat').orderBy('timestamp')
            .onSnapshot(snapshot => {
                const messagesData = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setMessages(messagesData);
            });

        return () => unsubscribe();
    }, []);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
            await db.collection('chat').add({
                text: newMessage,
                timestamp: new Date()
            });
            setNewMessage('');
        }
    };

    return (
        <div>
            <h2>الدردشة</h2>
            <div className="chat-window">
                {messages.map(message => (
                    <div key={message.id}>
                        <p>{message.text}</p>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSendMessage}>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="اكتب رسالة..."
                />
                <button type="submit">إرسال</button>
            </form>
        </div>
    );
};

export default Chat;