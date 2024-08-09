import { WORKSPACES } from '../data/workspaces.json';

export const getWorkspaces = () => {
    const workspaces = localStorage.getItem('workspaces');
    if (!workspaces) {
        localStorage.setItem('workspaces', JSON.stringify(WORKSPACES));
        return WORKSPACES;
    } else {
        return JSON.parse(localStorage.getItem('workspaces'));
    }
};

export const saveToLocalStorage = (workspaces) => {
    localStorage.setItem('workspaces', JSON.stringify(workspaces));
};

export const createWorkspace = (workspace) => {
    const workspaces = getWorkspaces();
    workspaces.push(workspace);
    saveToLocalStorage(workspaces);
};

export const deleteWorkspaceById = (id) => {
    const workspaces = getWorkspaces();
    const index = workspaces.findIndex((workspace) => workspace.id === id);
    workspaces.splice(index, 1);
    saveToLocalStorage(workspaces);
};

export const getWorkspaceById = (id) => {
    const workspaces = getWorkspaces();
    return workspaces.find((workspace) => workspace.id === id);
};
