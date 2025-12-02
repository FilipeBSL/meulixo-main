import { NgFor, AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CollectionsServiceService } from '../services/collections-service.service';
import { Collect } from '../interfaces/collect';

@Component({
  selector: 'app-collections-info',
  standalone: true,
  imports: [MatCardModule, NgFor],
  templateUrl: './collections-info.component.html',
  styleUrl: './collections-info.component.css'
})
export class CollectionsInfoComponent {
  collections: Collect[] = [];

  constructor(private collectionservice: CollectionsServiceService) {}

  ngOnInit(): void {
    this.collectionservice.getCollections().subscribe({
      next: data => this.collections = data,
      error: err => console.error('Erro ao carregar collections:', err)
    });
  }
}
