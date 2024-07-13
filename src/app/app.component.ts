import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  @ViewChild('myModal') model: ElementRef | undefined;
  taskList: any[] = [];
  filteredTasks: any[] = [];
  taskForm!: FormGroup;
  editMode: boolean = false;

  filterPriority: string = '';
  filterStatus: string = '';

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      id: [''],
      title: [''],
      description: [''],
      Priority: [''],
      status: [''],
      dueDate: ['']
    });
  }

  ngOnInit() {
    const isLocal = localStorage.getItem('taskManager');
    if (isLocal) {
      this.taskList = JSON.parse(isLocal);
    }
    this.applyFilter();
  }

  openModel(index?: number) {
    if (index != null) {
      this.taskForm.patchValue(this.taskList[index]);
      this.editMode = true;
    } else {
      this.editMode = false;
    }
    const model = document.getElementById('myModal');
    if (model != null) {
      model.style.display = 'block';
    }
  }

  closeModel() {
    if (this.model != null) {
      this.model.nativeElement.style.display = 'none';
    }
  }

  onDelete(item: Task) {
    const isDel = confirm('Are you sure you want to delete?');
    if (isDel) {
      const index = this.taskList.indexOf(item);
      if (index > -1) {
        this.taskList.splice(index, 1);
        localStorage.setItem('taskManager', JSON.stringify(this.taskList));
        this.applyFilter();
      }
    }
  }

  updateTask() {
    const currentTask = this.taskForm.get('id')?.value;
    this.taskList[currentTask] = this.taskForm.value;
    localStorage.setItem('taskManager', JSON.stringify(this.taskList));
    this.closeModel();
    this.applyFilter();
  }

  saveTask() {
    this.taskForm.value.id = this.taskList.length;
    const taskData: Task = this.taskForm.value;
    this.taskList.push(taskData);
    localStorage.setItem('taskManager', JSON.stringify(this.taskList));
    this.closeModel();
    this.taskForm.reset();
    this.applyFilter();
  }

  applyFilter() {
    this.filteredTasks = this.taskList.filter(task => {
      const matchesPriority = this.filterPriority === '' || task.Priority === this.filterPriority;
      const matchesStatus = this.filterStatus === '' || task.status === this.filterStatus;
      return matchesPriority && matchesStatus;
    });
  }
}

export interface Task {
  id: number;
  title: string;
  description: string;
  Priority: string;
  dueDate: string;
  status: string;
}
