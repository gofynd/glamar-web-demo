export const STATUS_CODES = {
  SUCCESS: 0,
  RUNNING: -1,
  NETWORK_ERROR: 100,
  INVALID_SKU: 102,
  INVALID_SKUID: 101,
  ASSET_NOT_FOUND: 103,
  SKIP_FRAME: 125,
  MODEL_LOAD_FAILED: 201,
  SKU_NOT_FOUND: 400
};

export const ERROR_MSGS = {
  [STATUS_CODES.NETWORK_ERROR]: 'Please check you network connection',
  [STATUS_CODES.INVALID_SKUID]: 'Please renew or buy a new Subscription',
  [STATUS_CODES.INVALID_SKU]: 'Please give a valid SKU',
  [STATUS_CODES.ASSET_NOT_FOUND]: 'Asset not found',
  [STATUS_CODES.MODEL_LOAD_FAILED]: 'Model load failed',
  [STATUS_CODES.SKU_NOT_FOUND]: 'SKU not found'
};
