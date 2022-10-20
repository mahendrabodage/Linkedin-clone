import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./Sidebar.css";

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1574110537361-ff1948fc4a57?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGNhbnZhcyUyMHRleHR1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                <Avatar src={user.photoUrl } className="sidebar__avatar"> { user.email[0] && user.email[0].toUpperCase() } </Avatar>
                <h2>{ user.displayName }</h2>
                <h4>{ user.email }</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Wo viewd view</p>
                    <p className="sidebar__statNumber">2456</p>
                </div>
                <div className="sidebar__stat">
                    <p>Wo viewd view</p>
                    <p className="sidebar__statNumber">2456</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("softwareengineering")}
                {recentItem("design")}
                {recentItem("developer")}
            </div>
        </div>
    )
}

export default Sidebar
