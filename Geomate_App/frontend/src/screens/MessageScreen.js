// MessagesPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const MessagesPage = ({ messages }) => {
    const [newMessage, setNewMessage] = useState('');

    const handleSend = () => {
    // Send new message to backend
    sendMessage(newMessage).then(() => setNewMessage(''));
    };

    return (
    <View>
        {messages.map(message => (
        <View key={message.id}>
            <Text>{message.content}</Text>
        </View>
        ))}
        <TextInput value={newMessage} onChangeText={setNewMessage} />
        <Button title="Send" onPress={handleSend} />
    </View>
    );
};

export default MessagesPage;
