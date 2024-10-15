## clipping-signals-perception
**Clipped audio quality subjective evaluation web application**

This test allows you to find out how sensitive your auditory system is to this type of sound distortion such as clipping. Clipping is the limitation of the signal volume by a certain threshold. If this threshold is lower than the maximum signal values, then the signal is distorted the more strongly, the greater the difference between the maximum signal value and the limiting threshold.

Listener chooses the type of sound signal, set the duration of listening signal, after which you have to listen to the signal 11 times.

Listening to the signals, listener does not know in advance what degree of distortion was applied to the signal. But you can hear that the signal is distorted, so you can rate this degree on a 5-point scale, setting from 5 (the signal sounds good) to 1 (the signal sounds awful) points. You can give a fractional score, for example, 3.4, which means three and four tenths.

When listening to the signal 11 times, a graph of your estimates (MOS) will be automatically plotted against the degree of distortion (the more k, the stronger the distortion).

Finally, listener can compare your chart with the average chart built from testing 35 students. 

**Inverse Kurtosis Calculation**

How It Works

1. Reading the Audio File: The script uses the soundfile library to read the audio file and load the audio data into a NumPy array.

2. Processing the Audio Data: If the audio data is stereo, it converts it to mono by averaging the two channels.

3. Calculating Inverse Kurtosis: The script calculates the mean, variance, and fourth moment of the audio amplitude values. It then computes the kurtosis and its inverse to provide a measure of the signal's distortion.

References

For more information on using kurtosis for objective assessment of musical signals clipping degree, refer to the following article:

[Using Kurtosis for Objective Assessment of the Musical Signals Clipping Degree](https://www.researchgate.net/publication/338659547_Using_Kurtosis_for_Objective_Assessment_of_the_Musical_Signals_Clipping_Degree)