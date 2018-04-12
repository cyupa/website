import "jest";

interface GatsbyGlobal {
  ___loader?: {
    enqueue: (name: string) => void;
  };
}

(global as GatsbyGlobal).___loader = {
  enqueue: jest.fn()
};
