import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      { path: '', redirectTo: 'msg', pathMatch: 'full' },
      { path: 'msg', loadChildren: '../pages/message/message.module#MessagePageModule' },
      { path: 'kandian', loadChildren: '../pages/kanban/kanban.module#KanbanPageModule' },
      { path: 'new', loadChildren: '../pages/new/new.module#NewPageModule' },
      { path: 'tool', loadChildren: '../pages/tool/tool.module#ToolPageModule' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
