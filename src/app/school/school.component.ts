import { Component } from '@angular/core';
@Component({
    template: `<h2>Welcome to School Home</h2>
    <nav [ngClass] = "'child-menu'">
      <ul>
		<li><a [routerLink]="['list']" routerLinkActive="active">School List xx</a></li>
      </ul>  
	</nav>  
	<h1>kk</h1>
  `
}) 
export class SchoolComponent {
}
     