import { NgModule } from "@angular/core";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LoadingScreenComponent } from "./components/loading-screen/loading-screen.component";
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { MainLayoutComponent } from "./components/main-layout/main-layout.component";
import { SidebarPanelComponent } from "./components/sidebar-panel/sidebar-panel.component";

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    LayoutComponent,
    LoadingScreenComponent,
    SideNavComponent,
    MainLayoutComponent,
    SidebarPanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    LayoutComponent,
    LoadingScreenComponent,
    SideNavComponent,
    MainLayoutComponent,
    SidebarPanelComponent
  ],
  providers: []
})

export class SharedModule{

}
