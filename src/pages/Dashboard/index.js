import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';

function Dashboard(){
    return (
        <div>
            <h1>Dashboard</h1>
            <Link to="/">
                <p>Sair</p>
            </Link>
        </div>
    );
}

export default Dashboard;