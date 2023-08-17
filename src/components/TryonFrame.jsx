import { h } from 'preact';
import { useContext, useEffect } from 'preact/hooks';
import { GlobalContext } from './GlobalContextProvider';
import ConfigContainer from './ConfigContainer';
import * as GlamAR from 'glamar-sdk';

const TryonFrame = () => {
  const [state] = useContext(GlobalContext);
  useEffect(() => {
    GlamAR.applyMakeupBySku(state.activeSkuId);
  }, [state.activeSkuId]);

  useEffect(() => {
    GlamAR.init('container__frame_wrapper', '<PLACE_YOUR_GLAMAR_ACTIVATION_KEY'); //Replace it with your GlamAR Activation key 
    GlamAR.addEventListener('opened', () => {
      GlamAR.applyMakeupBySku(118); //Enter your product SKUID  
    });
  }, []);

  return (
    <div className="d-flex">
      <div id="container__frame_wrapper" />
      <ConfigContainer />
    </div>
  );
};

export default TryonFrame;
