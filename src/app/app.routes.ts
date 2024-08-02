import { Routes } from '@angular/router';
import { DepartmentComponent } from './pages/department/department.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
export const routes: Routes = [
    {path:"department",component:DepartmentComponent},
    {path:"",component:HomeComponent},
    {path:"contactus",component:ContactusComponent},
    
];
