import React, { useState } from "react";
import AceEditor from "react-ace";
import "brace/mode/javascript";
import "brace/theme/github";

import { dispatchCodeToThread } from "../../util/dispatch";
import {
  BenchmarkContainer,
  DetailsPane,
  StyledMs,
  StyledCode,
  RocketSpan
} from "./styled";
import { StyledButton } from "../common/button";

export function Benchmarker({ globals, source, showDetails, showResult }) {
  const [code, setCode] = useState(source);
  const [loading, setLoading] = useState(false);
  const [duration, setDuration] = useState(false);
  const [error, setError] = useState(false);
  const [result, setResult] = useState(false);

  async function executeBenchmark() {
    if (loading) return;
    setLoading(true);

    try {
      const { duration, result } = await dispatchCodeToThread(code, globals);
      setError(false);
      setResult(result);
      setDuration(duration);
    } catch (error) {
      setError(error.toString());
    }
    setLoading(false);
  }

  return (
    <BenchmarkContainer showDetails={showDetails}>
      <AceEditor
        style={{ width: "100%" }}
        theme="github"
        mode="javascript"
        onChange={v => setCode(v)}
        value={code}
        fontSize={18}
        tabSize={2}
        editorProps={{$blockScrolling: true}}
      />

      {showDetails && (
        <DetailsPane>
          {!showResult && <StyledCode>{error ? JSON.stringify(error) : JSON.stringify(result, ' ', 2)}</StyledCode>}
          {duration !== false && (
            <StyledMs duration={duration}>{duration}ms</StyledMs>
          )}
          <StyledButton disabled={loading} onClick={executeBenchmark}>
            Run{" "}
            <RocketSpan loading={loading} role="img" aria-label="rocket">
              🚀
            </RocketSpan>
          </StyledButton>
        </DetailsPane>
      )}
    </BenchmarkContainer>
  );
}
