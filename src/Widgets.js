import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn  News </h2>
                <InfoIcon />
            </div>
            {newsArticle("React is worlds famous library", "Top news - 9099 readers")}
            {newsArticle("COVID 19 Updates India", "Top news - 1200 readers")}
            {newsArticle("Tesla hits new high", "Cars and Auto - 200 readers")}
            {newsArticle("Bitcoin Breaks $22k", "Crypto - 8000 readers")}
        </div>
    )
}

export default Widgets
