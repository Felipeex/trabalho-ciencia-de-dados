import { DecisionTree } from "@/entities/decision-tree";
import { Node } from "@/entities/node";
import { Leaf } from "@/entities/leaf";

export function useDecisionTree(): DecisionTree {
  const tree = new DecisionTree();

  // Nós de moradia
  const housingTypeUnderDays = createHousingNode();
  const housingTypeOverDays = createHousingNode();

  const employedDaysNode = setupEmployedDaysNode(
    housingTypeUnderDays,
    housingTypeOverDays
  );

  const isEmployedNode = setupIsEmployedNode(
    employedDaysNode,
    housingTypeUnderDays
  );

  tree.addCurrentNode(isEmployedNode);

  return tree;
}

function createHousingNode(): Node {
  const housing = new Node("Qual é o seu tipo de moradia?");

  housing.addChild({
    response: "Aluguel",
    next: new Leaf(false),
  });

  housing.addChild({
    response: "Casa ou apartamento próprio",
    next: housing,
  });

  housing.addChild({
    response: "Apartamento Compartilhado",
    next: new Leaf(false),
  });

  housing.addChild({
    response: "Apartamento Municipal",
    next: housing,
  });

  housing.addChild({
    response: "Apartamento Comercial",
    next: housing,
  });

  housing.addChild({
    response: "Com os pais",
    next: new Leaf(false),
  });

  return housing;
}

function setupEmployedDaysNode(
  housingTypeUnderDays: Node,
  housingTypeOverDays: Node
): Node {
  const employedDays = new Node(
    "Há quanto tempo você está ou esteve empregado na sua função atual?"
  );

  employedDays.addChild({
    response: "Menos de 300 Dias",
    next: housingTypeUnderDays,
  });

  employedDays.addChild({
    response: "Entre de 500 e 1000 Dias",
    next: housingTypeUnderDays,
  });

  employedDays.addChild({
    response: "Mais de 1450 Dias",
    next: housingTypeOverDays,
  });

  return employedDays;
}

function setupIsEmployedNode(employedNode: Node, housingNode: Node): Node {
  const isEmployed = new Node("Você está empregado ou esteve recentemente?");

  isEmployed.addChild({ response: "Sim", next: employedNode });
  isEmployed.addChild({ response: "Não", next: housingNode });

  return isEmployed;
}
