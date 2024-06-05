import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyAction } from "../store/privacy";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    console.log("handleIncrement called");
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleAdd = () => {
    const value = inputElement.current.value;
    dispatch(counterActions.add({ counter: value }));
    inputElement.current.value = "";
  };

  const handleSubstract = () => {
    const value = inputElement.current.value;
    dispatch(counterActions.substract({ counter: value }));
    inputElement.current.value = "";
  };

  const handlePrivacy = () => {
    const value = inputElement.current.value;
    dispatch(privacyAction.toggle());
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg px-4"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg px-4"
          onClick={handlePrivacy}
        >
          Privacy Change
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center row_control">
        <input
          type="text"
          className="px-4 gap-3"
          placeholder="Enter number"
          ref={inputElement}
        />
        <button
          type="button"
          className="btn btn-info btn-lg px-4"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-info btn-lg px-4"
          onClick={handleSubstract}
        >
          Substract
        </button>
      </div>
    </>
  );
};

export default Controls;
