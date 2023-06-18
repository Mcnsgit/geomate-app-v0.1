// UserProfilePage.js
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const UserProfilePage = ({ userId }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
    // Fetch user data from backend
    fetchUserData(userId).then(data => setUserData(data));
}, [userId]);

    return (
    <View>
        {userData && (
        <>
            <Text>{userData.name}</Text>
            <Text>{userData.location}</Text>
            {/* Display other user data */}
        </>
        )}
    </View>
    );
};

export default UserProfilePage;
