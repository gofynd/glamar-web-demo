import { h } from 'preact';
import { tryOnTypes } from '../CONSTANTS/makeupConstants';
import { useState, useContext } from 'preact/hooks';
import { GlobalContext, GlobalActionType } from './GlobalContextProvider';

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [state, dispatch] = useContext(GlobalContext);

  const handleColorClick = (index) => {
    if (index !== selectedColor) {
      setSelectedColor(index);
      dispatch({
        type: GlobalActionType.UpdateTryOnColor,
        payload: { color: index }
      });
    }
  };
  return (
    <div>
      <h3>Choose the shade/color</h3>
      <div className="container__colorPicker">
        {tryOnTypes[state?.tryOnType]?.colors.map((eachColor, index) => {
          return (
            <div
              onClick={() => handleColorClick(index)}
              key={index}
              className={`container__colorBox ${
                selectedColor === index ? 'bordered_color_btn' : ''
              }`}
              style={{ background: eachColor.color }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ColorPicker;
