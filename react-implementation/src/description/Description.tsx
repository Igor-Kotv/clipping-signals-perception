import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { HeaderText, Link, StyledText } from "../common/text";

const TextContainer = styled.div`
    text-align: justify;
    background-color: #ffffff;
    position: relative;
    padding: 2px 10px 2px 10px;
    border: 1px solid silver;
    border-radius: 0.5em;
    margin-top: 19px;
    overflow-y: auto;
    margin: auto;
    margin-top: 1em;
    margin-bottom: 1em;
    width: 50em;
`;

const Container = styled.div`
    width: 100%;
`;

const StyledLink = styled(Link)`
    color: #000000;
    :hover {
        color: #000000;
        text-decoration: underline;
        opacity: 0.8;
    }
    font-size: 1rem;
`;

const siteLink = "https://ames.kpi.ua";

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
                <StyledLink href={siteLink} target="_blank">
                    {t("description.kpiSiteLinkText")}
                </StyledLink>
            </TextContainer>
        </Container>
    );
};

export default Description;
