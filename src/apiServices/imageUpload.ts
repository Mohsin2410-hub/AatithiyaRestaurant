import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { token, url } from './globals';

const uploadRoute = "/api/Image/InsertImage"
const getByCategoryRoute = "/api/Image/GetImageByCategoryId"

const httpHeaders: HttpHeaders = new HttpHeaders({
  ContentType: 'multipart/form-data',
  Authorization: `Bearer ${token}`,
  enctype: 'multipart/form-data'
});

export interface uploadImgRes {
  response: {
    isSuccess: boolean
    status: number
    message: string
    data: imageUpload[];
  }
}

export interface imageUpload {
    id: number
    imgUrl: string
    imgCategory: number
    imgTitle: string
}

@Injectable({
  providedIn: 'root'
})
export class ImgUploadService {
  constructor(private http: HttpClient) {
  }

  uploadImg(data: FormData): Observable<uploadImgRes> {
    return this.http.post<uploadImgRes>(`${url}${uploadRoute}`, data, {
      headers: httpHeaders,
    })
  }

  getAllImgByCategory(id: number): Observable<uploadImgRes> {
    return this.http.get<uploadImgRes>(`${url}${getByCategoryRoute}/${id}`)
  }
}