import React from "react";
import "./style.css";

function AssetsSearchResults(props) {

  console.log(props);
  console.log(props.results);
  console.log(props.results);

  return (

    <div className="dashboardCard card cardBackground">
      <div className="card-body">
        <h4 className="card-subtitle">Assets</h4>
        <p className="card-text">Snapshot</p>
        <a href="/" className="card-link bottomLink">
          More details
                </a>



        <table className="table">
          <thead >
            <tr>
              <th scope="col" >Owner</th>
              <th scope="col" >Asset </th>
              <th scope="col" >Value </th>


            </tr>
          </thead>
          <tbody>
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Principal Residence"} </td>
                  <td> {result.principalResidence} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Investment Property"} </td>
                  <td> {result.investmentProperty} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Home Contents"} </td>
                  <td> {result.homeContents} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Primary Car"} </td>
                  <td> {result.primaryCar} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Second Car"} </td>
                  <td> {result.secondaryCar} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Cash in Bank"} </td>
                  <td> {result.cashInBank} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Managed Fund"} </td>
                  <td> {result.managedFund} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Share Portfolio"} </td>
                  <td> {result.sharePortfolio} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Caravan/Camper"} </td>
                  <td> {result.caravanCamper} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Boat/Watercraft"} </td>
                  <td> {result.boatWatercraft} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Other Machinery/Cars"} </td>
                  <td> {result.otherMachinery} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {result.User.first_name} </td>
                  <td> {"Other Asset"} </td>
                  <td> {result.otherAsset} </td>
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

export default AssetsSearchResults;

