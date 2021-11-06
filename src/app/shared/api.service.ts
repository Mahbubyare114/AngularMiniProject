import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  /* this function is to get AllUsers */
getAllUsers_API():Promise<any> {
  return new Promise<any>((resolve, reject) => {
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .toPromise()
      .then(result => {
        if (result) {
          resolve(result);
        }
      }).catch(err => {
        reject(err)
      });
  });
}


  /* this function is to get Single User Posts */
  getSingleUserPosts_API(id: number):Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.get('https://jsonplaceholder.typicode.com/users/' +id + '/posts' )
        .toPromise()
        .then(result => {
          if (result) {
            resolve(result);
          }
        }).catch(err => {
          reject(err)
        });
    });
  }

}
