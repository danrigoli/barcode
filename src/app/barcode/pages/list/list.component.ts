import { AfterContentChecked, AfterContentInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  code: string = '';
  barcodes: { code: string, text: string }[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.code = params['code'];
      for (let i = 0; i < params['quantity']; i++) {
        this.barcodes.push({ code: params['code'], text: params['text'] });
      }
    })
  }

  // ngAfterContentChecked(): void {
  //   window.print();
  // }

}
