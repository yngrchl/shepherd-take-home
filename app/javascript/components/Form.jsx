import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Form = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = `/api/app_types/${id}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          navigate('/error')
        }

        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => {console.log(error)});
  }, []);

  return <></>;
};

export default Form;
