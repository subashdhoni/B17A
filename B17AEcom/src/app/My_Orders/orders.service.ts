import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {


  constructor(private http:HttpClient) {  }

  getMyOrder(){
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')

  .set('Authorization', 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdWJhc2giLCJ1c2VyaWQiOiI0MDMiLCJ1c2VyVHlwZUlkIjoiMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IjIiLCJqdGkiOiJjNDRjMGUxNC05ZTFjLTRiMzYtODYwZi0xYjA2OTI5MDM4NDkiLCJleHAiOjE2NDIxMjc2ODksImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyJ9.4SoNzrAfGtUETrg4OycEhpPUYGaiF3ld_tH-fCiIJqE");
    let url="https://bookcart.azurewebsites.net/api/Order/403";

    // .set('Authorization', 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJib3NzIiwidXNlcmlkIjoiNDA2IiwidXNlclR5cGVJZCI6IjIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiIyIiwianRpIjoiZTJkZTRmODYtZDA5YS00N2U3LThmZjgtODU1NjMxZjMwNWNmIiwiZXhwIjoxNjQyMTI3OTQ1LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDM2NC8iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo0NDM2NC8ifQ.7fvzcDwnL7z_FIU6N2isdvcCZC6_vvdWOxcpoyqZjZo");
    // let url="https://bookcart.azurewebsites.net/api/Order/406";

    return this.http.get ( url , { 'headers': headers })
  }

  
}
//subash-403 //orders placed

//boss-406  //no orders placed
