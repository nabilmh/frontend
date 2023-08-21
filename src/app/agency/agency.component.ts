import { Component, OnInit } from '@angular/core';
import { AgencyService } from '../services/agency.service';
import { Router } from '@angular/router';
import { Agency } from '../agency.model';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss']
})
export class AgencyComponent implements OnInit{

  agencies: Agency[] | undefined;

  constructor(private userService: AgencyService, private router: Router){}

  ngOnInit(): void {
    this.getAgency()
  }

  private getAgency() {
    this.userService.getAgencyList().subscribe(data => {
      this.agencies = data;
    });
  }

}

