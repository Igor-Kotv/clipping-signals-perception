import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";
import { SampleScore, SampleTypes } from "../data";

interface State {
  experimentStarted: boolean;
  selectedSample: string;
  sampleType: SampleTypes;
  sampleDuration: number;
  scores: number[];
  sampleScores: SampleScore[];
}

const initialState = {
  experimentStarted: false,
  selectedSample: "",
  sampleDuration: 15,
  sampleType: "music",
  scores: Array(11).fill(0),
  sampleScores: [],
} as State;

const slice = createSlice({
  name: "controls",
  initialState,
  reducers: {
    selectSample(state, action: PayloadAction<string>) {
      state.selectedSample = action.payload;
      state.scores = Array(11).fill(0);
    },
    onSampleTypeSetting(state, action: PayloadAction<SampleTypes>) {
      state.sampleType = action.payload;
      state.sampleScores = [];
      state.scores = Array(11).fill(0);
    },
    onSampleDurationSetting(state, action: PayloadAction<number>) {
      state.sampleDuration = action.payload;
    },
    evaluateSample(
      state,
      action: PayloadAction<{ index: number; value: number }>
    ) {
      state.scores[action.payload.index] = action.payload.value;
      if (!state.scores.includes(0)) {
        state.sampleScores.push({
          name: state.selectedSample,
          scores: state.scores,
        });
      }
    },
    startExperiment(state, action: PayloadAction<boolean>) {
      state.experimentStarted = action.payload;
    },
  },
  extraReducers: {},
});

export const selectCurrentSample = (state: RootState) =>
  state.slice.selectedSample;

export const selectCurrentSampleType = (state: RootState) =>
  state.slice.sampleType;

export const selectSampleDuration = (state: RootState) =>
  state.slice.sampleDuration;

export const selectExperimentStatus = (state: RootState) =>
  state.slice.experimentStarted;

export const selectScores = (state: RootState) => state.slice.scores;

export const selectSampleScores = (state: RootState) =>
  state.slice.sampleScores;

export const {
  startExperiment,
  selectSample,
  evaluateSample,
  onSampleTypeSetting,
  onSampleDurationSetting,
} = slice.actions;
export default slice.reducer;
