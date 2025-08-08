import { Component, input, Input } from '@angular/core';
import { SidebarItemCourse } from '../../../../core/domain/interfaces/sidebar-item-course.interface';
import { UpperCasePipe, DatePipe} from '@angular/common';
@Component({
  selector: 'sidebar-course-item',
  imports: [UpperCasePipe,DatePipe],
  templateUrl: './sidebar-course-item.component.html',
  styleUrl: './sidebar-course-item.component.scss'
})
export class SidebarCourseItemComponent {
  itemCourse = input.required<SidebarItemCourse>();
}
