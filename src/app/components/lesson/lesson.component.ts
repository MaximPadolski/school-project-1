import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { subtraction } from 'src/app/data/subtraction';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CardComponent,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    CommonModule
  ]
})
export class LessonComponent {
  private readonly mainService = inject(MainService);

  readonly data = this.mainService.shuffle(subtraction);
}
