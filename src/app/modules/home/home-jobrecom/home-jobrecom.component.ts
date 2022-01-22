import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApplyforworkService } from 'src/app/applyforwork.service';

@Component({
  selector: 'app-home-jobrecom',
  templateUrl: './home-jobrecom.component.html',
  styleUrls: ['./home-jobrecom.component.css']
})
export class HomeJobrecomComponent implements OnInit {

  @Output() clearPages = new EventEmitter<any>();
  // @Input() clearPages = new EventEmitter<any>();

  LoadingInShow: boolean = false;
  dataFormocr: any;
  pdfSrc: any;
  text: any;
  item: any;
  // dataList: string[] = []
  dataList  = new Array()
  userTitle: any = ['นาย', 'นาง', 'นางสาว'];
  work: any = ['ไม่มีประสบการณ์', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'มากกว่า 10 ปี'];
  organization: any = ['ไม่มี', 'องค์กรภาครัฐ', 'องค์กรธุรกิจ', 'องค์กรรัฐวิสาหกิจ', 'องค์กรอาสาสมัคร'];

  constructor(
    private router: Router,
    private applyforworkService: ApplyforworkService
  ) { }

  ngOnInit(): void {
  }

  refresh() {
    this.clearPages.emit(this.item);
    window.location.reload();
  }

  onUplodeFile(e: any) {
    if (e.target.files) {
      this.LoadingInShow = true;
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      console.log(reader);
      console.log(e.target.files[0]);
      this.applyforworkService.uploadFile(e.target.files[0]).subscribe(res=>{
        console.log(res);
        this.dataFormocr = res.text[0];
        this.LoadingInShow = false;
      })
    }

  }

  recomment(text: any) {
    this.applyforworkService.getRecomment(this.dataFormocr).subscribe(res=>{
      console.log(res);
      this.dataList = res
      console.log('test', this.dataList)
    })
  }

}
