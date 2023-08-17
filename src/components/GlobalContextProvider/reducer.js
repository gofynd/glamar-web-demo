export const GlobalActionType = {
  UpdateState: 'UPDATE_STATE',
  UpdateApiKey: 'UPDATE_API_KEY',
  UpdateApiKeyMem: 'UPDATE_API_KEY_MEM',
  UpdateParentOrigin: 'UPDATE_PARENT_ORIGIN',
  UpdateBackendUrl: 'UPDATE_BACKEND_URL',
  UpdateIsLoading: 'UPDATE_IS_LOADING',
  UpdateIsTfjsLoading: 'UPDATE_IS_TFJS_LOADING',
  UpdateSkuId: 'UPDATE_SKU_ID',
  UpdateTryOn: 'UPDATE_TRY_ON',
  UpdateRequestId: 'UPDATE_REQUEST_ID',
  UpdateDownload: 'UPDATE_DOWNLOAD',
  UpdateModuleConfig: 'UPDATE_MODULE_CONFIG',
  UpdateSkuConfig: 'UPDATE_SKU_CONFIG',
  UpdateImageUrl: 'UPDATE_IMAGE_URL',
  UpdateTryOnType: 'UPDATE_TRY_ON_TYPE',
  UpdateTryOnColor: 'UPDATE_TRY_ON_COLOR',
  UpdateSkuList: 'UPDATE_SKU_LIST',
  UpdateHomeSkuList: 'UPDATE_HOME_SKU_LIST',
  UpdateActiveSkuId: 'UPDATE_ACTIVE_SKU_ID',
  UpdateTryOnTypeTabs: 'UPDATE_TRY_ON_TYPE_TABS',
  UpdateActiveTryOnTab: 'UPDATE_ACTIVE_TRY_ON_TAB'
};

export const globalReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GlobalActionType.UpdateState:
      return {
        ...state,
        ...payload
      };
    case GlobalActionType.UpdateApiKey:
      return {
        ...state,
        apiKey: payload.apiKey
      };
    case GlobalActionType.UpdateApiKeyMem:
      return {
        ...state,
        apiKeyMem: payload.apiKeyMem
      };
    case GlobalActionType.UpdateParentOrigin:
      return {
        ...state,
        parentOrigin: payload.parentOrigin
      };
    case GlobalActionType.UpdateBackendUrl:
      return {
        ...state,
        backendUrl: payload.backendUrl
      };
    case GlobalActionType.UpdateIsLoading:
      return {
        ...state,
        isLoading: payload.isLoading
      };
    case GlobalActionType.UpdateIsTfjsLoading:
      return {
        ...state,
        isLoading: payload.isTfjsLoading
      };
    case GlobalActionType.UpdateSkuId:
      if (payload.skuId === state.skuId) return state;
      return {
        ...state,
        skuId: payload.skuId,
        skuConfig: {
          categoryId: null,
          patternId: null,
          color: null,
          opacity: null
        }
      };
    case GlobalActionType.UpdateSkuConfig:
      if (areObjectsEqual(state.skuConfig, payload.skuConfig)) return state;
      return {
        ...state,
        skuConfig: payload.skuConfig,
        skuId: null
      };
    case GlobalActionType.UpdateTryOn:
      return {
        ...state,
        tryOnType: payload.tryOnType,
        tryOnTypeMem: payload.tryOnTypeMem
      };
    case GlobalActionType.UpdateRequestId:
      return {
        ...state,
        requestId: payload.requestId
      };
    case GlobalActionType.UpdateDownload:
      return {
        ...state,
        download: payload.download
      };
    case GlobalActionType.UpdateModuleConfig:
      return {
        ...state,
        moduleConfig: payload.moduleConfig
      };
    case GlobalActionType.UpdateImageUrl:
      return {
        ...state,
        imageUrl: payload.imageUrl
      };
    case GlobalActionType.UpdateTryOnType:
      console.log('reduecer tryontype', payload.tryOnType);
      return {
        ...state,
        tryOnType: payload.tryOnType
      };
    case GlobalActionType.UpdateTryOnColor:
      return {
        ...state,
        color: payload.color
      };
    case GlobalActionType.UpdateSkuList:
      return {
        ...state,
        skuList: payload.skuList
      };
    case GlobalActionType.UpdateHomeSkuList:
      return {
        ...state,
        homeSkuList: payload.homeSkuList
      };
    case GlobalActionType.UpdateActiveSkuId:
      return {
        ...state,
        activeSkuId: payload.activeSkuId
      };
    case GlobalActionType.UpdateTryOnTypeTabs:
      return {
        ...state,
        tryOnTypeTabs: payload.tryOnTypeTabs
      };
    case GlobalActionType.UpdateActiveTryOnTab:
      return {
        ...state,
        activeTryOnTab: payload.activeTryOnTab
      };
    default:
      return state;
  }
};

function areObjectsEqual(objOne, objTwo) {
  for (const key in objOne)
    if (key in objTwo && objOne[key] !== objTwo[key]) return false;
  return true;
}
