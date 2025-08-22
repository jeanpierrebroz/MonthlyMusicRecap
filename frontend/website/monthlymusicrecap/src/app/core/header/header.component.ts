import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-header',
  imports: [MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

    constructor(private router: Router){ }
    
    onPremiumClicked(){
        this.router.navigate(["/gopremium"]);
    }
}
