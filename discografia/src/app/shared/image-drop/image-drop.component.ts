import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { UploadEvent, UploadFile, FileSystemFileEntry } from 'ngx-file-drop';

@Component({
    selector: 'image-drop',
    templateUrl: './image-drop.component.html',
    styleUrls: ['./image-drop.component.scss']
})
export class ImageDropComponent {

    constructor(private elementRef: ElementRef) {}

    @Output() onImageLoaded: EventEmitter<string> = new EventEmitter();

    public files: UploadFile[] = [];
    public isLoaded: boolean = false;

    public dropped(event: UploadEvent) {
        this.files = event.files;
        for (const droppedFile of event.files) {

            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
                fileEntry.file((file: File) => {

                    // Here you can access the real file
                    console.log(droppedFile, file);

                    if(!file.type.startsWith('image/')) return;

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

    public reset() {
        this.isLoaded = false;
    }

}
