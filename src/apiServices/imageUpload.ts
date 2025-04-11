import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { token, url } from './globals';

const uploadRoute = "/api/Image/InsertImage"
const getByCategoryRoute = "/api/Image/GetImageByCategoryId"
const getAll = "/api/Image/GetAllImages"
const del = "/api/Image/DeleteImage"
const delAll = "/api/Image/DeleteImages"

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
  imgName: any
  isMainDisp: boolean
  isMenu: boolean
  isGallery: boolean
}

export interface imageUploadTable {
  id: number
  imgUrl: string
  imgCategory: string
  imgTitle: string
  imgLongUrl: string
}

@Injectable({
  providedIn: 'root'
})
export class ImgUploadService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<uploadImgRes> {
    return this.http.get<uploadImgRes>(`${url}${getAll}`);
  }

  uploadImg(data: FormData): Observable<uploadImgRes> {
    return this.http.post<uploadImgRes>(`${url}${uploadRoute}`, data)
  }

  getAllImgByCategory(id: number): Observable<uploadImgRes> {
    return this.http.get<uploadImgRes>(`${url}${getByCategoryRoute}/${id}`);
  }

  delete(id: number): Observable<uploadImgRes> {
    return this.http.delete<uploadImgRes>(`${url}${del}/${id}`);
  }

  deleteImgs(id: number[]): Observable<uploadImgRes> {
    const options = {
      body: id
    }
    return this.http.delete<uploadImgRes>(`${url}${delAll}`, 
      options
    )
  }
}