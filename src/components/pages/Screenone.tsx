import React from "react";
import "../css/screen.css";
function Screenone() {
  return (
    <>
      <div className="jumbotron top p-2">
        <div className="row">
          <div className="col-md-3">
            <h4 className="ml-4">New Transaction</h4>
          </div>
          <div className="col-md-1">
            <h4>History</h4>
          </div>

          <div className="col-md-7">
            <h4></h4>
          </div>
          <div className="col-md-1">
            <h4>
              User{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              </span>
            </h4>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-sm-3 col-lg-3">
            <div className="card  m-4">
              <div className="card">
                <h5 className="bg col-12 p-2 text-center ">Transaction</h5>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <p>Amount</p>
                    </div>
                    <div className="col-md-6">
                      <p>Date/Time</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" className="btn btn-primary rounded-pill m-5">
              {" "}
              + Add Transaction
            </button>
          </div>
          <div className="col-md-8 col-sm-8 col-lg-8 mt-4 bg-light">
            <div className="jumbotron p-2 mt-3">
              <div className="row">
                <div className="col-md-4">
                  <p>Transaction Deatails</p>
                </div>
                <div className="col-md-5"></div>

                <hr />
              </div>
            </div>
            <div className="col-md-12 col-sm-12 col-lg-12 mt-4 bg-light">
              <div className="col-md-4"></div>
              <hr />
              <table className="table p-5 mt-5">
                <thead className="thead">
                  <tr>
                    <th scope="col">Detail</th>
                    <th scope="col">Date/Time</th>
                    <th scope="col">Total</th>
                    <th scope="col">Status</th>
                    <th scope="col">Currency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td></td>
                    <td> </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td></td>
                    <td> </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td></td>
                    <td> </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td></td>
                    <td> </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td></td>
                    <td> </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td></td>
                    <td> </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td></td>
                    <td> </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Screenone;
