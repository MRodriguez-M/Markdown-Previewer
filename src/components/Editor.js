import React from "react";

const Editor = (props) => {
    return (
        <>
            <div id="editor-box">
                <p>Editor</p>
                <textarea id="editor" value={props.markdown} onChange={props.handleChange}></textarea>
            </div>
        </>
    );
};

export default Editor;