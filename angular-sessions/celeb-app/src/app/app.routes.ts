import { Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { CelebsComponent } from './pages/celebs/celebs.component';

export const routes: Routes = [
    {path:"",component:SearchComponent},
    {path:"celebs/:name",component:CelebsComponent}
];
