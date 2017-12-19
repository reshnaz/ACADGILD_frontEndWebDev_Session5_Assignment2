import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div id="login" class="container">
    <div class="row">
    <br><br><br>
      <div class="col-md-4">
      </div>
      <div class="form-group col-md-4" style="text-align:center">
        <h1>Session-5, Assignment-2</h1>
        <br>
        <input type="text" class="form-control" placeholder="First Name">
        <button class="btn btn-primary form-control">Login</button> 
      </div>
      <div class="col-md-4">
      </div>
    </div>
  </div>`,
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
