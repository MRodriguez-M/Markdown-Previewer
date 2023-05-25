import React from "react";

const Editor = (props) => {
    return (
        <>
            <div id="editor-box">
                <h3>Editor</h3>
                <button onClick={props.handleClick}>Clear</button>
                <textarea id="editor" value={props.markdown} onChange={props.handleChange}></textarea>
            </div>
        </>
    );
};

export default Editor;