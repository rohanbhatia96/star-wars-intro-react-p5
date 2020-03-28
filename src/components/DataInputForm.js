import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  FormContainer,
  StyledInputText,
  StyledInputTextarea,
  StyledLabel,
  FormInputContainer,
  FormSubmitContainer,
  StyledErrorContainer,
  StyledSubmitButton
} from "./StyledComponents";

const DataInputForm = props => {
  const starWarsSchema = Yup.object().shape({
    titleText: Yup.string()
      .label("Title")
      .required("Empty title not allowed")
      .max(21, "Title can be max 20 characters"),
    summaryText: Yup.string()
      .label("Summary")
      .required()
      .min(20, "Summary must be at least 20 characters")
      .max(501, "Summary can have 500 characters at maximum")
  });
  return (
    <Formik
      initialValues={{ titleText: "", summaryText: "" }}
      onSubmit={props.onFormSubmitted}
      validationSchema={starWarsSchema}
    >
      {props => {
        const {
          values,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <FormContainer>
              <FormInputContainer>
                <StyledLabel style={{ display: "block" }}>Title</StyledLabel>
                <StyledInputText
                  id="titleText"
                  placeholder="Enter your desired title"
                  type="text"
                  onBlur={handleBlur}
                  value={values.titleText}
                  onChange={handleChange}
                />
              <StyledErrorContainer>{errors.titleText}</StyledErrorContainer>
              </FormInputContainer>
              <FormInputContainer>
                <StyledLabel style={{ display: "block" }}>Summary</StyledLabel>
                <StyledInputTextarea
                  id="summaryText"
                  placeholder="Enter your summary"
                  type="text"
                  onBlur={handleBlur}
                  value={values.summaryText}
                  onChange={handleChange}
                  rows={10}
                />
              <StyledErrorContainer>{errors.summaryText}</StyledErrorContainer>
              </FormInputContainer>
              <FormSubmitContainer>
                  <StyledSubmitButton type="submit" disabled={isSubmitting}>
                    Start Crawling Intro
                  </StyledSubmitButton>
              </FormSubmitContainer>
            </FormContainer>
          </form>
        );
      }}
    </Formik>
  );
};

export default DataInputForm;
