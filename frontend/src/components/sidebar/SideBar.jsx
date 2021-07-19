import React from "react";
import {BiHomeAlt, GoDashboard, GiFishingNet, GiDisintegrate, IoAnalyticsOutline} from "react-icons/all";
import './sidebar.css';

export class SideBar extends React.Component {
    render() {
        return (
            <div className="d-flex flex-column flex-shrink-0 p-3 "
                 style={{width: "20%",
                     backgroundColor: "#ffebfa",
                     height: window.innerHeight,
                     display: "table-column",
                     float:"left",
                     zIndex: 0,
                     position: "fixed",
                     top: 0,
                     marginTop: 56,
                     overflowX: "hidden",
                     borderRight: "1px solid #8a6380"
                 }}>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <a href="/" className={"nav-link " + (window.location.pathname.split("/")[1] === '' ? "active": "link-dark")} aria-current="page">
                            <BiHomeAlt className="bi me-2" width="16" height="16" style={{marginRight: "5"}}/>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/dashboard/" className={"nav-link "+ (window.location.pathname.split("/")[1] === 'dashboard' ? "active": "link-dark")}>
                            <GoDashboard className="bi me-2" width="16" height="16" style={{marginRight: "5"}}/>
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="/caught-rats/" className={"nav-link "+ (window.location.pathname.split("/")[1] === 'caught-rats' ? "active": "link-dark")}>
                            <GiFishingNet className="bi me-2" width="16" height="16" style={{marginRight: "5"}}/>
                            Caught Rats
                        </a>
                    </li>
                    <li>
                        <a href="/escaped-rats/" className={"nav-link "+ (window.location.pathname.split("/")[1] === 'escaped-rats' ? "active": "link-dark")}>
                            <GiDisintegrate className="bi me-2" width="16" height="16" style={{marginRight: "5"}}/>
                            Escaped Rats
                        </a>
                    </li>
                    <li>
                        <a href="/data-analysis/" className={"nav-link "+ (window.location.pathname.split("/")[1] === 'data-analysis' ? "active": "link-dark")}>
                            <IoAnalyticsOutline className="bi me-2" width="16" height="16" style={{marginRight: "5"}}/>
                            Data Analysis
                        </a>
                    </li>
                </ul>
                <hr/>
            </div>
        );
    }
}
/*
<div id="content" className={"wrapper"}>
                <nav id="sidebar">
                    <ul className="list-unstyled components">
                        <li>
                            <a href="/dashboard/">Dashboard</a>
                        </li>
                        <li>
                            <a href="/about/">About</a>
                        </li>
                        <li>
                            <a href="/portfolio/">Portfolio</a>
                        </li>
                        <li>
                            <a href="/contact/">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
 */
