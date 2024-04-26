import "./styles.css";
import data from "./sidebar.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function SideBar() {
  return (
    <div className="sidebarComponent">
      <div className="wrapper top-icon">
        <img
          className="icon-tag"
          src="https://st3.depositphotos.com/3538469/15490/v/450/depositphotos_154904344-stock-illustration-pictograph-of-atom.jpg"
        />
        <a href="#" className="sidebar-links">
          React Dashboard
        </a>
      </div>

      {data.map((item) => {
        return (
          <div className="sideBar-item wrapper" key={item.id}>
            <img className="icon-tag" src={item.icon} />
            <a href="" className="sidebar-links">
              {item.content}
            </a>
          </div>
        );
      })}

      <div className="wrapper last-icon">
        <img className="icon-tag" src="icons/person.jpg" />
        <a href="#" className="sidebar-links">
          John Smith
        </a>
      </div>
    </div>
  );
}
