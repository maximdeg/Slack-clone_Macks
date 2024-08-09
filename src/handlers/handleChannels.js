import { getWorkspaceById, getWorkspaces, saveToLocalStorage } from './handleWorkspaces';

export const getChannelById = (idWorkspace, idChannel) => {
    const workspaceToFind = getWorkspaceById(idWorkspace);
    return workspaceToFind.channels.filter((channel) => channel.id === idChannel);
};

export const getChannelsFromWorkspace = (idWorkspace) => {
    const workspace = getWorkspaceById(idWorkspace);
    return workspace.channels;
};

export const saveChannel = (idWorkspace, channel) => {
    const workspaces = getWorkspaces();
    const workspaceIndex = workspaces.findIndex((workspace) => workspace.id === idWorkspace);
    workspaces[workspaceIndex].channels.push(channel);
    saveToLocalStorage(workspaces);
};
