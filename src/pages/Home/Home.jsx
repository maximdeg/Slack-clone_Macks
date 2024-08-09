import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/GlobalContext';
import { HeaderHome } from '../../components';
import WorkspaceList from '../../components/WorkspaceList/WorkspaceList';

import './Home.css';
function Home() {
    const { getWorkspaces } = useGlobalContext();
    const workspaceList = getWorkspaces();

    return (
        <>
            <HeaderHome />
            <main className="home-main">
                <section className="home-section">
                    <div className="title-container">
                        <h1>Bienvenido a Macks</h1>
                    </div>
                    <div className="workspaces-container">
                        <div className="title">
                            <h4>Entornos de trabajo</h4>
                        </div>

                        <WorkspaceList workspaceList={workspaceList} />
                    </div>
                    <div className="create-workspace-container">
                        <Link to={'/workspace/new'}>
                            <button className=" button btn-create-workspace">Crear entorno</button>
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;
