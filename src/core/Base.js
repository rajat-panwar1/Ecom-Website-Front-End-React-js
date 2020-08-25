import React from 'react'
import Menu from './Menu'

const Base = ({
    title = "SAGE CLAN",
    description = "My description",
    className = "bg-dark text-white p-4",
    children  
}) => {
    return (
        <div>
            <Menu/>
            <div className="container-fluid">
                <div className="jumbotron bg-dark text-white text-center">
                    <h2 className="display-4">{title}</h2>
    <p className="lead">{description}</p>
                </div>
                <div className={className}>{children}</div>
            </div>
            <footer className="footer bg-dark mt-suto py-3">
                <div className="container-fluid bg-success text-white text-center py-3">
                    <h4>
                        SAGE CLAN
                    </h4>
                    <button className="btn btn-warning btn-lg">Contact Us</button>
                    <div className="container">
                        <span className="text-warning">
                            Hyzen is the Best
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
}


export default Base;