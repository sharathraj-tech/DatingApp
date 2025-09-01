import { Component, Input, signal } from '@angular/core';
import { Regsister } from "../account/regsister/regsister";
import { User } from '../../shared/types/user';

@Component({
  selector: 'app-home',
  imports: [Regsister],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  protected registerMode=signal(false);

  showRegister(value:boolean){
    this.registerMode.set(value);
  }
}
