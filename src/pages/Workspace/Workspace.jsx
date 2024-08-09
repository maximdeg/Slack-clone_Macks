import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../../context/GlobalContext';
import { IoSend } from 'react-icons/io5';
import Header from '../../components/Header/Header';
import ChannelList from '../../components/ChannelList/ChannelList';
import MessageList from '../../components/MessageList/MessageList';
import WorkspaceNavigator from '../../components/WorkspaceNavigator/WorkspaceNavigator';

import './Workspace.css';

function Workspace() {
    const { id_workspace, id_channel } = useParams();
    const {
        getChannelsFromWorkspace,
        getWorkspaceById,
        getChannelById,
        saveMessage,
        getMessagesFromChannel,
        saveChannel,
    } = useGlobalContext();

    const workspace = getWorkspaceById(id_workspace);
    const channels = getChannelsFromWorkspace(id_workspace);

    const [currentChannel] = getChannelById(id_workspace, id_channel);
    const initialStateMessageList = getMessagesFromChannel(id_workspace, id_channel);
    const [newMessageList, setNewMessageList] = useState(initialStateMessageList);
    const [newChannel, setNewChannel] = useState('');

    const [isCreateChannelActive, setIsCreateChannelActive] = useState(false);
    const [isFormChannelActive, setIsFormChannelActive] = useState(false);

    function handleToggleForm() {
        setIsCreateChannelActive(!isCreateChannelActive);
    }

    useEffect(() => {
        if (isCreateChannelActive) {
            setIsFormChannelActive(false);
        }
    }, [isCreateChannelActive]);

    const handleSubmitMessage = (e, message) => {
        e.preventDefault();
        setNewMessageList([...newMessageList, message]);
        console.log('Sent', message);
        saveMessage(id_workspace, id_channel, message);
    };

    const handleSubmitChannel = (e, channel) => {
        e.preventDefault();
        channel.id = uuid();
        setNewChannel([...newChannel, channel]);
        console.log('Saving channel', channel);
        saveChannel(id_workspace, channel);
    };

    return (
        <>
            <Header workspace_name={workspace.workspace_name} />
            <section className="workspace-container">
                <WorkspaceNavigator />
                <div className="main">
                    <div className="main-navigator">
                        <div className="channel-navigator">
                            <div className="workspace-name-container">
                                <h3>{workspace.workspace_name}</h3>
                            </div>
                            <div className="channel-container">
                                <h4>Canales</h4>
                                <ChannelList id_workspace={id_workspace} channels={channels} />
                            </div>
                            <button className="button btn-create-channel" onClick={handleToggleForm}>
                                Crear canal
                            </button>
                            {isCreateChannelActive && (
                                <AddChannelForm
                                    handleSubmitChannel={handleSubmitChannel}
                                    handleClick={handleToggleForm}
                                />
                            )}
                        </div>
                    </div>
                    <div className="chat-container">
                        <div className="channel-name-container">
                            <h2># {currentChannel.channel_name}</h2>
                        </div>
                        <MessageList messages={currentChannel.messages} />
                        <MessageInput handleSubmitMessage={handleSubmitMessage} />
                    </div>
                </div>
            </section>
        </>
    );
}

function AddChannelForm({ handleSubmitChannel, handleClick }) {
    const initialStateChannel = {
        id: '',
        channel_name: '',
        messages: [],
    };

    const [channelValue, setChannelValue] = useState(initialStateChannel);

    const handleContentChange = (e) => {
        setChannelValue({
            ...channelValue,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="create-channel-container">
            <h3 className="create-channel-title">Añadir canal</h3>
            <form className="create-channel-form" onSubmit={(e) => handleSubmitChannel(e, { ...channelValue })}>
                <label className="label" htmlFor="name">
                    Nombre del canal
                </label>
                <input
                    className="input input-channel"
                    type={channelValue.name}
                    id="channel-name"
                    name="channel_name"
                    onChange={handleContentChange}
                    value={channelValue.name}
                    placeholder="Nuevo canal..."
                />
                <div className="btn-container">
                    <button className="button btn-create btn-cancel-channel" type="cancel" onClick={handleClick}>
                        Cancelar
                    </button>
                    <button className="button btn-create btn-confirm-channel" type="submit">
                        Confirmar
                    </button>
                </div>
            </form>
        </div>
    );
}

function MessageInput({ handleSubmitMessage }) {
    const initialStateMessage = {
        id: '',
        date: new Date().toLocaleString(),
        username: '',
        image: '',
        message: '',
    };

    const [msgValue, setMsgValue] = useState(initialStateMessage);

    const handleContentChange = (e) => {
        setMsgValue({
            ...msgValue,
            [e.target.name]: e.target.value,
        });
    };

    const handleClearInput = () => {
        setMsgValue(initialStateMessage);
    };

    return (
        <div className="form-container">
            <form
                className="input-form"
                onSubmit={(e) => {
                    handleSubmitMessage(e, { ...msgValue });
                    handleClearInput();
                }}
            >
                <input
                    className="input input-message"
                    type={msgValue.message}
                    id="message"
                    name="message"
                    onChange={handleContentChange}
                    value={msgValue.message}
                    placeholder="Escribe aqui un mensaje..."
                ></input>
                <button className="btn-submit" type="submit">
                    <IoSend />
                </button>
            </form>
        </div>
    );
}

export default Workspace;
