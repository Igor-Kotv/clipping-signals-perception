import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { link, musicSamples, speechSamples } from "../data";
import {
  evaluateSample,
  selectCurrentSample,
  selectCurrentSampleType,
  selectExperimentStatus,
  selectSampleDuration,
  startExperiment,
} from "./slice";
import Slider from "./Slider";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  margin: auto;
  margin-bottom: 1rem;
  margin-top: 1rem;
  width: 45rem;
  user-select: none;
`;

const ButtonTitle = styled.span`
  display: inline-block;
  width: 7rem;
  text-align: center;
  user-select: none;
`;

const ExperimentPanel: React.FC = () => {
  const { t } = useTranslation();
  const playerRef = useRef<HTMLAudioElement>(null);
  const currentSampleName = useSelector(selectCurrentSample);

  const sampleDuration = useSelector(selectSampleDuration);
  const currentSampleType = useSelector(selectCurrentSampleType);
  const experimentStarted = useSelector(selectExperimentStatus);
  const [sampleEvaluationStarted, setSampleEvaluationStarted] =
    useState<boolean>(false);

  const [sampleEvaluationEnabled, setSampleEvaluationEnabled] =
    useState<boolean>(false);

  const [sampleCount, setSampleCount] = useState<number>(11);

  const [score, setScore] = useState<number>(5);

  const currentSamples =
    currentSampleType === "music" ? musicSamples : speechSamples;
  const currentSamplePathArray =
    currentSamples.find((sample) => sample.name === currentSampleName)?.paths ||
    [];

  const [shuffledIndexes] = useState<number[]>(
    Array.from(Array(11).keys()).sort(() => Math.random() - 0.5)
  );

  const randomIndex = sampleCount !== 0 ? shuffledIndexes[sampleCount - 1] : 0;

  const dispatch = useDispatch();
  const player = playerRef.current ? playerRef.current : null;

  useEffect(() => {
    if (sampleCount === 0) {
      dispatch(startExperiment(false));
      setSampleCount(11);
    }
  }, [sampleCount, dispatch, experimentStarted, t]);

  const playAudio = () => {
    if (player) {
      if (!experimentStarted) {
        dispatch(startExperiment(true));
      }
      setSampleEvaluationStarted(true);
      player.play();
      setTimeout(() => {
        player.pause();
        setSampleEvaluationEnabled(true);
      }, 1000 * sampleDuration);
    }
  };

  const estimate = () => {
    setSampleCount(sampleCount - 1);
    dispatch(evaluateSample({ index: randomIndex, value: score }));
    setSampleEvaluationStarted(false);
    setSampleEvaluationEnabled(false);
  };

  return (
    <Container>
      <audio
        ref={playerRef}
        src={`${link}${currentSamplePathArray[randomIndex]}`}
      />
      <Button
        variant="outline-primary"
        onClick={playAudio}
        disabled={sampleEvaluationStarted}
      >
        <ButtonTitle>{`${t("controls.start")} (${sampleCount})`}</ButtonTitle>
      </Button>
      <Slider
        onInput={setScore}
        label={t("controls.score")}
        maxValue={5}
        step={0.1}
        minValue={1}
        value={score}
        disabled={!sampleEvaluationEnabled}
      />
      <Button
        variant="outline-primary"
        onClick={estimate}
        disabled={!sampleEvaluationEnabled}
      >
        <ButtonTitle>{t("controls.estimate")}</ButtonTitle>
      </Button>
    </Container>
  );
};

export default ExperimentPanel;
