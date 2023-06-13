import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  rotate = true;
 

  facilityData = {
    nodes: [
      {
        id: 'bos',
        name: 'BOS',
      },
      {
        id: 'ewr',
        name: 'EWR',
      },
      {
        id: 'bwi',
        name: 'BWI',
      },
      {
        id: 'cvg',
        name: 'CVG',
      },
      {
        id: 'atl',
        name: 'ATL',
      },
      {
        id: 'mco',
        name: 'MCO',
      },
      {
        id: 'dfw',
        name: 'DFW',
      },
      {
        id: 'ind',
        name: 'IND',
      },
      {
        id: 'ord',
        name: 'ORD',
      },
      {
        id: 'slc',
        name: 'SLC',
      },
      {
        id: 'rno',
        name: 'RNO',
      },
      {
        id: 'ont',
        name: 'ONT',
      },
    ],
    links: [
      {
        source: 'bos',
        target: 'ewr',
        value: 100000,
      },
      {
        source: 'ewr',
        target: 'bwi',
        value: 20000,
      },
      {
        source: 'ewr',
        target: 'cvg',
        value: 10000,
      },
      {
        source: 'ewr',
        target: 'atl',
        value: 30000,
      },
      {
        source: 'atl',
        target: 'mco',
        value: 5000,
      },
      {
        source: 'ewr',
        target: 'dfw',
        value: 10000,
      },
      {
        source: 'ewr',
        target: 'ind',
        value: 20000,
      },
      {
        source: 'ind',
        target: 'ord',
        value: 10000,
      },
      {
        source: 'ind',
        target: 'slc',
        value: 5000,
      },
      {
        source: 'ind',
        target: 'rno',
        value: 2000,
      },
       
    ],
  };
   
}
