import { LeafProps } from "./leaf";
import { NodeProps } from "./node";

export type currentNode = NodeProps | LeafProps | null;

export type Child = {
  response: string;
  next: NodeProps | LeafProps;
};
