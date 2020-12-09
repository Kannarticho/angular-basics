import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes.component';

@NgModule({
    declarations: [HeroesComponent],
    exports: [HeroesComponent],
    imports: [CommonModule, FormsModule]
  })
  export class HeroesComponentModule {}