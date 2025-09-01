import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterCreds, User } from '../../../shared/types/user';
import { AccountService } from '../../../core/services/account-service';

@Component({
  selector: 'app-regsister',
  imports: [FormsModule],
  templateUrl: './regsister.html',
  styleUrl: './regsister.css'
})
export class Regsister {
  private accountService=inject(AccountService);
  cancelRegister = output<boolean>();
  protected creds={} as RegisterCreds;

  register(): void {
    this.accountService.register(this.creds).subscribe({
      next:response=>{
        console.log(response);
        this.cancel();
      },
      error:error=>{
        console.log(error);
      }
    });
  }

  cancel(): void {
    this.cancelRegister.emit(false);
  }
}
