import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PcPartService } from '../pc-part.service';
import { PCPart } from 'src/parts-data';
import {Sort, MatSortModule} from '@angular/material/sort';


@Component({
  selector: 'app-pc-parts',
  templateUrl: './pc-parts.component.html',
  styleUrls: ['./pc-parts.component.css']
})
export class PcPartsComponent {

  pcParts: PCPart[] = [];

  selectedPart?: PCPart;

  constructor(
    private pcPartService: PcPartService) { }

  ngOnInit(): void {
    this.pcParts = this.pcPartService.getParts();
  }

  onSelect(part: PCPart): void {
    this.selectedPart = part;
  }

  sortData(sort: Sort) {
    const data = this.pcParts.slice();
    if (!sort.active || sort.direction === "") {
      this.pcParts = data;
      return;
    }
    this.pcParts = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case "name":
          return this.compare(a.name, b.name, isAsc);
        case "type":
          return this.compare(a.name, b.name, isAsc);
        case "brand":
          return this.compare(a.name, b.name, isAsc);
        default:
          return 0;
      }
    })
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
} 
