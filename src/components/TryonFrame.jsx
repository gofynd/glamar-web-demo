import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

const TryonFrame = () => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    window.GlamAR.init(
      'container__frame_wrapper',
      'Replace it with your GlamAR Activation key'
    );
  }, []);

  const handleSubmitClick = () => {
    window.GlamAR.applyMakeupBySku(inputValue);
  };
  const handleValueChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="d-flex">
      <div id="container__frame_wrapper" />
      <div>
        <input
          className="sku-input"
          type="text"
          placeholder="Enter sku Id"
          onChange={handleValueChange}
        />
        <button className="submit-btn" onClick={handleSubmitClick}>
          Apply Sku
        </button>
      </div>
    </div>
  );
};

export default TryonFrame;
