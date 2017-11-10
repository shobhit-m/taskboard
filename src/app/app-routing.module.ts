import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { PageNotFoundComponent } from './shared/components/page-not-found.component';
import { TaskboardComponent } from './taskboard/components/taskboard.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/taskboard', pathMatch: 'full' },
  { path: 'taskboard',   component: TaskboardComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
