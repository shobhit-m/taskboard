import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }  from '@angular/router';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatTableModule, MatCardModule, MatGridListModule,
  MatTooltipModule, MatDialogModule, MatInputModule, MatSidenavModule, MatExpansionModule, MatChipsModule, MatAutocompleteModule} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/header.component';
import { ContentComponent } from './components/content.component';
import { NavigationBarComponent } from './components/navigation-bar.component';
import { SideNavComponent } from './components/side-nav.component';
import { PageNotFoundComponent } from './components/page-not-found.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ContentComponent,
    NavigationBarComponent,
    SideNavComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule,MatTableModule, MatCardModule,MatGridListModule,MatTooltipModule, MatDialogModule, MatInputModule,MatSidenavModule,MatExpansionModule, MatChipsModule,MatAutocompleteModule,
    BrowserAnimationsModule
  ],
  providers: [
  ],
  exports: [
    HeaderComponent,
    ContentComponent,
    NavigationBarComponent,SideNavComponent,
    PageNotFoundComponent,
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatTableModule, MatCardModule, MatGridListModule,MatTooltipModule, MatDialogModule, MatInputModule,MatSidenavModule,MatExpansionModule, MatChipsModule,MatAutocompleteModule,
    BrowserAnimationsModule
  ]
})
export class SharedModule { }
