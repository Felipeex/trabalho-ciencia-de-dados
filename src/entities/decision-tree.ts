import { Leaf } from "./leaf";
import { Node, NodeProps } from "./node";
import { currentNode } from "./types";

export interface DecisionTreeProps {
  addCurrentNode(node: NodeProps): void;
  currentNodeFinished(): boolean;
  getCurrectNodeQuestion(): string | null;
  getCurrectNodeResponses(): string[] | null;
  move(response: string): void;
}

export class DecisionTree implements DecisionTreeProps {
  private currentNode: currentNode = null;

  constructor() {}

  addCurrentNode(node: NodeProps): void {
    this.currentNode = node;
  }

  currentNodeFinished() {
    if (this.currentNode instanceof Leaf) {
      return true;
    }

    return false;
  }

  getCurrectNodeQuestion() {
    if (this.currentNode instanceof Node) {
      return this.currentNode.question;
    }

    return null;
  }

  getCurrectNodeResponses() {
    if (this.currentNode instanceof Node) {
      const responses: string[] = [];

      this.currentNode.children.forEach((child) => {
        responses.push(child.response);
      });

      return responses;
    }

    return null;
  }

  move(response: string) {
    if (this.currentNode instanceof Node) {
      /* console.log(this.currentNode); */
      const child = this.currentNode.children.find((child) => {
        /* console.log(child.response, response); */
        return child.response === response;
      });

      if (child) {
        console.log(child.next);
        this.currentNode = child.next;

        return;
      }

      throw new Error("Essa resposta não é corresponde a nem um nó.");
    }

    throw new Error("Você está em uma folha, não é possivel navegar mais.");
  }
}
