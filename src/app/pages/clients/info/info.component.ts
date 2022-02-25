import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  color="table-danger ";
  navigateinfo: NavigationExtras = {
    state: {
      value: null,
    }
  };
  
  cliente: any;
  constructor(private router: Router) {
    const navigate = this.router.getCurrentNavigation();

    this.cliente = navigate?.extras?.state;
  }

  ngOnInit(): void {
    if(typeof this.cliente === 'undefined'){
      this.router.navigate(['list']);
    }
  
  }

  onSave():void{
    console.log('save');
    this.router.navigate(['info'], this.navigateinfo);
    
  }
  onInfo(): void{
    this.navigateinfo.state = this.cliente;
    this.router.navigate(['info'], this.navigateinfo);
  }
  onEditClinet():void{
    this.navigateinfo.state = this.cliente;
    this.router.navigate(['editC'], this.navigateinfo);
  }

}


/* success
danger
warning
info */