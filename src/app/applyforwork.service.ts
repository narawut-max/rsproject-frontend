import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
// const endpoint = environment.apiEndPoint;

let headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
});

@Injectable({
  providedIn: 'root'
})
export class ApplyforworkService {

  constructor(
    private http: HttpClient,
    ) { }

  getRecomment(text: any): Observable<any> {
    return this.http.get('https://rsproj.tarad.ai/bert?text=' + text);
  }

  // ******** upload ************
  upload(file: File): Observable<any> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', 'https://api.iapp.co.th/document-ocr/ocr', formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  uploadFile(file: any): Observable<any> {
    var from = new FormData();
    from.append('file', file);
    return this.http.post<any>('https://api.iapp.co.th/document-ocr/ocr', from)
  }

}
