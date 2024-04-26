import "./styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function QuickLink(props) {
  return (
    <Col className="upperDiv quickLink" key={props.id} md={3} sm={6}>
      <div className="provide-padding">
        <span className="title">{props.title}</span>
        <h4 className="body">{props.body}</h4>
      </div>
      <img className="quickLink-Icons" src="icons/doc.JPG" alt="image not visible" />
    </Col>
  );
}
