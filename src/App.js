import "./styles.css";
import data from "./datafile.json";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import SideBar from "./SideBar.jsx";
import QuickLinks from "./QuickLinks.jsx";
import ContentTable from "./ContentTable.jsx";

export default function App() {
  return (
    <div className="App">
      <SideBar />
      {/* Quick Links Containers */}
      <Container>
        <Row>
          {data.map((item) => {
            return (
              <QuickLinks key={item.id} title={item.title} body={item.body} />
            );
          })}
        </Row>
      </Container>
      <hr />
      <p className="client-name">
        Client: <span>GSX</span>
      </p>

      {/* Content Container */}
      <ContentTable />
    </div>
  );
}
