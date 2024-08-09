import React from 'react';
import WorkspaceCard from '../WorkspaceCard/WorkspaceCard';

import './WorkspaceList.css';

function WorkspaceList({ workspaceList }) {
    return (
        <div className="workspaces-list-container">
            {workspaceList.map((workspace, index) => (
                <WorkspaceCard key={index} workspace={workspace} />
            ))}
        </div>
    );
}

export default WorkspaceList;
