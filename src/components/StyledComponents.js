import styled from "styled-components";

export const StyledInputText = styled.input`
  border: 1px solid #ccc;
  background-color: #f4f4f4;
  padding: 15px 0px 15px 5px;
  border-radius: 20px;
  font-size: 18px;
  width: 100%;
  margin-top: 10px;
`;

export const StyledInputTextarea = styled.textarea`
  border: 1px solid #ccc;
  background-color: #f4f4f4;
  padding: 15px 0px 15px 5px;
  border-radius: 20px;
  font-size: 18px;
  width: 100%;
  margin-top: 10px;
`;

export const MainContainer = styled.div`
  width: 100%;
`;

export const FormContainer = styled.div`
  width: 45%;
  margin: 50px auto;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const FormInputContainer = styled.div`
  width: 100%;
  margin: 20px auto;
`;

export const FormSubmitContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export const StyledLabel = styled.label`
  color: white;
  font-size: 21px;
  font-weight: 700;
`;

export const StyledErrorContainer = styled.div`
  font-size: 16px;
  color: red;
  font-weight: 400;
  margin: 10px;
`;

export const StyledSubmitButton = styled.button`
  width: 40%;
  margin: auto;
  font-size: 18px;
  color: white;
  background-color: #191919;
  border-style: solid;
  border-color: white;
  border-width: 5px;
  padding: 20px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HeadingContainer = styled.div`
  text-align: center;
  margin:30px;
`;
export const StyledHeading = styled.h1`
  color: #ffe81f;
  font-size: 48px;
`;