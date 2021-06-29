import React from "react";
import {Navbar} from "react-bootstrap";

export class NavigationBar extends React.Component{

    render() {
        return (
            <Navbar style={{backgroundColor:"#ffebfa"}}>
                <Navbar.Brand href="/">Instamation</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <div className={"d-none d-sm-block "}>
                    {this.props.userSelected ? <Navbar.Text>
                        Signed in as: <a href="/setup/">{this.props.username}</a>
                    </Navbar.Text> :
                        <Navbar.Text>
                            <a href="/setup/">Account Not Selected</a>
                        </Navbar.Text>
                    }
                    </div>
                </Navbar.Collapse>

            </Navbar>);
    }
}
