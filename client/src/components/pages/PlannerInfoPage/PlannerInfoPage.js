import React, { Component } from "react";
import "./style.css"
import Button from "../../Button/Button";
// import DashboardNewsCard from "../../DashboardNewsCard/DashboardNewsCard";
import Sidebar from "../../Sidebar/Sidebar";
import AssetsSearch from "../../ClientSearch/SearchFunctions/AssetsSearch";
import ExpensesSearch from "../../ClientSearch/SearchFunctions/ExpensesSearch";
import LiabilitiesSearch from "../../ClientSearch/SearchFunctions/LiabilitiesSearch";
import IncomeSearch from "../../ClientSearch/SearchFunctions/IncomeSearch";



class PlannerInfoPage extends Component {
    render() {
        return (

            <div className="flex-container">
                <Sidebar />
                <div className="flex-container">
                    <div className="content">
                        <Button text={"Show Assets and Liabilities"} />
                        <Button text={"Create Record of Advice"}
                            href={"/createroa"} />
                        <h1 className="text-center">Welcome to the Planner Tools!</h1>


                        <AssetsSearch />
                        <br></br>
                        <ExpensesSearch />
                        <br></br>
                        <LiabilitiesSearch />
                        <br></br>
                        <IncomeSearch />

                        {/* <DashboardNewsCard /> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default PlannerInfoPage;