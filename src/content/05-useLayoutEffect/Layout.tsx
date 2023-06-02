import { Title } from "@/components";
import { useCounter, useFetch } from "@/hooks";
import { Container, List } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useEffect } from "react";
import { Quote } from ".";

const uri = "https://api.breakingbadquotes.xyz/v1/quotes";

type QuoteData = {
  author: string;
  quote: string;
};

export const Layout: React.FC = () => {
  const {
    counter: quotes,
    increment,
    decrement,
  } = useCounter(1, {
    minValue: 1,
  });

  const { data, isLoading, handleFetch } = useFetch<QuoteData[]>(
    `${uri}/${quotes}`
  );

  const buttons: {
    color: "error" | "primary" | "success";
    onClick: () => void;
    label: string;
  }[] = [
    {
      color: "error",
      onClick: () => decrement(),
      label: "-1",
    },
    {
      color: "primary",
      onClick: () => handleFetch(`${uri}/${quotes}`),
      label: "Reset",
    },
    {
      color: "success",
      onClick: () => increment(),
      label: "+1",
    },
  ];

  useEffect(() => {
    if (!data) return;
    handleFetch(`${uri}/${quotes}`);
  }, [quotes]);

  return (
    <Container>
      <Title>Fetch Data</Title>
      <List className="w-max">
        {data &&
          !isLoading &&
          data.map(({ quote, author }) => (
            <Quote key={quote} quote={quote} author={author} />
          ))}
      </List>
      <div className="flex gap-4">
        {buttons.map(({ color, onClick, label }) => (
          <LoadingButton
            key={label}
            variant="contained"
            color={color}
            onClick={onClick}
            loading={isLoading}
          >
            {label}
          </LoadingButton>
        ))}
      </div>
    </Container>
  );
};
