import {Injectable} from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() {
  }

  getMockData(): MockData[] {
    return [
      <MockData>{
        id: 128,
        name: 'Baustelle Basel SBB',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
        imageUrl: 'src/resource/img/orm_basel_sbb.png'
      },
      <MockData>{
        id: 218,
        name: 'Baustelle Bregenz',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
        imageUrl: 'src/resource/img/orm_bregenz.png'
      },
      <MockData>{
        id: 378,
        name: 'Baustelle Passau Hbf',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
        imageUrl: 'src/resource/img/orm_passau_hbf.png'
      }
    ]
  }
}

export interface MockData {
  id: number;
  name: string;
  description: string;
  imageUrl?: string;
}
