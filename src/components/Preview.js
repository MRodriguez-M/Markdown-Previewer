import React from "react";
import { marked } from "marked";

const Preview = (props) => {
    return (
        <>
            <div id="preview-box">
                <h3>Preview</h3>
                <div id="preview" dangerouslySetInnerHTML={{__html: marked.parse(props.markdown)}}></div>
            </div>
        </>
    );
};

export default Preview;