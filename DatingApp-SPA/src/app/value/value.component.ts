import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  // Declare variable for App.model

  values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  getValues()
  // tslint:disable-next-line:one-line
  {
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
    }, error => { console.log(error);
    }
    );
  }

}
