import React, { Component } from "react";
import Sidebar from "../../Sidebar/Sidebar"
import DasboardNewsCard from "../../DasboardNewsCard/DasboardNewsCard"
import "./style.css"
import InputClientAssets from "../../InputClientAssets/InputClientAssets"

class ClientAssetsPage extends Component {
    render() {
        return (
            <div className="container-fluid h-100 p-0 m-0">
                <Sidebar />
                <div className="content">
                    <InputClientAssets history={this.props.history} />
                    <DasboardNewsCard />
                </div>
            </div>
        );
    }
}

export default ClientAssetsPage;