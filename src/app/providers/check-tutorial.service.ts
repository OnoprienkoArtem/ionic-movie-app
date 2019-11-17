import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Injectable({
    providedIn: 'root'
})
export class CheckTutorial implements CanLoad {
    constructor(private storage: Storage, private router: Router) {}

<<<<<<< HEAD
    canLoad() {
        return this.storage.get('ion_did_tutorial').then(res => {
            if (res) {
                this.router.navigate(['/app', 'tabs', 'movie']);
                return false;
            } else {
                return true;
            }
        });
    }
=======
  canLoad() {
    return this.storage.get('ion_did_tutorial').then(res => {
      if (res) {
        this.router.navigate(['/app', 'tabs', 'movies']);
        return false;
      } else {
        return true;
      }
    });
  }
>>>>>>> b6c4a4b9d83b8fdc086b5999411adc835e136715
}
