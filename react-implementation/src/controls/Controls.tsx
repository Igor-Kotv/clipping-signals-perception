import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { HeaderText } from "../common/text";
import {
    averageListenerMusicData,
    averageListenerSpeechData,
    axis,
    objectiveAxis,
} from "../data";
import {
    selectCurrentSampleType,
    selectExperimentStatus,
    selectSampleObjectiveScores,
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
    width: 25em;
`;

const GraphsContainer = styled.div`
    display: flex;
    gap: 1em;
    justify-content: center;
`;

const SampleSelectorContainer = styled.div`
    width: 100%;
`;

function Controls() {
    const { t } = useTranslation();

    const experimentStarted = useSelector(selectExperimentStatus);

    const sampleScores = useSelector(selectSampleScores);

    const sampleObjectiveScores = useSelector(selectSampleObjectiveScores);

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

    const objectiveScoresData = sampleObjectiveScores.map(
        (sampleScore, index) => {
            return {
                label: sampleScore.name,
                data: sampleScore.scores,
                fill: false,
                borderColor: colors[index],
                backgroundColor: colors[index],
            };
        },
    );

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

    const objectiveData = {
        labels: objectiveAxis.xAxis,
        datasets: objectiveScoresData,
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

    const optionsObjective = {
        scales: {
            x: {
                title: { text: "k (dB)", display: true },
            },
            y: {
                title: { text: "Inverse Kurtosis", display: true },
                suggestedMin: 0,
                suggestedMax: 1,
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
            <GraphsContainer>
                <GraphContainer>
                    <Line
                        data={
                            experimentFinished
                                ? data
                                : { labels: axis.xAxis, datasets: [] }
                        }
                        options={options}
                    />
                </GraphContainer>
                <GraphContainer>
                    <Line
                        data={
                            experimentFinished
                                ? objectiveData
                                : { labels: objectiveAxis.xAxis, datasets: [] }
                        }
                        options={optionsObjective}
                    />
                </GraphContainer>
            </GraphsContainer>
        </Container>
    );
}

export default Controls;
