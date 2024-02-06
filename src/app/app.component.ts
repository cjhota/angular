import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterModule,
  ],
  template: `
  <main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
        <!-- <a href="/" class="brand-logo" aria-hidden="true">
        <span class="material-symbols-outlined">
real_estate_agent
</span>
        Corretora devops!</a> -->
        <div class="group-contact">
          <a href="#">Sobre nós</a>
          <a href="#">Contato</a>
        </div>
      </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Corretora devops';
}
