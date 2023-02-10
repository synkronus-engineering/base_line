import info from "./info";

export type TypeEndpoint = { [s:string]:any};

export const handlers: TypeEndpoint['handlers'] = {
  info,
}

export default handlers
