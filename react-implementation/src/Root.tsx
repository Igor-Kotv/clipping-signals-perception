import { useTranslation } from "react-i18next";
import { useState } from "react";
import styled from "styled-components";
import i18n from "i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import Controls from "./controls/Controls";
import Description from "./description/Description";
import { Link, StyledText } from "./common/text";
import { Dropdown } from "react-bootstrap";

const headerFooterHeight = "4em";
const siteLink = "https://github.com/Igor-Kotv/clipping-signals-perception";

const Container = styled.div`
    display: grid;
    grid-template-rows: ${headerFooterHeight} auto;
    max-height: 100vh;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    max-height: calc(100vh - ${headerFooterHeight});
    background-color: #f0f0f0;
`;

const DescriptionContainer = styled.div`
    width: 100%;
    height: auto;
`;

const ControlsContainer = styled.div`
    width: 100%;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    background: #85a2b9e0;
    justify-content: center;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.35);
    -webkit-box-shadow: rgba(0, 0, 0, 0.35) 0 0 10px 2px;
    user-select: none;
    height: ${headerFooterHeight};
    align-items: center;
`;

const Footer = styled.div`
    display: flex;
    background-color: #85a2b9e0;
    height: ${headerFooterHeight};
    justify-content: center;
    margin-top: auto;
    align-items: center;
`;

const HeaderText = styled.h1`
    display: inline-block;
    text-align: center;
    width: 100%;
    color: #ffffff;
    font-size: 2.5em;
`;

const FooterText = styled(StyledText)`
    text-align: center;
    color: #ffffff;
    display: inline-block;
    font-size: 1.2em;
`;

const LanguageSelectorContainer = styled.div`
    margin: auto;
    margin-right: 1.5em;
`;

const LanguageSelectorMenu = styled(Dropdown.Menu)`
    min-width: 2.5em;
`;

const LanguageSelectorMenuItemText = styled.span`
    font-size: 0.8em;
`;

const LanguageSelector = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
    const language = ["en", "ua"];

    return (
        <Dropdown>
            <Dropdown.Toggle
                size="sm"
                variant="outline-light"
                id="dropdown-basic"
            >
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
            <ContentContainer>
                <ControlsContainer>
                    <Controls />
                </ControlsContainer>
                <DescriptionContainer>
                    <Description />
                </DescriptionContainer>
                <Footer>
                    <FooterText>{t("root.developer")}</FooterText>
                    <Link href={siteLink} target="_blank">
                        {t("root.siteLinkText")}
                    </Link>
                </Footer>
            </ContentContainer>
        </Container>
    );
};

export default Root;
