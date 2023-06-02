import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";

export interface QuoteProps {
  author: string;
  quote: string;
}

export const Quote: React.FC<QuoteProps> = ({ author, quote }) => (
  <ListItem className="bg-slate-300 w-auto">
    <ListItemAvatar>
      <Avatar>
        <MessageIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary={quote} secondary={author} className="max-w-lg" />
  </ListItem>
);
