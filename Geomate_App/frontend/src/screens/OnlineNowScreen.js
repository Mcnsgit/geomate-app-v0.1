// OnlineNowPage.js
import React from 'react';
import { View, Text } from 'react-native';

const OnlineNowPage = ({ onlineUsers }) => {
    return (
    <View>
        {onlineUsers.map(user => (
        <View key={user.id} onClick={() => handleUserSelect(user.id)}>
            <Text>{user.name}</Text>
        </View>
    ))}
    </View>
);
};

export default OnlineNowPage;
