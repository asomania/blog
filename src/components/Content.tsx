import CodeEditor from "@uiw/react-textarea-code-editor";
import { BlogType } from "../type/Blog";
import "./styles/content.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface ContentProps {
  blogContent: BlogType | undefined;
}

export default function Content({ blogContent }: ContentProps) {
  const [parts, setParts] = useState<string[]>([]);
  const theme = useSelector(
    (state: { themePick: { theme: boolean } }) => state.themePick.theme
  );
  const [isDarkTheme, setIsDarkTheme] = useState<string>("");

  useEffect(() => {
    setIsDarkTheme(theme ? "light-theme-editor" : "dark-theme");
  }, [theme]);

  useEffect(() => {
    setParts(blogContent?.content?.split("<code>") || []);
  }, [blogContent]);

  if (!blogContent) {
    return <div className="post-content">No content available</div>;
  }

  console.log("Blog İçeriği:", parts);

  return (
    <div className="post-content">
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <CodeEditor
            key={index}
            value={part}
            language="js"
            placeholder="Code block"
            className={isDarkTheme}
            padding={15}
            style={{
              fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            }}
            readOnly
          />
        ) : (
          <div key={index} dangerouslySetInnerHTML={{ __html: part }} />
        )
      )}
    </div>
  );
}
