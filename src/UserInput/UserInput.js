import React from 'react';

const UserInput = (props) => {
    const inputStyle = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '100px',
      }
    return (
        <input name="name" value={props.username} onChange={props.click} stye={inputStyle}/>
    );
}

export default UserInput;