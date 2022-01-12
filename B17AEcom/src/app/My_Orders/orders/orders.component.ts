import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdersService } from '../orders.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Data } from 'src/data';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {



displayedColumns: string[] = ['id', 'date', 'total'];

dataSource =  new MatTableDataSource<Data>();

loadData: boolean | undefined;


  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

constructor( private orderService:OrdersService) {  }


   
ngOnInit(): void {
  
    this.loadData=false;
    this.getMyOrders();
    this.dataSource.paginator = this.paginator;
    
  }
  
getMyOrders(){
  
    this.orderService. getMyOrder().subscribe((report:any)=>{
      if (report != null){
      this.dataSource.data=report as Data[]
      this.loadData=true;
    }},
    error=>{
      console.log('Error Occured while fetching the My Order Details:',error);
    })
   }

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}
   
}


