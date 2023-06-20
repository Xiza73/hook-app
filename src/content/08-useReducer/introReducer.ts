console.log("08-useReducer");

type Quote = {
  id: number;
  quote: string;
  author: string;
  isActive: boolean;
};

const initialState: Quote[] = [
  {
    id: 1,
    quote: "Yo soy inevitable",
    author: "Thanos",
    isActive: true,
  },
  {
    id: 2,
    quote: "Yo soy Ironman",
    author: "Tony Stark",
    isActive: false,
  },
];

export const QuoteActions = {
  ADD: "addQuote",
  DELETE: "deleteQuote",
  TOGGLE: "toggleQuote",
} as const;

type QuoteActionType = (typeof QuoteActions)[keyof typeof QuoteActions];

type QuoteActionPayloadRecord = {
  [QuoteActions.ADD]: Quote;
  [QuoteActions.DELETE]: number;
  [QuoteActions.TOGGLE]: number;
};

type QuoteActionPayload =
  QuoteActionPayloadRecord[keyof QuoteActionPayloadRecord];

interface QuoteAction {
  type: QuoteActionType;
  payload?: QuoteActionPayload;
}

const quoteActions: {
  [key in QuoteActionType]: (
    state: Quote[],
    payload?: QuoteActionPayload
  ) => Quote[];
} = {
  [QuoteActions.ADD]: (state, payload) => [...state, payload as Quote],
  [QuoteActions.DELETE]: (state, payload) =>
    state.filter((quote: Quote) => quote.id !== payload),
  [QuoteActions.TOGGLE]: (state, payload) =>
    state.map((quote: Quote) =>
      quote.id === payload ? { ...quote, isActive: !quote.isActive } : quote
    ),
};

const quoteReducer = (state: Quote[] = initialState, action?: QuoteAction) =>
  action ? quoteActions[action.type](state, action.payload) : state;

let quotes = quoteReducer(initialState);
console.log(quotes);

const newQuote: Quote = {
  id: 3,
  quote: "Yo soy tu padre",
  author: "Darth Vader",
  isActive: true,
};

quotes = quoteReducer(quotes, { type: QuoteActions.ADD, payload: newQuote });

console.log(quotes);

quotes = quoteReducer(quotes, {
  type: QuoteActions.TOGGLE,
  payload: newQuote.id,
});

console.log(quotes);

quotes = quoteReducer(quotes, {
  type: QuoteActions.DELETE,
  payload: newQuote.id,
});

console.log(quotes);
