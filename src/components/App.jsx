import { h } from 'preact';
import GlobalContextProvider from './GlobalContextProvider';
import TryonInit from './TryonInit';
import TryonFrame from './TryonFrame';
import Wrapper from './Wrapper';

const App = () => {
  return (
    <GlobalContextProvider>
      <div className="logo_container">
        <img
          width={150}
          height={40}
          src="https://cdn-1.glamar.io/static/website/glamar-logo.png"
        />
      </div>
      <Wrapper>
        <TryonInit />
        <TryonFrame />
      </Wrapper>
    </GlobalContextProvider>
  );
};

export default App;
