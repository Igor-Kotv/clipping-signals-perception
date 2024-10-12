import numpy as np
import soundfile as sf

def compute_inverse_kurtosis(audio_amplitude_values: np.ndarray) -> float:
    if audio_amplitude_values is None or len(audio_amplitude_values) == 0:
        return 0.0

    mean = np.mean(audio_amplitude_values)
    variance = np.mean((audio_amplitude_values - mean) ** 2)
    fourth_moment = np.mean((audio_amplitude_values - mean) ** 4)

    if variance == 0:
        return 0.0  # Avoid division by zero

    kurtosis = fourth_moment / (variance ** 2)
    inverse_kurtosis = 1 / kurtosis

    return inverse_kurtosis

def read_audio_file(file_path: str) -> np.ndarray:
    data = sf.read(file_path)
    if data.ndim > 1:
        # If stereo, take the mean of the two channels to convert to mono
        data = np.mean(data, axis=1)
    return data

# Example usage
file_path = 'path/to/your/audiofile.wav'
audio_data = read_audio_file(file_path)
inverse_kurtosis = compute_inverse_kurtosis(audio_data)
print('Inverse Kurtosis:', inverse_kurtosis)