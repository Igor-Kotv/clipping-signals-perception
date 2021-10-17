import { useTranslation } from "react-i18next";
import { useState } from "react";
import styled from "styled-components";
import i18n from "i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import Controls from "./controls/Controls";
import Description from "./description/Description";
import { StyledText } from "./common/text";
import { Dropdown } from "react-bootstrap";

const headerFooterHeight = "4rem";
const siteLink = "https://ames.kpi.ua/uk/glavnaya/";

const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "description controls"
    "footer footer";
  height: 100vh;
`;

const DescriptionContainer = styled.div`
  grid-area: description;
  height: auto;
  padding-left: 10rem;
`;

const ControlsContainer = styled.div`
  grid-area: controls;
  padding-right: 10rem;
`;

const Header = styled.div`
  grid-area: header;
  display: flex;
  flex-direction: row;
  background: #85a2b9e0;
  justify-content: center;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: rgba(0, 0, 0, 0.35) 0 0 10px 2px;
  user-select: none;
  height: ${headerFooterHeight};
`;

const Footer = styled.div`
  grid-area: footer;
  background-color: #85a2b9e0;
  height: ${headerFooterHeight};
  text-align: center;
  margin-top: auto;
`;

const HeaderText = styled.h1`
  display: inline-block;
  text-align: center;
  margin: auto;
  width: 100%;
  color: #ffffff;
  font-size: 2.5rem;
`;

const FooterText = styled(StyledText)`
  text-align: center;
  margin-bottom: 0;
  color: #ffffff;
  display: inline-block;
`;

const FooterLink = styled.a`
  text-decoration: none;
  display: inline-block;
  color: #ffffff;
  margin-left: 0;
  padding-right: 3px;
  text-indent: 5px;
  font-size: 1.2rem;
  :hover {
    text-decoration: underline;
    color: #ffffff;
  }
`;

const LanguageSelectorContainer = styled.div`
  margin: auto;
  margin-right: 1.5rem;
`;

const LanguageSelectorMenu = styled(Dropdown.Menu)`
  min-width: 2.5rem;
`;

const LanguageSelectorMenuItemText = styled.span`
  font-size: 0.8rem;
`;

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
  const language = ["en", "ua"];

  return (
    <Dropdown>
      <Dropdown.Toggle size="sm" variant="outline-light" id="dropdown-basic">
        {selectedLanguage === "ua" ? "УКР" : "ENG"}
      </Dropdown.Toggle>
      <LanguageSelectorMenu>
        {language.map((lang) => (
          <Dropdown.Item
            key={lang}
            onClick={() => {
              setSelectedLanguage(lang);
              i18n.changeLanguage(lang);
            }}
          >
            <LanguageSelectorMenuItemText>
              {lang === "ua" ? "УКР" : "ENG"}
            </LanguageSelectorMenuItemText>
          </Dropdown.Item>
        ))}
      </LanguageSelectorMenu>
    </Dropdown>
  );
};

const Root = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Header>
        <HeaderText>{t("root.header")}</HeaderText>
        <LanguageSelectorContainer>
          <LanguageSelector />
        </LanguageSelectorContainer>
      </Header>
      <DescriptionContainer>
        <Description />
      </DescriptionContainer>
      <ControlsContainer>
        <Controls />
      </ControlsContainer>
      <Footer>
        <FooterText>{t("root.developer")}</FooterText>
        <FooterLink href={siteLink}>{t("root.siteLinkText")}</FooterLink>
      </Footer>
    </Container>
  );
};

export default Root;
