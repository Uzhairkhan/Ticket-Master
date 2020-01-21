import React from "react";

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <div>
          <form>
            <div className="form-group">
              <label htmlFor="code">Code</label>
              <input
                id="code"
                type="text"
                name="code"
                className="form-control"
                placeholder="ex:- Stalin"
              />
            </div>
            <p></p>
            <div className="form-group">
              <label htmlFor="customer">Customer</label>
              <select className="form-control" id="customer">
                <option>Select</option>
              </select>
            </div>

            <p></p>
            <div className="form=group">
              <label htmlFor="department">Department</label>
              <select className="form-control" id="department">
                <option>Select</option>
              </select>
            </div>
            <p></p>
            <div className="form=group">
              <label htmlFor="employee">Employees</label>
              <select className="form-control" id="employee">
                <option>Select</option>
              </select>
            </div>
            <p></p>
            <div className="form=group">
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                id="message"
                name="message"
                className="form-control"
              ></textarea>
            </div>
            <p></p>
            <div className="form=group">
              <label htmlFor="message">Priority</label>
              <p></p>
              <label>
                <input
                  type="radio"
                  name="priority"
                  value="high"
                  onChange={this.handleChange}
                />
                High
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="priority"
                  value="medium"
                  onChange={this.handleChange}
                />
                Medium
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="priority"
                  value="low"
                  onChange={this.handleChange}
                />
                Low
              </label>
            </div>
            <p></p>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
