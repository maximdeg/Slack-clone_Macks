import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
import HeaderHome from '../../components/HeaderHome/HeaderHome';

import { useGlobalContext } from '../../context/GlobalContext';

import './NewWorkspace.css';

function NewWorkspace() {
    const { createWorkspace, getWorkspaces } = useGlobalContext();
    const [newWorkspace, setNewWorkspace] = useState(getWorkspaces());

    const navigate = useNavigate();
    const initialStateWorkspace = {
        id: uuid(),
        workspace_name: '',
        channels: [
            { channel_name: 'General', messages: [], id: '' },
            { channel_name: '', messages: [], id: '' },
        ],
    };
    const [workspace, setWorkspace] = useState(initialStateWorkspace);

    const handleWorkspaceChange = (e) => {
        setWorkspace({
            ...workspace,
            [e.target.name]: e.target.value,
        });
        console.log(`${e.target.name}: ${e.target.value}`);
    };

    const handleChannelChange = (e) => {
        setWorkspace({
            ...workspace,
            channels: [
                { channel_name: 'General', messages: [], id: uuid() },
                { channel_name: e.target.value, messages: [], id: uuid() },
            ],
        });
    };

    const handleSubmitWorkspace = (e) => {
        e.preventDefault();

        setNewWorkspace([...newWorkspace, workspace]);
        console.log('Saving workspace', workspace);
        createWorkspace(workspace);
        navigate('/');
    };

    return (
        <>
            <HeaderHome />
            <main className="new-workspace_main">
                <div className="title-container">
                    <h1>Crea un entorno de trabajo</h1>
                </div>
                <div className="new-workspace-container">
                    <form onSubmit={(e) => handleSubmitWorkspace(e)} className="new-workspace-form">
                        <div className="input-workspace_container container">
                            <label className="label" htmlFor="workspace_name">
                                Nombre del entorno de trabajo*
                            </label>
                            <input
                                type={workspace.workspace_name}
                                name="workspace_name"
                                id="workspace_name"
                                onChange={handleWorkspaceChange}
                                value={workspace.workspace_name}
                            />
                        </div>
                        <div className="input-channel_container container">
                            <label className="label" htmlFor="channel_name">
                                Nombre del canal #
                            </label>
                            <input
                                type={workspace.channels[1].channel_name}
                                name="channel_name"
                                id="channel_name"
                                onChange={handleChannelChange}
                                value={workspace.channels[1].channel_name}
                            />
                        </div>
                        <div className="buttons-container_container container">
                            <button type="submit" className="button btn-create-workspace">
                                Crear
                            </button>
                            <Link to={'/'}>
                                <button className="button btn-cancel-workspace">Cancelar</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}

export default NewWorkspace;
