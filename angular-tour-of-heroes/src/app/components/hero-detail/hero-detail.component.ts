import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/services/hero/hero.service';
import { Hero } from '../../interfaces/hero';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}
  @Input() hero: Hero;

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if(id !== null) {
      this.heroService.getHero(+id)
      .subscribe((hero: Hero | undefined) => {
        if(hero === undefined) {
          return;
        }
        return this.hero = hero
      });
    }
  }

  goBack(): void {
    this.location.back();
  }
}