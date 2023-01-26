import React from "react";

const Preview = (props) => {
    return (
        <>
            <div id="preview-box">
                <p>Preview</p>
                <div id="preview">{props.markdown}</div>
            </div>
        </>
    );
};

export default Preview;