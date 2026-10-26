import { ChangeDetectorRef, Component } from '@angular/core';
import { Comic } from '../../models/comic';
import * as XLSX from 'xlsx'

@Component({
  selector: 'app-comics-excel-component',
  standalone: false,
  styleUrl: './comics-excel-component.css',
  templateUrl: './comics-excel-component.html',
})
export class ComicsExcelComponent {
  public arrayComics: Array<Comic>

  constructor(private _cdr: ChangeDetectorRef) {
    this.arrayComics = []
  }

  cargarComics(): void {
    let path = "./assets/comics.xlsx"
    fetch(path).then(response => response.arrayBuffer())
    .then((buffer) => {
      let workbook = XLSX.read(buffer, {type: "array"})
      let hojaName = workbook.SheetNames[0]
      let hoja = workbook.Sheets[hojaName]
      let data = XLSX.utils.sheet_to_json(hoja)
      this.arrayComics = data.map((comic: any) => new Comic(comic.nombre, comic.imagen, comic.descripcion))
      this._cdr.detectChanges()
    })
  }
}
