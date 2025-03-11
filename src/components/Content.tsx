import React, { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { BlogType } from "../type/Blog";

interface ContentProps {
  blogContent: BlogType | undefined;
}

export default function Content({ blogContent }: ContentProps) {
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);

  if (!blogContent) {
    return <div className="post-content">No content available</div>;
  }

  return (
    <>
      <div className="post-content">{blogContent.content}</div>
      <CodeEditor
        value={code}
        language="js"
        placeholder="Please enter JS code."
        onChange={(evn) => setCode(evn.target.value)}
        padding={15}
        style={{
          backgroundColor: "#f5f5f5",
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
      />
    </>
  );
}
