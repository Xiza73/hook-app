import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import { useLayoutEffect, useRef, useState } from "react";

export interface QuoteProps {
  author: string;
  quote: string;
}

export const Quote: React.FC<QuoteProps> = ({ author, quote }) => {
  const pRef = useRef<HTMLParagraphElement>();
  const [boxSize, setBoxSize] = useState({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    const { x = 0, y = 0 } = pRef.current?.getBoundingClientRect() ?? {};

    setBoxSize({
      width: x,
      height: y,
    });
  }, [quote]);

  return (
    <>
      <ListItem className="bg-slate-300 w-auto">
        <ListItemAvatar>
          <Avatar>
            <MessageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={quote}
          secondary={author}
          className="max-w-lg"
          ref={pRef}
        />
      </ListItem>

      <code>
        <pre className="my-3">{JSON.stringify(boxSize, null, 2)}</pre>
      </code>
    </>
  );
};
