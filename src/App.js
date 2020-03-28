import React, { useState, useEffect } from "react";
import StarWarsSketch from "./components/StarWarsSketch";
import DataInputForm from "./components/DataInputForm";
import {
  MainContainer,
  StyledHeading,
  HeadingContainer
} from "./components/StyledComponents";
function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [swTitle, setSwTitle] = useState("");
  const [swSummary, setSwSummary] = useState("");
  useEffect(() => {
    if (swTitle.length > 0 && swSummary.length > 0) {
      setIsStarted(true);
    }
  }, [swSummary, swTitle]);
  const onFormSubmitted = values => {
    let temp = "";
    temp = values.titleText.split(" ");
    temp = temp.join("\n");
    temp = temp.toLowerCase();
    setSwTitle(temp);
    temp = values.summaryText.split("\n");
    temp = temp.join("\n\n\n");
    temp = temp.toLowerCase();
    setSwSummary(temp);
  };
  return (
    <MainContainer>
      {!isStarted && (
        <>
          <HeadingContainer>
            <StyledHeading>Star Wars Crawling Intro</StyledHeading>
          </HeadingContainer>
          <DataInputForm onFormSubmitted={onFormSubmitted} />
        </>
      )}
      {isStarted && (
        <StarWarsSketch titleText={swTitle} summaryText={swSummary} />
      )}
    </MainContainer>
  );
}

export default App;
