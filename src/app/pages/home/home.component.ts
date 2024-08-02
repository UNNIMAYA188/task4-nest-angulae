import { Component } from '@angular/core';
import { CoroselComponent } from '../../unit/corosel/corosel.component';
import { AccordianComponent } from '../../unit/accordian/accordian.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CoroselComponent,AccordianComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
