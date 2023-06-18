// VideoChatPage.js
import React from 'react';
import { RtcEngine, AgoraView } from 'react-native-agora';

const VideoChatPage = ({ channel }) => {
    const [peerIds, setPeerIds] = useState([]);
    const [engine, setEngine] = useState(null);

    useEffect(() => {
    const init = async () => {
        const _engine = await RtcEngine.create('Your Agora.io App ID');
        setEngine(_engine);

        _engine.enableVideo();

        _engine.addListener('UserJoined', (uid, elapsed) => {
        setPeerIds([...peerIds, uid]);
        });

        _engine.addListener('UserOffline', (uid, reason) => {
        setPeerIds(peerIds.filter(id => id !== uid));
        });

        await _engine.joinChannel(null, channel, null, 0);
    };

    init();
}, []);

    return (
    <View>
        <AgoraView style={{ flex: 1 }} remoteUid={peerIds[0]} mode={1} />
    </View>
    );
};

export default VideoChatPage;
