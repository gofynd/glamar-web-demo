import { h } from 'preact';
import { useContext } from 'preact/hooks';

import { GlobalContext } from './GlobalContextProvider';
import { assets } from '../CONSTANTS';

const Loader = () => {
  const [state] = useContext(GlobalContext);

  return state.isLoading ? (
    <img className="container__loader" src={assets.loaderImgUrl} alt="loader" />
  ) : null;
};

export default Loader;
