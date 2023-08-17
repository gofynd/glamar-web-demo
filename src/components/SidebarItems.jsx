import { h } from 'preact';
import { GlobalContext, GlobalActionType } from './GlobalContextProvider';
import { useContext, useEffect } from 'preact/hooks';

const SidebarItems = () => {
  //   const sidebarItems = [
  //     {
  //       name: 'Lipstick'
  //     },
  //     {
  //       name: 'Eyeshadow'
  //     },
  //     {
  //       name: 'Blush'
  //     },
  //     {
  //       name: 'Eyeliner'
  //     }
  //   ];
  const [state, dispatch] = useContext(GlobalContext);
  const handleTryonTypeChange = (idx) => {
    dispatch({
      type: GlobalActionType.UpdateTryOnType,
      payload: { tryOnType: state.homeSkuList[idx] }
    });
    dispatch({
      type: GlobalActionType.UpdateTryOnTypeTabs,
      payload: { tryOnTypeTabs: state.homeSkuList[idx].tabs }
    });
    dispatch({
      type: GlobalActionType.UpdateActiveTryOnTab,
      payload: { activeTryOnTab: state.homeSkuList[idx].tabs[0] }
    });
    dispatch({
      type: GlobalActionType.UpdateActiveSkuId,
      payload: { activeSkuId: state.homeSkuList[idx].tabs[0].skus[0].id }
    });
  };

  const isCurrentTryOn = (idx, item) => {
    return state.tryOnType?.name === item.name;
  };

  useEffect(() => {
    console.log(state.homeSkuList);
  }, []);
  return (
    <div className="sidebar-item">
      <div className="sidebar-item-tabs__wrapper">
        {state?.homeSkuList?.map((eachItem, idx) => {
          return (
            <div
              onClick={() => {
                handleTryonTypeChange(idx);
              }}
              key={idx}
              className={`${
                isCurrentTryOn(idx, eachItem)
                  ? 'sidebar-item-tabs__item--selected'
                  : ''
              } sidebar-item-tabs__item`}
            >
              {eachItem.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarItems;
