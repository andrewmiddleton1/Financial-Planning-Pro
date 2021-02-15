import React, { Component } from "react";
import "./style.css"

// import DashboardNewsCard from "../../DashboardNewsCard/DashboardNewsCard";
import Sidebar from "../../Sidebar/Sidebar";


import CreateROA from "../../CreateROA/CreateROA";

import { DocXButton } from "../../DocXTemplater/DocXTemplater";



class CreateROAPage extends Component {
    render() {
        return (
            <div className="flex-container">
                <Sidebar />
                <div className="flex-container" id="inside_container">
                    <div className="content">

                        <h1 className="text-center">Create a Record of Advice (and other documents!)
                    <br></br>
                            {<i className="fas fa-folder-minus" />}</h1>
                        <CreateROA />
                        <br></br>
                        <DocXButton />
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateROAPage;