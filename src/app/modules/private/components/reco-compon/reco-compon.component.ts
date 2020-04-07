import { Component, OnInit, } from '@angular/core';
import { IRecomm } from '../../model/recomm.model';
import { ShareDataServiceService } from '../../../../sharedModule/share-data-service.service';
import { GetmatchdataService } from '../../services/getmatchdata.service';




@Component({
  selector: 'app-reco-compon',
  templateUrl: './reco-compon.component.html',
  styleUrls: ['./reco-compon.component.css']
})
export class RecoComponComponent implements OnInit {
  show: boolean = false;

  recommendation: IRecomm[] = [];
  constructor(private _matchService: GetmatchdataService, private _shareService: ShareDataServiceService) { }

  ngOnInit() {


    this.recommendation = [...this._shareService.getData()];
    console.log(this.recommendation);
    this.show = true;
  }

  getDate(name: string) {
    return (new Date(name).getDate().toString() + '-' + new Date(name).getMonth().toString() + '-' + new Date(name).getFullYear().toString()).toString()
  }
  addToFavourites(match: any) {
    this._matchService.addToFavourites(match).subscribe((data: any) => {
      console.log(data);
    })
  }



}
