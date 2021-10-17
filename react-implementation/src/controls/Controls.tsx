import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { HeaderText } from "../common/text";
import {
  averageListenerMusicData,
  averageListenerSpeechData,
  axis,
} from "../data";
import {
  selectCurrentSampleType,
  selectExperimentStatus,
  selectSampleScores,
} from "./slice";
import ExperimentPanel from "./ExperimentPanel";
import SampleSelector from "./SampleSelector";
import { Line } from "react-chartjs-2";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const GraphContainer = styled.div`
  width: 45rem;
`;

const SampleSelectorContainer = styled.div`
  width: 100%;
`;

const Controls = () => {
  const { t } = useTranslation();

  const experimentStarted = useSelector(selectExperimentStatus);

  const sampleScores = useSelector(selectSampleScores);

  const currentSampleType = useSelector(selectCurrentSampleType);

  const avarageScores =
    currentSampleType === "music"
      ? averageListenerMusicData
      : averageListenerSpeechData;

  const experimentFinished = !experimentStarted && sampleScores.length > 0;

  const colors = ["#0033cc", "#20c997", "#ffc107", "#09ff29", "#f209ff"];

  const scoresData = sampleScores.map((sampleScore, index) => {
    return {
      label: sampleScore.name,
      data: sampleScore.scores,
      fill: false,
      borderColor: colors[index],
      backgroundColor: colors[index],
    };
  });

  const data = {
    labels: axis.xAxis,
    datasets: [
      {
        label: avarageScores.name,
        data: avarageScores.scores,
        fill: false,
        borderColor: "#ff0000",
        backgroundColor: "#ff0000",
      },
      ...scoresData,
    ],
  };

  const options = {
    scales: {
      x: {
        title: { text: "k (dB)", display: true },
      },
      y: {
        title: { text: "MOS", display: true },
        suggestedMin: 1,
        suggestedMax: 5,
      },
    },
  };

  return (
    <Container>
      <HeaderText enabled>{t("controls.header")}</HeaderText>
      <SampleSelectorContainer>
        <SampleSelector />
      </SampleSelectorContainer>
      <ExperimentPanel />
      <HeaderText enabled={experimentFinished}>
        {t("controls.checkResult")}
      </HeaderText>
      <GraphContainer>
        <Line
          data={
            experimentFinished ? data : { labels: axis.xAxis, datasets: [] }
          }
          options={options}
        />
      </GraphContainer>
    </Container>
  );
};

export default Controls;
