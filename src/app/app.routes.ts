import { Routes } from '@angular/router';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';
import { authGuard } from './shared/auth.guard';
import { LoginComponent } from './login/login.component';
import { StatisticsComponent } from './statistics/statistics.component';


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: AssignmentsComponent},
    {path: 'add', component: AddAssignmentComponent, canActivate: [authGuard]},
    {path: 'assignment/:id', component: AssignmentDetailComponent},
    {path: 'assignment/:id/edit', component: EditAssignmentComponent, canActivate: [authGuard]},
    {path: 'login', component: LoginComponent}, 
    { path: 'statistics', component: StatisticsComponent },
    { path: '**', redirectTo: '/home' }
];
