import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { AuthGuard } from './core/auth.guard';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'items',
        component: AddItemComponent,
    },
    {
        path: 'users',
        component: UserProfileComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        component: PagenotfoundComponent
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
