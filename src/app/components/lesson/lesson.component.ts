import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardComponent, MatIconModule, MatButtonModule, RouterModule]
})
export class LessonComponent {

}
