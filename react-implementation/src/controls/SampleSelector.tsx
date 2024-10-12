import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { musicSamples, speechSamples } from "../data";
import DropdownMenu from "./DropdownMenu";
import {
  onSampleDurationSetting,
  onSampleTypeSetting,
  selectExperimentStatus,
} from "./slice";
import Slider from "./Slider";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #efefef;
  border: 1px solid silver;
  border-radius: 0.5em;
  padding: 1em;
  margin: auto;
  margin-bottom: 1em;
  margin-top: 1em;
  width: 45em;
  user-select: none;
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
  margin-bottom: 0.2em;
`;

const Radio = styled.input`
  margin: auto 0 auto 0;
`;

const CathegoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function SampleSelector() {
  const { t } = useTranslation();
  const [sampleDuration, setSampleDuration] = useState<number>(15);
  const [musicSelected, setMusicSelected] = useState<boolean>(true);
  const [speechSelected, setSpeechSelected] = useState<boolean>(false);
  const experimentStarted = useSelector(selectExperimentStatus);
  const dispatch = useDispatch();
  return (
    <Container>
      <CathegoryContainer>
        <RadioContainer>
          <Radio
            id="music-radio"
            type="radio"
            disabled={experimentStarted}
            onChange={() => {
              setMusicSelected(true);
              setSpeechSelected(false);
              dispatch(onSampleTypeSetting("music"));
            }}
            checked={musicSelected}
          />
          <label htmlFor="music-radio">{t("controls.music")}</label>
        </RadioContainer>
        <DropdownMenu
          disabled={experimentStarted || !musicSelected}
          data={musicSamples}
        />
      </CathegoryContainer>
      <CathegoryContainer>
        <RadioContainer>
          <Radio
            type="radio"
            disabled={experimentStarted}
            onChange={() => {
              setMusicSelected(false);
              setSpeechSelected(true);
              dispatch(onSampleTypeSetting("speech"));
            }}
            checked={speechSelected}
            id="speech-radio"
          />
          <label htmlFor="speech-radio">{t("controls.speech")}</label>
        </RadioContainer>
        <DropdownMenu
          disabled={experimentStarted || !speechSelected}
          data={speechSamples}
        />
      </CathegoryContainer>
      <Slider
        onInput={setSampleDuration}
        label={t("controls.sampleDuration")}
        maxValue={15}
        minValue={1}
        value={sampleDuration}
        disabled={experimentStarted}
        onMouseUp={() => dispatch(onSampleDurationSetting(sampleDuration))}
      />
    </Container>
  );
}

export default SampleSelector;
