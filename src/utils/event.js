let parentOrigin = '';

const sendMessage = (message) => {
  window.parent !== window.self &&
    window.parent.postMessage(message, parentOrigin);
};

export const setParentOrigin = (origin) => {
  parentOrigin = origin;
};

export const emitInitComplete = () => {
  sendMessage({
    type: 'init-complete',
    payload: {
      height: document.body.offsetHeight,
      width: document.body.offsetWidth
    }
  });
};

export const emitModuleLoaded = () => {
  sendMessage({ type: 'loaded' });
};

export const emitModuleOpened = () => {
  sendMessage({ type: 'opened' });
};

export const emitModuleClosed = () => {
  sendMessage({ type: 'closed' });
};

export const emitCameraOpened = () => {
  sendMessage({ type: 'camera-opened' });
};

export const emitCameraClosed = () => {
  sendMessage({ type: 'camera-closed' });
};

export const emitCameraFailed = () => {
  sendMessage({ type: 'camera-failed' });
};

export const emitPhotoLoaded = () => {
  sendMessage({ type: 'photo-loaded' });
};

export const emitSKUApplied = () => {
  sendMessage({ type: 'sku-applied' });
};

export const emitSKUFailed = () => {
  sendMessage({ type: 'sku-failed' });
};

export const emitReset = () => {
  sendMessage({ type: 'reset' });
};

export const emitError = (payload) => {
  sendMessage({ type: 'error', payload });
};
