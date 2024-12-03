export interface LeafProps {
  binaryResponse: boolean;
  getResponse(): boolean;
}

export class Leaf implements LeafProps {
  binaryResponse: boolean;

  constructor(response: boolean) {
    this.binaryResponse = response;
  }

  getResponse() {
    return this.binaryResponse;
  }
}
