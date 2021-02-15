import React from "react";
import "./style.css";

function LiabilitiesSearchResults(props) {

  console.log(props);
  console.log(props.results);
  console.log(props.results);

  return (

    <div className="dashboardCard card cardBackground">
      <div className="card-body">
        <h4 className="card-subtitle">Liabilities</h4>
        <p className="card-text">Snapshot</p>
        <a href="/" className="card-link bottomLink">
          More details
                </a>



        <table className="table">
          <thead >
            <tr>
              <th scope="col" >Owner</th>
              <th scope="col" >Liability </th>
              <th scope="col" >Value </th>


            </tr>
          </thead>
          <tbody>
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Home Mortgage"} </td>
                  <td> {result.homeMortgage} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Investment Property Loans"} </td>
                  <td> {result.investmentPropertyLoans} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Personal Loans"} </td>
                  <td> {result.personalLoans} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Credit Cards"} </td>
                  <td> {result.creditCards} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Pay Day Lending"} </td>
                  <td> {result.payDayLending} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Car Loan"} </td>
                  <td> {result.carLoan} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Other Loans"} </td>
                  <td> {result.otherLoans} </td>
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

export default LiabilitiesSearchResults;

