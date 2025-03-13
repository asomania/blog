import React from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { BlogType } from "../type/Blog";

interface ContentProps {
  blogContent: BlogType | undefined;
}

export default function Content({ blogContent }: ContentProps) {
  if (!blogContent) {
    return <div className="post-content">No content available</div>;
  }

  const parts = blogContent.content.split("\\");

  return (
    <div className="post-content">
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <CodeEditor
            key={index}
            value={part}
            language="js"
            placeholder="Code block"
            padding={15}
            style={{
              backgroundColor: "#f5f5f5",
              fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            }}
            readOnly
          />
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </div>
  );
}
