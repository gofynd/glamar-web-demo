import { emitCameraClosed, emitCameraFailed, emitCameraOpened } from './event';

let video,
  videoStream,
  leftOffset = 0,
  topOffset = 0;

export const startWebcam = (videoEl, width, height) => {
  return new Promise((resolve, reject) => {
    if (video) {
      resolve(video);
      return;
    }
    video = videoEl;
    video.setAttribute('autoplay', '');
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');

    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          facingMode: 'user'
        }
      })
      .then((stream) => {
        videoStream = stream;
        video.onloadedmetadata = () => {
          video.play();

          if (
            video.videoWidth > video.videoHeight &&
            video.videoHeight < height
          ) {
            width = height = video.videoHeight;
          }

          const leftDiff = video.videoWidth - width;
          const topDiff = video.videoHeight - height;
          leftOffset = leftDiff / 2;
          topOffset = topDiff / 2;

          // Aspect ratio
          // const diff = video.videoWidth - width;
          // leftOffset = diff / 2;
          // topOffset = 0;

          emitCameraOpened();
          resolve(video);
        };
        video.srcObject = videoStream;
      })
      .catch((err) => {
        emitCameraFailed();
        reject(err);
      });
  });
};

export const stopWebcam = () => {
  if (!video) return;
  video.pause();
  video.src = '';
  video.srcObject = null;
  videoStream && videoStream.getTracks().forEach((trak) => trak.stop());
  video = null;
  videoStream = null;
  emitCameraClosed();
};

export const getVideo = () => {
  return video;
};

export const getVideoOffset = () => {
  return { topOffset, leftOffset };
};
