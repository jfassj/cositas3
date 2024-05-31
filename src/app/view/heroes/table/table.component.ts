import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { PeriodicElement } from 'src/app/model/user';
import { UsuarioService } from 'src/app/service/usuario.service';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: PeriodicElement[] = [];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  data:PeriodicElement[]=[]
  constructor(private userService:UsuarioService){

  }
  ngOnInit(): void {
    this.getInfo();

  }

   getInfo(){
    this.dataSource=this.userService.getData();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
   // this.dataSource.paginator = this.paginator;

  }
}




