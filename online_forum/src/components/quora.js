import React from 'react';
import '../css/quora.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';

function Quora(){
    return (
        <div className="quora">
            <Navbar />
            <div className="quora__content">
                <Sidebar />
                <Feed /> 
                <Widget />
            </div>
        </div>
    );
}

export default Quora;