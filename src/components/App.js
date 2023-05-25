import Editor from "./Editor"
import Preview from "./Preview";
import { useState } from "react";

function App() {
  const [markdown, setMarkdown] = useState(
    "# Welcome to My Markdown Previewer!\n" + "---\n"
    + "## Here are some of the things you can do...\n"
    + "- You can create [links](https://www.markdownguide.org/basic-syntax/)\n"
    + "- Write inline code (`console.log('This is inline code!')`) as part of a sentence\n"
    + "- Write code blocks:\n"
    + "```\n"
    + "    if(sampleVar == 25) {\n"
    + "      return console.log('Print this line!'); }\n"
    + "```\n"
    + "- Create lists:\n"
    + "    1. Item one\n"
    + "    1. Item two\n"
    + "    1. Item three\n"
    + "> Write text in blockquotes. Check out the spacing that blockquotes creates! Pretty neat.\n"
    + "- Add an image:\n"
    + "![Jolteon](/assets/jolteon.png)\n\n"
    + "This is the pokemon **Jolteon**!\n\n"
    + "There are many more things you can do with Markdown syntax and you can check them out at the link provided in the first bullet point. Enjoy practicing Markdown!"
  );

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const handleClick = () => {
    setMarkdown("");
  };

  return (
    <>
      <Editor markdown={markdown} handleChange={handleChange} handleClick={handleClick} />
      <Preview markdown={markdown} />
    </>
  );
}

export default App;