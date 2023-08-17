import environment from '../../env';

// export const initialState = {
//   apiKey: '',
//   apiKeyMem: '',
//   parentOrigin: '',
//   backendUrl: environment.SNELLO_URL,
//   isLoading: false,
//   isTfjsLoading: false,
//   skuId: null,
//   tryOnType: '',
//   tryOnTypeMem: '',
//   requestId: '',
//   download: false,
//   isDebug: false,
//   imageUrl:'',
//   moduleConfig: null,
//   skuConfig: {
//     categoryId: null,
//     patternId: null,
//     color: null,
//     opacity: null
//   }
// };

export const initialState = {
  color: 0,
  backendUrl: environment.SNELLO_URL,
  skuList: null,
  homeSkuList: [],
  activeSkuId: null,
  tryOnType: null,
  tryOnTypeTabs: null,
  activeTryOnTab: null
};
