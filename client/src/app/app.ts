import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Nav } from "../layout/nav/nav";

@Component({
  selector: 'app-root',
  imports: [Nav],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  
  private http = inject(HttpClient);
  protected  title = 'Dating App';
  protected members= signal<any>([]);

  async ngOnInit() {
    this.members.set(await this.getMembers());
  }

  async getMembers(){
    try {
      return lastValueFrom(this.http.get('https://localhost:5001/api/members'));
    }
    catch (error) {
      console.error('Error fetching members:', error);
      throw error; // Re-throw the error to handle it in the calling context
    }
  }

}
