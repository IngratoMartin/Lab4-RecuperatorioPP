import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private htppClient:HttpClient) { }

  get(url)
  {
    return this.htppClient.get(url);
  }

  post(url, body)
  {
    return this.htppClient.post(url, { body });
  }

  put(url, body)
  {
    return this.htppClient.post(url, { body });
  }

  delete(url)
  {
    return this.htppClient.delete(url);
  }
}
