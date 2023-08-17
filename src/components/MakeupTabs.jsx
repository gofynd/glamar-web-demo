import { h } from 'preact';
import { useState, useContext } from 'preact/hooks';
import { tryOnTypes } from '../CONSTANTS/makeupConstants';
import { GlobalContext, GlobalActionType } from './GlobalContextProvider';

const MakeupTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [, dispatch] = useContext(GlobalContext);

  const handleChangeTabs = (index) => {
    if (index !== selectedTab) {
      setSelectedTab(index);
      dispatch({
        type: GlobalActionType.UpdateTryOnType,
        payload: { tryOnType: index }
      });
    }
  };

  return (
    <div className="container__tabWrapper">
      {tryOnTypes.map((eachTryOn, index) => {
        return (
          <div
            onClick={() => handleChangeTabs(index)}
            className={`container__tabItem ${
              selectedTab === index ? 'container__selectedTabItem' : ''
            }`}
            key={index}
          >
            {eachTryOn?.text}
          </div>
        );
      })}
    </div>
  );
};

export default MakeupTabs;
