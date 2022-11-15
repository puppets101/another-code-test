export type VentilationPump = {
  id: string;
  number: string;
  area: AreaType;
  status: boolean;
};

export type OverviewFilter = {
  number: string;
  area: AreaType;
  status: boolean | null;
};

export enum AreaType {
  ALL = '',
  A = 'A',
  B = 'B',
  C = 'C',
}

export type StatusType = {
  status: boolean | null;
};
