import { AreaType, VentilationPump } from './Models/ventilation';
export const ventilationPumps: VentilationPump[] = [
  {
    status: true,
    number: '2020',
    area: AreaType.B,
  },
  {
    status: true,
    number: '1010',
    area: AreaType.B,
  },
  {
    status: true,
    number: '1400',
    area: AreaType.C,
  },
  {
    status: false,
    number: '2014',
    area: AreaType.A,
  },
];
