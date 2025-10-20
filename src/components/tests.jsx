import React from 'react';

const Test = () => {
    const newReactRef = React.createRef()

    const addAlert = () => {
        const value = newReactRef.current.value;

        alert(value)
    }
    return (
        <div>
        <textarea ref={newReactRef} placeholder='hi'></textarea>
        <button onClick={addAlert}></button>
        </div>
    )
}

export default Test;