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
  NO_FILTER = '',
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
}

export type StatusType = {
  status: boolean | null;
};
