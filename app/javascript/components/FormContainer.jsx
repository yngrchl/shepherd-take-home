import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "./Form";
import { Alert, Button } from "@mui/material";

const FormContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [fields, setFields] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const apiUrl = `/api/app_types/${id}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          navigate("/error");
        }

        return response.json();
      })
      .then((data) => {
        setTitle(data.name);
        setFields(data.fields);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const validateAuth = () => {
    const cookie = document.cookie;

    return cookie === `"auth"="shepherd"`
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateAuth()) {
      setError("");
      event.target.submit();
    } else {
      setError("Sorry, you are not authorized to create an application.");
    }
  };

  return (
    <>
      {error && <Alert severity="error">{error}</Alert>}
      <h1>{title}</h1>
      <form onSubmit={handleSubmit} method="post" action={"/api/apps"}>
        <input type="hidden" id={"type_id"} name={"type_id"} value={id} />
        <Form fields={fields} />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default FormContainer;
