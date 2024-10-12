export function computeInverseKurtosis(audioAmplitudeValues: Float32Array | null): number {
    if (!audioAmplitudeValues || audioAmplitudeValues.length === 0) {
        return 0;
    }

    const mean = audioAmplitudeValues.reduce((sum, value) => sum + value, 0) / audioAmplitudeValues.length;

    const variance =
        audioAmplitudeValues.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) /
        audioAmplitudeValues.length;
    const fourthMoment =
        audioAmplitudeValues.reduce((sum, value) => sum + Math.pow(value - mean, 4), 0) /
        audioAmplitudeValues.length;

    if (variance === 0) return 0; // Avoid division by zero

    const kurtosis = fourthMoment / Math.pow(variance, 2);
    const inverseKurtosis = 1 / kurtosis;

    return inverseKurtosis;
}
