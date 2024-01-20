import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-panel',
  standalone: false,
  templateUrl: 'sidebar-panel.component.html',
  styleUrls: ['./sidebar-panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarPanelComponent { }
