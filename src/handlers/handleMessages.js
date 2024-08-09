import { getChannelById } from '../handlers/handleChannels.js';
import { getWorkspaces, saveToLocalStorage } from './handleWorkspaces.js';

export const getMessagesFromChannel = (workspaceId, channelId) => {
    const [channel] = getChannelById(workspaceId, channelId);
    console.log(channel.channel_name);
    return channel.messages;
};

export const saveMessage = (workspaceId, channelId, message) => {
    const workspaces = getWorkspaces();
    const workspaceIndex = workspaces.findIndex((workspace) => workspace.id === workspaceId);
    const channelIndex = workspaces[workspaceIndex].channels.findIndex((channel) => channel.id === channelId);

    workspaces[workspaceIndex].channels[channelIndex].messages.push(message);

    console.log('Message saved:', message);
    saveToLocalStorage(workspaces);
};
