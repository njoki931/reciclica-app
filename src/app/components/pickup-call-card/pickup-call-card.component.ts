import { Component, Input, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular';
import { IonCardHeader, IonCard, IonCardSubtitle, IonItem, IonCardContent, IonLabel } from "@ionic/angular/standalone";
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
  imports:[IonicModule, CommonModule]
})
export class PickupCallCardComponent  implements OnInit {

  @Input() hasHeader! : boolean;
  @Input() hasFooter! : boolean;

  @Input () status! : string;
  @Input () updateAt! : string;
  @Input () createdAt! : string;
  @Input () notes! : string;
  @Input() value! : string
  constructor() { }

  ngOnInit() {}

}
