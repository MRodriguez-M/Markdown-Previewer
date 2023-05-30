import React from "react";

const Editor = (props) => {
    return (
        <>
            <div id="editor-box">
                <div id="editor-header">
                    <h3>Editor</h3>
                    <button id="clear-button" onClick={props.handleClick}>Clear</button>
                </div>
                <textarea id="editor" value={props.markdown} onChange={props.handleChange}></textarea>
            </div>
        </>
    );
};

export default Editor;