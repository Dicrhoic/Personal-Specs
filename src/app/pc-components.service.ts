import { Injectable } from '@angular/core';
import { PCPart } from 'src/parts-data';
import { PARTS } from 'src/parts-data';

@Injectable({
  providedIn: 'root'
})
export class PcComponentsService {

  constructor() { }

  getParts(): PCPart[]{
    return PARTS;
  }
  
}
