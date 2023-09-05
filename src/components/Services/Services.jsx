import React from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import "./services.css";
// import { TbTruckDelivery } from "react-icons/tb";

import serviceData from "../../assets/data/serviceData";

const Services = () => {
  return (
    <section className="services">
      <Container>
        <Row>
          {serviceData.map((item, index) => (
            <Col lg="3" md="6" key={index}>
              <motion.div whileHover={{scale:1.1}}
              className="service-item" style={{
                background: `${item.bg}`
              }}>
                <span>
                  {item.icon} 
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
