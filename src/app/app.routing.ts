import { HomeComponent } from './components/home/home.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'items',
        component: AddItemComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
       )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
