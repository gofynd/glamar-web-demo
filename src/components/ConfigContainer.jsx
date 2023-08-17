import { h } from 'preact';
import { GlobalContext, GlobalActionType } from './GlobalContextProvider';
import { useContext } from 'preact/hooks';

const ConfigContainer = () => {
  const [state, dispatch] = useContext(GlobalContext);
  const handleTabClick = (idx) => {
    dispatch({
      type: GlobalActionType.UpdateActiveTryOnTab,
      payload: { activeTryOnTab: state.tryOnTypeTabs[idx] }
    });
    dispatch({
      type: GlobalActionType.UpdateActiveSkuId,
      payload: { activeSkuId: state.tryOnTypeTabs[idx].skus[0].id }
    });
  };

  const handleColorPalletClick = (idx) => {
    console.log(idx);
    dispatch({
      type: GlobalActionType.UpdateActiveSkuId,
      payload: { activeSkuId: state.activeTryOnTab?.skus[idx].id }
    });
  };
  return (
    <div className="config__tabs-container">
      <div class="config__tabs">
        {state.tryOnTypeTabs?.length > 1 &&
          state.tryOnTypeTabs.map((eachType, idx) => {
            return (
              <div
                onClick={() => handleTabClick(idx)}
                key={idx}
                className={`tab_items ${
                  state.activeTryOnTab.name === eachType.name
                    ? 'selected_tab'
                    : ''
                }`}
              >
                {eachType.name}
              </div>
            );
          })}
      </div>
      <div className="color_area">
        {state.activeTryOnTab?.skus?.map((eachPallet, idx) => {
          return (
            <div
              onClick={() => handleColorPalletClick(idx)}
              className="color_box"
              key={idx}
              style={{
                background: eachPallet.color,
                width: '45px',
                height: '45px'
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ConfigContainer;
