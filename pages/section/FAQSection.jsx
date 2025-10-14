import { useState } from "react";
import { Container, Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// FAQ Data


export default function FAQSection({faqData = []}) {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>

      <Accordion defaultActiveKey={null}>
        {faqData.map((faq, index) => (
          <Accordion.Item key={index} eventKey={index.toString()} className="mb-3 shadow-sm">
            <Accordion.Header>{faq.question}</Accordion.Header>
            <Accordion.Body>{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}
