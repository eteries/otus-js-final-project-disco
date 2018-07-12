import { Component, ElementRef, Input, Output, EventEmitter, AfterContentInit } from '@angular/core';
import { UploadEvent, UploadFile, FileSystemFileEntry } from 'ngx-file-drop';

@Component({
  selector: 'image-drop',
  templateUrl: './image-drop.component.html',
  styleUrls: ['./image-drop.component.scss']
})
export class ImageDropComponent implements AfterContentInit {

  @Input() initial: string = '';
  @Output() onImageLoaded: EventEmitter<string> = new EventEmitter();
  files: UploadFile[] = [];
  isLoaded: boolean = false;

  constructor(private elementRef: ElementRef) {
  }

  ngAfterContentInit() {
    this.load();
  }

  dropped(event: UploadEvent) {
    this.files = event.files;
    for (const droppedFile of event.files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          if (!file.type.startsWith('image/')) return;

          const img = document.createElement("img");
          img.classList.add("preview");

          const fileReader = new FileReader();
          fileReader.onload = () => {
            img.src = fileReader.result;
            this.elementRef.nativeElement.querySelector('.preview-container').appendChild(img);
            this.onImageLoaded.emit(fileReader.result);
            this.isLoaded = true;
          };
          fileReader.readAsDataURL(file);
        });
      }
    }
  }

  load() {
    if (this.initial) {
      const img = document.createElement("img");
      img.src = this.initial;
      img.classList.add("preview");

      this.elementRef.nativeElement.querySelector('.preview-container').appendChild(img);
      this.isLoaded = true;
    }
  }

  reset() {
    this.isLoaded = false;
    this.onImageLoaded.emit('');
    const existingImg = this.elementRef.nativeElement.querySelector('.preview-container img');
    if (existingImg) existingImg.parentElement.removeChild(existingImg);
  }

}
