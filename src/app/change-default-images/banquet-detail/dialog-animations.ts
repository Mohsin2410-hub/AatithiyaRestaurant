import { Component, Input, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ImgUploadService } from "../../../apiServices/imageUpload";

@Component({
  selector: "hello",
  template: `
    <div style="width:300px; padding: 2.5em; background-color: var(--background-color); z-index: 9999;">
      <h2 mat-dialog-title class="deleteTitle">Delete Picture</h2>
      <div style="color: var(--primary-text-color)" mat-dialog-content>Pakka?</div>
      <div mat-dialog-actions align="end">
        <span>
          <button
            type="button"
            class="btn m-3 modalBtn"
            mat-flat-button
            color="primary"
            (click)=delete()
          >
            Ha
          </button>
          <button
            type="button"
            class="btn m-3 modalBtn"
            mat-stroked-button
            color="primary"
            (click)="CloseDialog()"
          >
            Rukk ja bhai
          </button>
        </span>
      </div>
    </div>
  `,
  styles: `
    .deleteTitle {
        color: var(--foreground-color);
    }
    .modalBtn {
        background-color: var(--foreground-color);
    }
  `
})
export class DialogComponent {
    id = -1;
    title = ""
  constructor(
    private dataAccess: ImgUploadService,
    private _mdr: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: { data: {id: number, title: string}}
  ) {
    console.log(data);
    this.id = data.data.id;
    this.title = data.data.title;
  }
  CloseDialog() {
    this._mdr.close(false)
  }

  delete()
  {
    console.log(this.id)
    this.dataAccess.delete(this.id).subscribe({
      next: (data: any) => {
        setTimeout(() => {
          window.alert("Ho gaya bhai");
          window.location.reload();
        }, 1000)
      },
      error: (error: any) => {
        window.alert("Something went wrong");
      }
    })
  }
}