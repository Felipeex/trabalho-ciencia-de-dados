import { Child } from "./types";

export interface NodeProps {
  children: Child[];

  addChild(child: Child): void;
}

export class Node implements NodeProps {
  children: Child[] = [];
  question: string;

  constructor(question: string) {
    this.question = question;
  }

  addChild(child: Child) {
    this.children.push(child);
  }
}
