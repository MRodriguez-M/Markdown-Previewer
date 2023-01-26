import Editor from "./Editor"
import Preview from "./Preview";
import { useState } from "react";

function App() {
  const [markdown, setMarkdown] = useState("");

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <>
      <Editor markdown={markdown} handleChange={handleChange} />
      <Preview markdown={markdown} />
    </>
  );
}

export default App;
