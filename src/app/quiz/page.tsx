"use client";

import { useDecisionTree } from "@/hooks/use-decision-tree";
import React from "react";

export default function Quiz() {
  const tree = useDecisionTree();
  const [currentQuestion, setCurrentQuestion] = React.useState(
    tree.getCurrectNodeQuestion()
  );
  const [responses, setResponses] = React.useState(
    tree.getCurrectNodeResponses()
  );

  function handleChooseAnswer(answer: string) {
    tree.move(answer);
    console.log(tree);
    setCurrentQuestion(tree.getCurrectNodeQuestion());
    setResponses(tree.getCurrectNodeResponses());
  }

  return (
    <>
      <h1>{currentQuestion}</h1>

      {responses?.map((response, key) => (
        <h2 key={key} onClick={() => handleChooseAnswer(response)}>
          {response}
        </h2>
      ))}
    </>
  );
}
