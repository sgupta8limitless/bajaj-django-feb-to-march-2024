import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  let router = inject(Router)

  if(sessionStorage.getItem("dietToken")==null)
    {
        router.navigate(["login"])
    }
  
  return true;
};
