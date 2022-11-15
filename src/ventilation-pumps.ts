import { AreaType, VentilationPump } from './Models/ventilation';
export const ventilationPumps: VentilationPump[] = [
  {
    id: '1',
    status: true,
    number: '2020',
    area: AreaType.B,
  },
  {
    id: '2',
    status: true,
    number: '1010',
    area: AreaType.B,
  },
  {
    id: '3',
    status: true,
    number: '1400',
    area: AreaType.C,
  },
  {
    id: '4',
    status: false,
    number: '2014',
    area: AreaType.A,
  },
];
