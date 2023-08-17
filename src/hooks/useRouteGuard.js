import { useContext, useEffect } from 'preact/hooks';
import { route } from 'preact-router';

import { GlobalContext } from '../components/GlobalContextProvider';

const useRouteGuard = () => {
  const [state] = useContext(GlobalContext);

  useEffect(() => {
    if (state.isLoading) route('/');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useRouteGuard;
