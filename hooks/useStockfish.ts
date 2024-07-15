import { useEffect, useState, useRef, useCallback } from "react";

const useStockfish = () => {
  const [evaluation, setEvaluation] = useState(0);
  const [bestMove, setBestMove] = useState("");

  console.log("STOCKFISH BEST MOVE: " + bestMove);
  const workerRef = useRef<Worker | null>(null);
  function normalizeChessScore(scoreCp: number) {
    const MAX_CP = 300; // Maximum cp for normalization
    const MIN_CP = -300; // Minimum cp for normalization

    if (scoreCp > MAX_CP) {
      return 100;
    } else if (scoreCp < MIN_CP) {
      return -100;
    } else {
      return (scoreCp / MAX_CP) * 100;
    }
  }

  //input: stockfish event data
  //output: void - updates score and best move
  const parseStockfishOutput = (data: string) => {
    // Adjusted regex to capture both positive and negative scores
    const scoreMatch = data.match(/score cp (-?\d+)/);
    if (scoreMatch) {
      let stockfishScore = parseInt(scoreMatch[1], 10);
      let normalizedScore = normalizeChessScore(stockfishScore);
      setEvaluation(normalizedScore);
    }
    // Updated regex to capture the entire move sequence following 'pv'
    const moveMatch = data.match(/pv ([a-h1-8]+[a-h1-8]+(?:[qrbn])?)/);
    if (moveMatch) {
      setBestMove(moveMatch[1]);
    }
  };

  useEffect(() => {
    workerRef.current = new Worker("/workers/stockfish-nnue-16-single.js");
    workerRef.current.onmessage = (event) => {
      //console.log(event);
      parseStockfishOutput(event.data);
    };

    workerRef.current.postMessage("uci");

    return () => workerRef.current?.terminate();
  });

  const sendCommand = useCallback((command: string) => {
    workerRef.current?.postMessage(command);
  }, []);

  return { evaluation, bestMove, sendCommand };
};

export default useStockfish;
