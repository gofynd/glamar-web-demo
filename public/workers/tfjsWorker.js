/* eslint-disable */

importScripts(
  'https://unpkg.com/@tensorflow/tfjs-core@2.4.0/dist/tf-core.min.js'
);
importScripts(
  'https://unpkg.com/@tensorflow/tfjs-converter@2.4.0/dist/tf-converter.min.js'
);
importScripts(
  'https://unpkg.com/@tensorflow/tfjs-backend-wasm@2.4.0/dist/tf-backend-wasm.min.js'
);
importScripts(
  'https://unpkg.com/@tensorflow/tfjs-backend-webgl@2.4.0/dist/tf-backend-webgl.min.js'
);
importScripts(
  'https://unpkg.com/@tensorflow/tfjs-backend-cpu@2.4.0/dist/tf-backend-cpu.min.js'
);

// Deprecated | doesn't support iris model
// importScripts("https://cdn.jsdelivr.net/npm/@tensorflow-models/facemesh@0.0.4/dist/facemesh.js");

// Deprecated | custom build
importScripts('https://cdn-1.glamarx0.de/js/packages/facemesh.min.js');

// Latest | seems a bit slow
// importScripts("https://unpkg.com/@tensorflow-models/face-landmarks-detection@0.0.1/dist/face-landmarks-detection.js");

let model;

tf.wasm.setWasmPaths(
  `https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-wasm@${tf.wasm.version_wasm}/dist/`
);

self.addEventListener('message', async ({ data }) => {
  const { type, payload } = data;
  if (type === 'init') {
    try {
      await tf.setBackend('webgl');
    } catch (_) {
      await tf.setBackend('wasm');
    }
    try {
      await tf.ready();
      tf.enableProdMode();
      model = await facemesh.load({ maxFaces: 1 });

      // get an empty prediction becuase the first prediction takes a lot time
      await model.estimateFaces(payload.image);

      self.postMessage({ type: 'init-complete' }, null);
    } catch (err) {
      self.postMessage({ type: 'init-complete', payload: { err } }, null);
    }
  } else if (type === 'get-predictions') {
    let points = [];
    if (model) {
      const repeat = payload.repeat || 1;
      let predictions;
      for (let i = 0; i < repeat; i++) {
        predictions = await model.estimateFaces(
          payload.image,
          false /* returnTensors */,
          false /* flipHorizontal */,
          payload.predictIrises
        );
      }
      predictions.map((face) => {
        face.scaledMesh.map((point) => {
          points.push(parseInt(point[0]));
          points.push(parseInt(point[1]));
        });
      });
      points = Int16Array.from(points);
    }
    self.postMessage({ type: 'predictions', payload: points }, null);
  }
});
