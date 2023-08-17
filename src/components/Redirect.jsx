import { useEffect } from 'preact/hooks';
import { route } from 'preact-router';

const Redirect = (props) => {
  useEffect(() => {
    route(props.to, true);
  });

  return null;
};

export default Redirect;
