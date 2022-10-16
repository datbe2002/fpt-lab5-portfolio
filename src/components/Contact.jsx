import {
  Button,
  Container,
  Textarea,
  TextInput,
} from "react-materialize";
import React from "react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      id="contact"
      align="center"
      style={{ marginTop: "5rem", height: "90vh" }}
    >
      <h3>CONTACT ME</h3>
      <div>
        <a href="https://github.com/datbe2002">
          <img
            src="https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white"
            alt="github"
            style={{ marginBottom: "5px" }}
          />
        </a>
        <a href="https://www.facebook.com/datbe.online">
          <img
            src="https://img.shields.io/badge/facebook-%232E87FB.svg?&style=for-the-badge&logo=facebook&logoColor=white"
            alt="facebook"
            style={{ marginBottom: "5px" }}
          />
        </a>
        <a href="https://instagram.com/ttandatt02_20">
          <img
            src="https://img.shields.io/badge/instagram-%23000000.svg?&style=for-the-badge&logo=instagram&logoColor=white"
            alt="instagram"
            style={{ marginBottom: "5px" }}
          />
        </a>
      </div>
      <Container style={{ backgroundColor: "#E7E9EB", padding: "2rem 2rem", borderRadius: "15px" }}>
        <h5>If you have any problem dont be shine to contact me</h5>
        <h5>Fill your information here</h5>
        <form onSubmit={handleSubmit}>
          <TextInput id="TextInput-38" label="Your Name" />
          <TextInput id="TextInput-39" label="Your Phone" />

          <TextInput email id="TextInput-41" label="Email" validate />

          <Textarea id="Textarea-28" label="Your content"></Textarea>
          <Button>Submit</Button>
        </form>
      </Container>
    </div>
  );
}
