import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { HeaderText, StyledText } from "../common/text";

const TextContainer = styled.div`
  text-align: justify;
  background-color: #ffffff;
  position: relative;
  padding: 2px 10px 2px 10px;
  border: 1px solid silver;
  margin-top: 19px;
  height: 40rem;
  overflow-y: auto;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 50rem;
`;

const Container = styled.div`
  width: 100%;
`;

const Description = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <HeaderText enabled>{t("description.header")}</HeaderText>
      <TextContainer>
        <StyledText>{t("description.firstParagraph")}</StyledText>
        <StyledText>{t("description.secondParagraph")}</StyledText>
        <StyledText>{t("description.thirdParagraph")}</StyledText>
        <StyledText>{t("description.forthParagraph")}</StyledText>
        <StyledText>{t("description.fifthParagraph")}</StyledText>
      </TextContainer>
    </Container>
  );
};

export default Description;
