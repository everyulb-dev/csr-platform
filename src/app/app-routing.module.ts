import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';


const appRoutes: Routes = [
  { path: '',   redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    //   { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}