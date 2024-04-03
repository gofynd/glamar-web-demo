import { h } from 'preact';
// import { useContext, useEffect } from 'preact/hooks';
// import { getHomeSkuList } from '../utils';
// import { GlobalContext, GlobalActionType } from './GlobalContextProvider';

const Wrapper = ({ children }) => {
  // const [, dispatch] = useContext(GlobalContext);
  // useEffect(() => {
  //   getHomeSkuList().then((data) => {
  //     console.log(data.data);
  //     dispatch({
  //       type: GlobalActionType.UpdateHomeSkuList,
  //       payload: { homeSkuList: data.data }
  //     });
  //     if (data.data[0]) {
  //       dispatch({
  //         type: GlobalActionType.UpdateTryOnType,
  //         payload: { tryOnType: data?.data?.[0] }
  //       });
  //       dispatch({
  //         type: GlobalActionType.UpdateTryOnTypeTabs,
  //         payload: { tryOnTypeTabs: data?.data?.[0]?.tabs }
  //       });
  //       console.log(data?.data?.[0]?.tabs[0]);
  //       dispatch({
  //         type: GlobalActionType.UpdateActiveTryOnTab,
  //         payload: { activeTryOnTab: data?.data?.[0]?.tabs[0] }
  //       });
  //       dispatch({
  //         type: GlobalActionType.UpdateActiveSkuId,
  //         payload: { activeSkuId: data?.data?.[0]?.tabs[0].skus[0].id }
  //       });
  //     }
  //   });
  // }, []);
  return <div className="container">{children}</div>;
};

export default Wrapper;
