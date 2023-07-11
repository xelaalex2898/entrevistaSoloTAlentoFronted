import { inject } from '@angular/core';
import { CanActivateFn,Router  } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = sessionStorage.getItem('auth-user');
  if (!token) {
    const router: Router = inject(Router);
    router.navigate(['']);
  }
  return true;
  
};

