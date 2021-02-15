import React from "react";
import "./style.css";

function ExpensesSearchResults(props) {

  console.log(props);
  console.log(props.results);
  console.log(props.results);

  return (

    <div className="dashboardCard card cardBackground">
      <div className="card-body">
        <h4 className="card-subtitle">Expenses</h4>
        <p className="card-text">Snapshot</p>
        <a href="/" className="card-link bottomLink">
          More details
                </a>



        <table className="table">
          <thead >
            <tr>
              <th scope="col" >Owner</th>
              <th scope="col" >Expense </th>
              <th scope="col" >Value </th>


            </tr>
          </thead>
          <tbody>
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Mortgage Repayments"} </td>
                  <td> {result.mortgage_repayments} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Rent"} </td>
                  <td> {result.rent} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Council Rates"} </td>
                  <td> {result.council_rates} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Land Tax"} </td>
                  <td> {result.land_tax} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Electricity/Utilities"} </td>
                  <td> {result.electricity_utilities} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Investment Property Cost"} </td>
                  <td> {result.investment_property_costs} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Telephone/Internet"} </td>
                  <td> {result.telephone_internet} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Groceries"} </td>
                  <td> {result.groceries} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Recreation/Entertainment"} </td>
                  <td> {result.recreation_entertainment} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Clothing/Personal Care"} </td>
                  <td> {result.clothing_personal_care} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Medical/Health"} </td>
                  <td> {result.medical_health} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Transport"} </td>
                  <td> {result.transport} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Education"} </td>
                  <td> {result.education} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Childcare"} </td>
                  <td> {result.childcare} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Insurance"} </td>
                  <td> {result.insurance} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Child Maintenance"} </td>
                  <td> {result.child_maintenance} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Other Expenses"} </td>
                  <td> {result.other_Expenses} </td>
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

export default ExpensesSearchResults;

