import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./couterSlice";

CounterFeature.propTypes = {

};

function CounterFeature(props) {
    const counter = useSelector(state => state.counter); // kết nối state với redux
    const dispatch = useDispatch();

    const handleIncreaseClick = () => {
        const action = increase(); //action creater
        console.log(action)
        dispatch(action);
    }
    const handleDecreaseClick = () => {
        const action = decrease(); //action creater
        dispatch(action);
    }

    return (
        <div>
            Counter Features: {counter}
            <div>
                <button onClick={handleIncreaseClick}>Increase</button>
                <button onClick={handleDecreaseClick}>Decrease</button>
            </div>
        </div>
    )
}

export default CounterFeature;