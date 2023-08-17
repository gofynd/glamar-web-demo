import { h } from 'preact';
import { useReducer, useMemo } from 'preact/hooks';
import { createContext } from 'preact/compat'

import { initialState } from './state';
import { globalReducer } from './reducer';

export const GlobalContext = createContext([initialState, () => null]);

const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  const [memState, memDispatch] = useMemo(() => [state, dispatch], [state]);
  return (
    <GlobalContext.Provider value={[memState, memDispatch]}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export * from './reducer';

export default GlobalContextProvider;
