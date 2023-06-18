// PersonalPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const PersonalPage = ({ user }) => {
    const [name, setName] = useState(user.name);
    const [location, setLocation] = useState(user.location);

    const handleSave = () => {
    // Save changes to backend
    saveChanges({ name, location });
    };

    return (
    <View>
        <TextInput value={name} onChangeText={setName} />
        <TextInput value={location} onChangeText={setLocation} />
        <Button title="Save Changes" onPress={handleSave} />
    </View>
    );
};

export default PersonalPage;
