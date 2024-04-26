import "./styles.css";
import Contracts from "./Contracts.json";

import { Table } from "react-bootstrap";

export default function ContentTable() {
  return (
    <div className="outer-content-wrapper">
      <div className="inner-content-wrapper">
        <form className="optionselector">
          <input type="radio" name="options" value="option1" checked />
          <label for="option1">All</label>
          <input type="radio" name="options" value="option2" />
          <label for="option2">My Contacts</label>
        </form>
        <Table striped bordered hover>
          <thead>
            <tr className="tableRow">
              <td className="Content-columns"> </td>
              <td className="Content-columns">Contract ID</td>
              <td className="Content-columns">Contract Name</td>
              <td className="Content-columns">Contract Status</td>
              <td className="Content-columns">Contract Parties</td>
              <td className="Content-columns">Contract Group</td>
              <td className="Content-columns">Contract Type</td>
            </tr>
          </thead>
          <tbody>
            {Contracts.map((contract) => {
              return (
                <tr className="tableRow">
                  <td className="Content-columns">
                    <img className="drop-down-image" src="icons/dropdown.png" />
                  </td>
                  <td className="Content-columns contractID">
                    {contract.contractID}
                  </td>
                  <td className="Content-columns contractName">
                    {contract.contractName}
                  </td>
                  <td className="Content-columns">{contract.contractStatus}</td>
                  <td className="Content-columns">
                    {contract.contractParties}
                  </td>
                  <td className="Content-columns">{contract.contractGroup}</td>
                  <td className="Content-columns">{contract.contractType}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
