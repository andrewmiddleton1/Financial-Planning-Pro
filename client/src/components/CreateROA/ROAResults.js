import React from "react";
// import "./style.css";
import tcaROA from "../assets/images/tcaROA.jpg";

function ROAResults(props) {

    console.log(props);
    console.log(props.particulars);
    console.log(props.assets);
    console.log(props.liabilities);
    console.log(props.income);
    console.log(props.expenses);


    return (

        <div className="dashboardCard card cardBackground">
            <div className="card-body">
                <h4 className="card-subtitle">Record of Advice</h4>
                <p className="card-text">Details</p>
                <a href="/" className="card-link bottomLink">
                    More details
                </a>



                <table className="table">
                    <thead >
                        <tr>
                            <th scope="col" >First Name</th>
                            <th scope="col" >Last Name </th>



                        </tr>
                    </thead>
                    <tbody>
                        {props.assets.map(result => {
                            return (
                                <tr key={result} >
                                    <td> {result.User.first_name} </td>
                                    <td> {result.User.last_name} </td>

                                </tr>
                            )
                        })
                        }

                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>



                        </tr>
                    </tfoot>

                </table>

            </div>
        </div>



    );
}

export default ROAResults;

