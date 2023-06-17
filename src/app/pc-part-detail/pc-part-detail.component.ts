import { Component, Input } from '@angular/core';
import { PCPart } from 'src/parts-data';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-pc-part-detail',
  templateUrl: './pc-part-detail.component.html',
  styleUrls: ['./pc-part-detail.component.css']
})
export class PcPartDetailComponent {
  @Input() part?: PCPart;
}
