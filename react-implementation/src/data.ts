const X_AXIS = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

export const axis = {
  xAxis: X_AXIS,
  yAxis: [5, 4, 3, 2, 1],
};

export const objectiveAxis = {
  xAxis: X_AXIS,
  yAxis: [0, 0.125, 0.25, 0.5, 1],
};

export const link = "https://igor-kotv.github.io/clipping-signals-perception/";

export type Sample = { name: string; paths: string[] };
export type SampleTypes = "music" | "speech";
export type SampleScore = { name: string; scores: number[] };

export const averageListenerSpeechData: SampleScore = {
  name: "Avarage speech",
  scores: [4.7, 4.7, 4.6, 4.23, 3.98, 3.6, 3.1, 2.7, 2.3, 2, 1.8],
};

export const averageListenerMusicData: SampleScore = {
  name: "Avarage music",
  scores: [4.7, 4.6, 4.4, 4.2, 3.97, 3.6, 3.2, 2.8, 2.4, 2.1, 1.8],
};

export const musicSamples: Sample[] = [
  {
    name: "Pop 1",
    paths: [
      "audio/pop1_0.wav",
      "audio/pop1_2.wav",
      "audio/pop1_4.wav",
      "audio/pop1_6.wav",
      "audio/pop1_8.wav",
      "audio/pop1_10.wav",
      "audio/pop1_12.wav",
      "audio/pop1_14.wav",
      "audio/pop1_16.wav",
      "audio/pop1_18.wav",
      "audio/pop1_20.wav",
    ],
  },
  {
    name: "Pop 2",
    paths: [
      "audio/pop2_0.wav",
      "audio/pop2_2.wav",
      "audio/pop2_4.wav",
      "audio/pop2_6.wav",
      "audio/pop2_8.wav",
      "audio/pop2_10.wav",
      "audio/pop2_12.wav",
      "audio/pop2_14.wav",
      "audio/pop2_16.wav",
      "audio/pop2_18.wav",
      "audio/pop2_20.wav",
    ],
  },
  {
    name: "Pop 3",
    paths: [
      "audio/pop3_0.wav",
      "audio/pop3_2.wav",
      "audio/pop3_4.wav",
      "audio/pop3_6.wav",
      "audio/pop3_8.wav",
      "audio/pop3_10.wav",
      "audio/pop3_12.wav",
      "audio/pop3_14.wav",
      "audio/pop3_16.wav",
      "audio/pop3_18.wav",
      "audio/pop3_20.wav",
    ],
  },

  {
    name: "Pop 4",
    paths: [
      "audio/pop4_0.wav",
      "audio/pop4_2.wav",
      "audio/pop4_4.wav",
      "audio/pop4_6.wav",
      "audio/pop4_8.wav",
      "audio/pop4_10.wav",
      "audio/pop4_12.wav",
      "audio/pop4_14.wav",
      "audio/pop4_16.wav",
      "audio/pop4_18.wav",
      "audio/pop4_20.wav",
    ],
  },
  {
    name: "Classical 1",
    paths: [
      "audio/clas1_0.wav",
      "audio/clas1_2.wav",
      "audio/clas1_4.wav",
      "audio/clas1_6.wav",
      "audio/clas1_8.wav",
      "audio/clas1_10.wav",
      "audio/clas1_12.wav",
      "audio/clas1_14.wav",
      "audio/clas1_16.wav",
      "audio/clas1_18.wav",
      "audio/clas1_20.wav",
    ],
  },
  {
    name: "Classical 2",
    paths: [
      "audio/clas2_0.wav",
      "audio/clas2_2.wav",
      "audio/clas2_4.wav",
      "audio/clas2_6.wav",
      "audio/clas2_8.wav",
      "audio/clas2_10.wav",
      "audio/clas2_12.wav",
      "audio/clas2_14.wav",
      "audio/clas2_16.wav",
      "audio/clas2_18.wav",
      "audio/clas2_20.wav",
    ],
  },
  {
    name: "Classical 3",
    paths: [
      "audio/clas3_0.wav",
      "audio/clas3_2.wav",
      "audio/clas3_4.wav",
      "audio/clas3_6.wav",
      "audio/clas3_8.wav",
      "audio/clas3_10.wav",
      "audio/clas3_12.wav",
      "audio/clas3_14.wav",
      "audio/clas3_16.wav",
      "audio/clas3_18.wav",
      "audio/clas3_20.wav",
    ],
  },
  {
    name: "Classical 4",
    paths: [
      "audio/clas4_0.wav",
      "audio/clas4_2.wav",
      "audio/clas4_4.wav",
      "audio/clas4_6.wav",
      "audio/clas4_8.wav",
      "audio/clas4_10.wav",
      "audio/clas4_12.wav",
      "audio/clas4_14.wav",
      "audio/clas4_16.wav",
      "audio/clas4_18.wav",
      "audio/clas4_20.wav",
    ],
  },
];

