export const ROUTING_TREE: IRoutingTree = {
  login: {
    path: 'login'
  },
  search: {
    path: 'search'
  }
};

export interface IRoutingTree {
  readonly [key: string]: IRoutingBranch;
}

export interface IRoutingBranch {
  readonly path: string;
}
