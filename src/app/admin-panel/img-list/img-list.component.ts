import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { DialogComponent } from './dialog-animations';
import { imageUploadTable, ImgUploadService, uploadImgRes } from '../../../apiServices/imageUpload';
import { changeHeading, getHeading } from '../saidbar-admin/saidbar-admin.component';
import { url } from '../../../apiServices/globals';

@Component({
  selector: 'app-img-list',
  imports: [MatTableModule],
  templateUrl: './img-list.component.html',
  styleUrl: './img-list.component.css'
})
export class ImgListComponent {
  sideNavStatus: boolean = false;
    
  getHeading = getHeading;
  setHeading = changeHeading;

  dataSource = new MatTableDataSource<imageUploadTable>();
  dataColumns: string[];
  tmp: imageUploadTable[] = [];

  change(tmp: number): string
  {
    if (tmp === 0)
      return "Menu"
    else if (tmp === 1)
      return "Gallery"
    else if (tmp === 2)
      return "Banquet"
    else if (tmp === 3)
      return "Restaurant"
    else if (tmp === 4)
      return "Types of Food"
    else
      return "Uploads"
  }

  changeDir(tmp: number): string
  {
    if (tmp === 0)
      return "Menu_img"
    else if (tmp === 1)
      return "Gallery_img"
    else if (tmp === 2)
      return "Banquet_img"
    else if (tmp === 3)
      return "Restaurant_img"
    else if (tmp === 4)
      return "TypesofFood_img"
    else
      return "Uploads"
  }

  dialog!: MatDialogRef<DialogComponent>;

  dataSend: {
    id: number,
    title: string
  } = {
    id: -1,
    title: ""
  }

  OpenModal() {
    this.dialog = this.matDialog.open(DialogComponent, {
      data: { data: {
        id: this.dataSend.id,
        title: this.dataSend.title
      } },
      disableClose: true
    });
  }

  constructor(
    private dataAccess: ImgUploadService,
    private matDialog: MatDialog,
  )
  {
    this.setHeading("Images List View");
    this.dataAccess.getAll()
    .subscribe((m: uploadImgRes) => {
      m.response.data.map(d => {
        this.tmp.push({
          id: d.id,
          imgCategory: this.change(d.imgCategory),
          imgTitle: d.imgTitle,
          imgUrl: d.imgUrl,
          imgLongUrl: `${url}/${this.changeDir(d.imgCategory)}/${d.imgUrl}`
        })
      })
      this.dataSource.data = this.tmp;
    })
    this.dataColumns = ['rowIndex', 'Name', 'Title', 'Category', 'Url', 'Image', 'id']
  }

  getID(id: any, title: any)
  {
    this.dataSend.id = id;
    this.dataSend.title = title
    this.OpenModal()
  }
}