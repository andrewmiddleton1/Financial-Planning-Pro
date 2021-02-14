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

        <div className="jumbotron mt-5 landingJumbo">
            <div className='col-sm-8 mx-auto jumboText'>
                <h1 className='d-flex justify-content-center companyName'>
                    {/* <div>
                        <img src={tcaROA} alt="tcaROA" />
                    </div> */}

                </h1>
                <h2 className='text-center companySlogan'>Record of Advice (ROA) for:</h2>

                {props.assets.map(result => {
                    return (
                        <tr key={result} >
                            <td> {result.User.first_name} </td>
                            <td> {"First Name"} </td>
                            <td> {result.User.last_name} </td>
                            <td> {"Last Name"} </td>
                        </tr>
                    )
                })
                }

                {/* <p>{props.assets.result.User.first_name} {props.assets.result.User.first_name} </p> */}
            </div>
        </div>




    );
}

export default ROAResults;

