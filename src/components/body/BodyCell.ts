import { Component, Input } from '@angular/core';

@Component({
  selector: 'datatable-body-cell',
  template: `
  	<div>
      <span
        class="datatable-body-cell-label"
        [innerHTML]="rowValue">
      </span>
    </div>
  `,
  directives: [],
  host: {
    '[style.width]':'column.width',
    '[style.height]':'column.height',
    '[class.datatable-body-cell]': 'true'
  }
})
export class DataTableBodyCell {

  @Input() column: Object;
  @Input() row: Object;

  get rowValue() {
    return this.row[this.column.prop];
  }

}
