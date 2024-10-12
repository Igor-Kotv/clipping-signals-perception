import { useState, useEffect } from "react";
import audioDecode from "audio-decode";

function fetchAudioBuffer(filePath: string): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
        if (filePath.startsWith("http://") || filePath.startsWith("https://")) {
            fetch(filePath)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(
                            `Network response was not ok: ${response.statusText}`,
                        );
                    }
                    return response.arrayBuffer();
                })
                .then((arrayBuffer) => {
                    resolve(arrayBuffer);
                })
                .catch((error) => {
                    reject(error);
                });
        } else {
            // Assuming filePath is a File object for local files
            fetch(filePath)
                .then((response) => response.blob())
                .then((blob) => {
                    const reader = new FileReader();
                    reader.onload = () => {
                        resolve(reader.result as ArrayBuffer);
                    };
                    reader.onerror = () => {
                        reject(new Error("Failed to read local file"));
                    };
                    reader.readAsArrayBuffer(blob);
                })
                .catch((error) => {
                    reject(error);
                });
        }
    });
}

function useAudioFile(filePath: string) {
    const [audioData, setAudioData] = useState<Float32Array | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!filePath.endsWith(".wav")) return;
        const buffer = fetchAudioBuffer(filePath);
        buffer
            .then((arrayBuffer) => {
                return audioDecode(arrayBuffer);
            })
            .then((decodedAudio) => {
                if (decodedAudio.numberOfChannels > 0) {
                    setAudioData(decodedAudio.getChannelData(0)); // Assuming mono audio
                } else {
                    throw new Error("No audio channels found");
                }
            })
            .catch((err) => {
                setError(err.message);
            });
    }, [filePath]);

    return { audioData, error };
}

export default useAudioFile;
