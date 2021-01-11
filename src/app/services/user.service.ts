import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser} from '../interfaces';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL = 'http://localhost:8080/users';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(`${this.URL}`);
  }
  createUser(user: IUser):Observable<IUser>{
    return this.httpClient.post<IUser>(`${this.URL}`, user)
  }
}
