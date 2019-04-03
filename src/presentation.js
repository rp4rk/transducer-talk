// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  CodePane
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import { Benchmarker } from "./components/benchmarker";
import { THEME } from "./constants/theme";
import { mapExample } from "./examples/mfr-example";
import { stringifyFunction } from "./util/dispatch";

// Require CSS
require("normalize.css");

const theme = createTheme(THEME.COLOR, THEME.FONT);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        contentHeight='80%'
        contentWidth='80%'
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Transducers
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            🤷‍♀️🤷‍♂
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary">
          <BlockQuote>
            <Quote>[...] premature optimization is the root of all evil.</Quote>
            <Cite textColor="quaternary">Donald Knuth</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            Maps, Filters, Reduces
          </Heading>
          <Appear>
            <Text>Maps are a 1:1 transform of a list</Text>
          </Appear>
          <Appear>
            <Text>
              Filters pick items out of a list depending on your condition
            </Text>
          </Appear>
          <Appear>
            <Text>
              Reduce is the nuclear option and can do anything you want if you
              believe in yourself
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Benchmarker
            showDetails
            source={stringifyFunction(mapExample)}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
