import React, { useEffect, useState } from "react";
import { Checkbox, Number, Select, Text, Url } from "./formInputs";
import { Box } from "@mui/material";

const Form = ({ fields, depth = 0 }) => {
  const [fieldData, setFieldData] = useState(fields);

  useEffect(() => {
    if (fields != fieldData) {
      setFieldData(fields);
    }
  }, [fields]);

  const fieldsContent = fieldData.map((field) => {
    let input;
    switch (field.component) {
      case "checkbox":
        input = <Checkbox {...field} />;
        break;
      case "number":
        input = <Number {...field} />;
        break;
      case "select":
        input = <Select {...field} />;
        break;
      case "text":
        input = <Text {...field} />;
        break;
      case "url":
        input = <Url {...field} />;
        break;
      default:
        input = (
          <>
            <p>
              <b>{field.title}</b>
            </p>
            <p>{field.description}</p>
            <Box pl={depth}>
              <Form fields={field.fields} depth={depth} />
            </Box>
          </>
        );
    }

    return (
      <Box mt={2} pl={1 + depth} key={field.name}>
        {input}
      </Box>
    );
  });

  return <>{fieldsContent}</>;
};

export default Form;
