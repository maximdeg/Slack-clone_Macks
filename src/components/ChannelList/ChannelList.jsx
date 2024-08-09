import React from 'react';
import { Link } from 'react-router-dom';

import './ChannelList.css';

function ChannelList({ id_workspace, channels }) {
    return (
        <div className='channel-list-container'>
            {channels.map((channel) => (
                    <Link to={'/workspace/' + id_workspace + '/' + channel.id} key={channel.id} className="link">
                        <div key={channel.id} className="channel" name="channel" id={channel.id}>
                            {`# ${channel.channel_name}`}
                        </div>
                    </Link>
            ))}
        </div>
    );
}

export default ChannelList;
