import React, { useState } from "react";
import "./index.scss";
import { Button, Form } from "react-bootstrap";

const Dashboard = () => {
  const [tab, setTab] = useState("Expenses");
  console.log(tab);

  const changeTab = (selectedTab) => {
    if (selectedTab != tab) {
      document.getElementById(selectedTab).classList.remove("btn-light");
      document.getElementById(selectedTab).classList.add("btn-selected");
      document.getElementById(tab).classList.remove("btn-selected");
      document.getElementById(tab).classList.add("btn-light");
      document.getElementById(selectedTab + " Form").toggleAttribute("hidden", false);
      document.getElementById(tab + " Form").toggleAttribute("hidden", true);
      setTab(selectedTab);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-title">Dashboard</div>
      <div className="dashboard-cols">
        <div className="section-header-left">
          <h1>Net Worth</h1>
        </div>
        <div className="section-header-right">
          <h1>New Transaction</h1>
          <div className="btn-group btn-lg btn-block" role="group">
            <Button id="Expenses" variant="btn btn-selected" onClick={() => changeTab("Expenses")}>
              Expenses
            </Button>
            <Button id="Income" variant="btn btn-light" onClick={() => changeTab("Income")}>
              Income
            </Button>
          </div>

          <div id="Form"></div>

          <Form id="Expenses Form" hidden={false}>
            <Form.Group>
              <Form.Label className="float-left">From:</Form.Label>
              <div className="input-group mb-3">
                <select className="custom-select" id="select group">
                  <option value="" disabled selected>
                    Choose Accounts...
                  </option>
                  <option value="1">CCA</option>
                  <option value="2">Savings</option>
                  <option value="3">Piggy Bank</option>
                </select>
              </div>
              <div className="input-group mb-3">
                <select className="custom-select" id="select currency">
                  <option value="" disabled selected>
                    Select Currency...
                  </option>
                  <option value="1">SGD</option>
                  <option value="2">USD</option>
                </select>
                <input type="text" className="form-control" placeholder="Input Amount" />
              </div>
            </Form.Group>
            <Form.Group>
              <Form.Label className="float-left">Date:</Form.Label>
              <input className="form-control" type="date" id="example-date-input" />
            </Form.Group>
            <Form.Group>
              <Form.Label className="float-left">Tags:</Form.Label>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" value="" id="CCA" />
                <label className="form-check-label" htmlFor="CCA">
                  CCA
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" value="" id="Food" />
                <label className="form-check-label" htmlFor="Food">
                  Food
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" value="" id="Stationaries" />
                <label className="form-check-label" htmlFor="Stationaries">
                  Stationaries
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" value="" id="Electronics" />
                <label className="form-check-label" htmlFor="Electronics">
                  Electronics
                </label>
              </div>
            </Form.Group>
            <Form.Group>
              <Form.Label className="float-left">Notes:</Form.Label>
              <Form.Control type="text" placeholder="Enter notes" />
            </Form.Group>

            <Button className="btn btn-block btn-selected" type="submit">
              Add Expense
            </Button>
          </Form>

          <Form id="Income Form" hidden={true}>
            <Form.Group>
              <Form.Label className="float-left">To:</Form.Label>
              <div className="input-group mb-3">
                <select className="custom-select" id="select group">
                  <option value="" disabled selected>
                    Choose Accounts...
                  </option>
                  <option value="1">CCA</option>
                  <option value="2">Savings</option>
                  <option value="3">Piggy Bank</option>
                </select>
              </div>
              <div className="input-group mb-3">
                <select className="custom-select" id="select currency">
                  <option value="" disabled selected>
                    Select Currency...
                  </option>
                  <option value="1">SGD</option>
                  <option value="2">USD</option>
                </select>
                <input type="text" className="form-control" placeholder="Input Amount" />
              </div>
            </Form.Group>
            <Form.Group>
              <Form.Label className="float-left">Date:</Form.Label>
              <input className="form-control" type="date" id="example-date-input" />
            </Form.Group>
            <Form.Group>
              <Form.Label className="float-left">Tags:</Form.Label>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" value="" id="CCA" />
                <label className="form-check-label" htmlFor="CCA">
                  CCA
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" value="" id="Food" />
                <label className="form-check-label" htmlFor="Food">
                  Food
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" value="" id="Stationaries" />
                <label className="form-check-label" htmlFor="Stationaries">
                  Stationaries
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" value="" id="Electronics" />
                <label className="form-check-label" htmlFor="Electronics">
                  Electronics
                </label>
              </div>
            </Form.Group>
            <Form.Group>
              <Form.Label className="float-left">Notes:</Form.Label>
              <Form.Control type="text" placeholder="Enter notes" />
            </Form.Group>

            <Button className="btn btn-block btn-selected" type="submit">
              Add Income
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
