import './InputFieldStyles.sass'
import { useState } from 'react'

const InputField = (props) => {
  const [state, setState] = useState('');

  function handleChange(e) {
    setState(e.target.value);
  }

  return (
    <div className="inputField">
      <input 
        className={props.className} 
        type={props.type}
        placeholder={props.placeholderText}
        onChange={handleChange}
      />
      <label className={state && 'containsText'}> {props.labelText} </label>
    </div>
  );
};

InputField.defaultProps = {
  labelText: "Placeholder",
  className: null,
  type: "text",
  placeholderText: null
}

export default InputField;
