import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostModalComponent } from './components/post-modal/post-modal.component';
 import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DisplayPageComponent } from './components/display-page/display-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent, 
     HeaderComponent,
    PostComponent,
    PostsComponent,
    PostModalComponent,
    DisplayPageComponent,
    MenuComponent,
    OverlayComponent,
    HomeComponent,
    GalleryComponent,
    AboutComponent 
  ],
    
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
