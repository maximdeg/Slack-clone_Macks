import { createContext, useState, useContext, useEffect } from 'react';
import { getWorkspaces, getWorkspaceById, createWorkspace } from '../handlers/handleWorkspaces.js';
import { getChannelsFromWorkspace, getChannelById, saveChannel } from '../handlers/handleChannels.js';
import { saveMessage, getMessagesFromChannel } from '../handlers/handleMessages.js';

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {

    return (
        <GlobalContext.Provider
            value={{
                getWorkspaces,
                getChannelsFromWorkspace,
                getChannelById,
                getWorkspaceById,
                saveMessage,
                getMessagesFromChannel,
                saveChannel,
                createWorkspace,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
const useGlobalContext = () => {
    return useContext(GlobalContext);
};

export { useGlobalContext, GlobalContextProvider };
