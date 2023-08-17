export const getImageData = (url) => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const image = document.createElement('img');
    image.onload = () => {
      canvas.height = image.naturalHeight;
      canvas.width = image.naturalWidth;
      ctx.drawImage(image, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      resolve(imageData);
    };
    image.onerror = () => {
      reject();
    };
    image.crossOrigin = 'Anonymous';
    image.src = url;
  });
};

export const getAssetForWasm = async (url) => {
  const image = await getImageData(url);
  if (!image) return;

  const memorySize = window.Module._get_buffer_size(image.width, image.height);
  const memory = window.Module._create_buffer(memorySize);

  window.Module.HEAP8.set(image.data, memory);
  return [memory, memorySize];
};

export const setImageToMemory = async (asset, assetMemory) => {
  const image = await getImageData(asset);
  window.Module.HEAP8.set(image.data, assetMemory);
};

export const setStringToMemory = (text, mem) => {
  mem && window.Module._free(mem);
  const lengthBytes = window.Module.lengthBytesUTF8(text) + 1;
  const textMem = window.Module._malloc(lengthBytes);
  window.Module.stringToUTF8(text, textMem, lengthBytes);
  return textMem;
};

// Only for debugging purpose
export const validateAsset = (assetMem, assetSize, width, height) => {
  const resultView = new Uint8Array(
    window.Module.HEAP8.buffer,
    assetMem,
    assetSize
  );
  const result = new Uint8ClampedArray(resultView);
  const imgData = new ImageData(result, width, height);
  const canvas = document.createElement('canvas');
  canvas.height = height;
  canvas.width = width;
  canvas.style.width = '400px';
  canvas.style.backgroundColor = 'red';
  const canvasCtx = canvas.getContext('2d');
  canvasCtx.putImageData(imgData, 0, 0);
  document.body.appendChild(canvas);
};
