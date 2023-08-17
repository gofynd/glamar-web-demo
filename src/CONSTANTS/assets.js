import environment from '../env';

const ASSET_URL = environment.ASSET_URL;

export const assets = {
  closeImgUrl: `${ASSET_URL}/close.png`,
  downloadImgUrl: `${ASSET_URL}/download.svg`,
  cameraImgUrl: `${ASSET_URL}/camera.svg`,
  peopleImgUrl: `${ASSET_URL}/people.svg`,
  folderImgUrl: `${ASSET_URL}/folder.svg`,
  optionsBGImgUrl: `${ASSET_URL}/options-bg.png`,
  watermarkImgUrl: `${ASSET_URL}/watermark.png`,
  homeImgUrl: `${ASSET_URL}/home.png`,
  loaderImgUrl: `${ASSET_URL}/loader.gif`
};

export const modelImgUrls = [
  `${ASSET_URL}/model1.png`,
  `${ASSET_URL}/model2.png`,
  `${ASSET_URL}/model3.png`,
  `${ASSET_URL}/model4.png`,
  `${ASSET_URL}/model5.png`,
  `${ASSET_URL}/model6.png`
];

export const skuAssets = [
  {
    patterns: [
      {
        baseAsset: 'lipstick/matte/matte.png',
        effectAsset: 'lipstick/matte/matte_effect.png'
      },
      {
        baseAsset: 'lipstick/gloss/gloss.png',
        effectAsset: 'lipstick/gloss/gloss_effect.png'
      },
      {
        baseAsset: 'lipstick/metallic/metallic.png',
        effectAsset: 'lipstick/metallic/metallic_effect.png'
      },
      {
        baseAsset: 'lipstick/shimmer/shimmer.png',
        effectAsset: 'lipstick/shimmer/shimmer_effect.png'
      },
      {
        baseAsset: 'lipstick/velvet/velvet.png',
        effectAsset: 'lipstick/velvet/velvet_effect.png'
      }
    ]
  },
  { baseAsset: 'eyeliner/eyeliner.png' },
  { baseAsset: 'eyeshadow/eyeshadow.png' },
  { baseAsset: 'blush/blush.png' }
];
