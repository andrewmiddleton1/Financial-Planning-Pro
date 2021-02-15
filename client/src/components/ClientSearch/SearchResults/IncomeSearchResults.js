import React from "react";
import "./style.css";

function IncomeSearchResults(props) {

  console.log(props);
  console.log(props.results);
  console.log(props.results);

  return (

    <div className="dashboardCard card cardBackground">
      <div className="card-body">
        <h4 className="card-subtitle">Income</h4>
        <p className="card-text">Snapshot</p>
        <a href="/" className="card-link bottomLink">
          More details
                </a>



        <table className="table">
          <thead >
            <tr>
              <th scope="col" >Owner</th>
              <th scope="col" >Income </th>
              <th scope="col" >Amount </th>


            </tr>
          </thead>
          <tbody>
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Employment Type"} </td>
                  <td> {result.employment_type} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Industry"} </td>
                  <td> {result.industry} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Primary Income"} </td>
                  <td> {result.primary_income} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Secondary Income"} </td>
                  <td> {result.secondary_income} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Centrelink Payments"} </td>
                  <td> {result.centrelink_payments} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"DVA Payments"} </td>
                  <td> {result.dva_payments} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Superannuation Payments"} </td>
                  <td> {result.superannuation_payments} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Rental Income"} </td>
                  <td> {result.rental_income} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Other Income"} </td>
                  <td> {result.other_income} </td>
                </tr>
              )
            })
            }


          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td>Total</td>
              <td>TBA</td>


            </tr>
          </tfoot>

        </table>

      </div>
    </div>

  );
}

export default IncomeSearchResults;

