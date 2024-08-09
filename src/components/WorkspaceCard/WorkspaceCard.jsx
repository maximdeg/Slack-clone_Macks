import React from 'react';
import { Link } from 'react-router-dom';

import './WorkspaceCard.css';

function WorkspaceCard({ workspace }) {
    console.log(Boolean(workspace.workspace_name.split(' ')[1]));
    return (
        <Link to={'/workspace/' + workspace.id + '/' + workspace.channels[0].id} className="workspace-card-link">
            <div className="workspace-card-container">
                <div className="workspace-square-container">
                    <div className="workspace-squares">
                        <span className="initials-span">
                            {workspace.workspace_name[0].toUpperCase()}
                            {workspace.workspace_name.split(' ')[1] &&
                                workspace.workspace_name.split(' ')[1][0].toUpperCase()}
                        </span>
                    </div>
                </div>
                <div className="workspace-name-container">
                    <span>{workspace.workspace_name}</span>
                </div>
            </div>
        </Link>
    );
}

export default WorkspaceCard;