export const speechSamples: Sample[] = [
  {
    name: "Female 1",
    paths: [
      "audio/woman1_0.wav",
      "audio/woman1_2.wav",
      "audio/woman1_4.wav",
      "audio/woman1_6.wav",
      "audio/woman1_8.wav",
      "audio/woman1_10.wav",
      "audio/woman1_12.wav",
      "audio/woman1_14.wav",
      "audio/woman1_16.wav",
      "audio/woman1_18.wav",
      "audio/woman1_20.wav",
    ],
  },
  {
    name: "Female 2",
    paths: [
      "audio/woman2_0.wav",
      "audio/woman2_2.wav",
      "audio/woman2_4.wav",
      "audio/woman2_6.wav",
      "audio/woman2_8.wav",
      "audio/woman2_10.wav",
      "audio/woman2_12.wav",
      "audio/woman2_14.wav",
      "audio/woman2_16.wav",
      "audio/woman2_18.wav",
      "audio/woman2_20.wav",
    ],
  },
  {
    name: "Female 3",
    paths: [
      "audio/woman3_0.wav",
      "audio/woman3_2.wav",
      "audio/woman3_4.wav",
      "audio/woman3_6.wav",
      "audio/woman3_8.wav",
      "audio/woman3_10.wav",
      "audio/woman3_12.wav",
      "audio/woman3_14.wav",
      "audio/woman3_16.wav",
      "audio/woman3_18.wav",
      "audio/woman3_20.wav",
    ],
  },
  {
    name: "Female 4",
    paths: [
      "audio/woman4_0.wav",
      "audio/woman4_2.wav",
      "audio/woman4_4.wav",
      "audio/woman4_6.wav",
      "audio/woman4_8.wav",
      "audio/woman4_10.wav",
      "audio/woman4_12.wav",
      "audio/woman4_14.wav",
      "audio/woman4_16.wav",
      "audio/woman4_18.wav",
      "audio/woman4_20.wav",
    ],
  },

  {
    name: "Male 1",
    paths: [
      "audio/man1_0.wav",
      "audio/man1_2.wav",
      "audio/man1_4.wav",
      "audio/man1_6.wav",
      "audio/man1_8.wav",
      "audio/man1_10.wav",
      "audio/man1_12.wav",
      "audio/man1_14.wav",
      "audio/man1_16.wav",
      "audio/man1_18.wav",
      "audio/man1_20.wav",
    ],
  },
  {
    name: "Male 2",
    paths: [
      "audio/man2_0.wav",
      "audio/man2_2.wav",
      "audio/man2_4.wav",
      "audio/man2_6.wav",
      "audio/man2_8.wav",
      "audio/man2_10.wav",
      "audio/man2_12.wav",
      "audio/man2_14.wav",
      "audio/man2_16.wav",
      "audio/man2_18.wav",
      "audio/man2_20.wav",
    ],
  },
  {
    name: "Male 3",
    paths: [
      "audio/man3_0.wav",
      "audio/man3_2.wav",
      "audio/man3_4.wav",
      "audio/man3_6.wav",
      "audio/man3_8.wav",
      "audio/man3_10.wav",
      "audio/man3_12.wav",
      "audio/man3_14.wav",
      "audio/man3_16.wav",
      "audio/man3_18.wav",
      "audio/man3_20.wav",
    ],
  },
  {
    name: "Male 4",
    paths: [
      "audio/man4_0.wav",
      "audio/man4_2.wav",
      "audio/man4_4.wav",
      "audio/man4_6.wav",
      "audio/man4_8.wav",
      "audio/man4_10.wav",
      "audio/man4_12.wav",
      "audio/man4_14.wav",
      "audio/man4_16.wav",
      "audio/man4_18.wav",
      "audio/man4_20.wav",
    ],
  },
];
