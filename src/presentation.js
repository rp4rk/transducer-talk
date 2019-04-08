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
import {
  mapDeclarativeExample,
  mapImperativeExample
} from "./examples/mfrExample";
import {
  mapReducerExample,
  filterReducerExample,
  combinerLogic
} from "./examples/operationsAsReduce";
import {
  mapPerformanceBad,
  mapPerformanceGood
} from "./examples/mapPerformanceExample";
import { combineAll } from "rxjs/operators";
import { singleValueExample } from "./examples/singleValueExample";
import { WebsocketList } from "./components/websocket";

// Require CSS
require("normalize.css");

const theme = createTheme(THEME.COLOR, THEME.FONT);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        contentHeight="80%"
        contentWidth="80%"
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
          <Heading size={6} fit textColor="secondary" caps>
            Declarative and Imperative Approaches
          </Heading>
          <Appear>
            <Text>
              Declarative code relies on abstractions to describe operations.
            </Text>
          </Appear>
          <Appear>
            <Text>
              Imperative code provides the computer instructions on how to do
              something.
            </Text>
          </Appear>
          <Appear>
            <Text>
              It's commonly said that declarative programming describes what to
              do, whereas imperative programming describes how to do it.
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Benchmarker showDetails source={mapImperativeExample} />
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Benchmarker showDetails source={mapDeclarativeExample} />
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Reducers
          </Heading>
          <Text textColor="quaternary">(result, input) => result</Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Redux
          </Heading>
          <Text textColor="quaternary">(state, action) => newState</Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Map Reduce
          </Heading>
          <Benchmarker showDetails source={mapReducerExample} />
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Filter Reduce
          </Heading>
          <Benchmarker showDetails source={filterReducerExample} />
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Separating the Combiner
          </Heading>
          <Benchmarker showDetails source={combinerLogic} />
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Transducers
          </Heading>

          <Appear>
            <Text textColor="quaternary">reducer => reducer</Text>
          </Appear>
          <Appear>
            <Text textColor="quaternary">
              ((result, input) => result) => ((result, input) => result)
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Why Transducers?
          </Heading>
          <Benchmarker
            showDetails
            source={mapPerformanceBad}
            globals={{
              BIG_ARRAY: Array(10000000).fill()
            }}
          />
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Performance <em>AND</em> Composability
          </Heading>
          <Benchmarker
            showDetails
            source={mapPerformanceGood}
            globals={{
              BIG_ARRAY: Array(10000000).fill()
            }}
          />
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Operating on Single Values
          </Heading>
          <Benchmarker showDetails source={singleValueExample} />
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="tertiary">
          <WebsocketList />
        </Slide>
      </Deck>
    );
  }
}
