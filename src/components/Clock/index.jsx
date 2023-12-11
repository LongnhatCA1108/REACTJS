import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
//
Clock.propTypes = {
}
//
// TodoList.defaultProps = {

// }
function Clock() {
    const [timeString, setTimeString] = useState(null);

    useEffect(() => {
        const intevalRef = setInterval(() => {
            const now = new Date();
            const hours = ('0' + now.getHours()).slice(-2);
            const minutes = ('0' + now.getMinutes()).slice(-2);
            const seconds = ('0' + now.getSeconds()).slice(-2);
            const currentTimeString = hours + ':' + minutes + ':' + seconds;

            setTimeString(currentTimeString);
        }, 1000);
        return () => {
            clearInterval(intevalRef.current);
        }
    }, [])
    return (
        <div style={{ fontSize: '48px' }}>
            {timeString}
        </div>
    );
}
export default Clock;