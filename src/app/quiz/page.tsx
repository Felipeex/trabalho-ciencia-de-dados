"use client";

import { useDecisionTree } from "@/hooks/use-decision-tree";
import React from "react";

export default function Quiz() {
  const [tree] = useDecisionTree();

  if (tree.currentNodeFinished()) {
    return <h1>finalizado.</h1>;
  }

  function handleChooseAnswer(answer: string) {
    tree.move(answer);
  }

  return (
    <>
      <h1>{tree.getCurrectNodeQuestion()}</h1>

      {tree.getCurrectNodeResponses()?.map((response, key) => (
        <h2 key={key} onClick={() => handleChooseAnswer(response)}>
          {response}
        </h2>
      ))}
    </>
  );
}
