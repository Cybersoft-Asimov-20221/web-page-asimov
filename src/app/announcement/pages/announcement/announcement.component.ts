import {Component, OnInit, ViewChild} from '@angular/core';
import {AnnouncementService} from "../../services/announcement.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {

  announcement: Array<any> = [];

  addAnnouncementForm: FormGroup = this.formBuilder.group({
    title: ['', {validators: [Validators.required, Validators.maxLength(60)], updateOn: 'change'}],
    description: ['', {validators: [Validators.required], updateOn: 'change'}]
  })

  constructor(private announcementService: AnnouncementService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getAllAnnouncements();
  }

  get title() { return this.addAnnouncementForm.get('title');}
  get description() {return this.addAnnouncementForm.get('description');}

  resetForm() {
    this.addAnnouncementForm.reset({title: '', description: ''});
    /*this.title?.setErrors(null);
    this.description?.setErrors(null);*/
  }

  getAllAnnouncements(){
    return this.announcementService.getAllAnnouncements().subscribe((response: any)=>{
      this.announcement = response;
    })
  }

  createAnnouncement() {
    const add = {
      title: this.addAnnouncementForm.value.title,
      description: this.addAnnouncementForm.value.description,
    }

    this.announcementService.create(add).subscribe( (response) => {
      console.log('announcement added');
      this.resetForm();
      this.getAllAnnouncements();
    })
  }

  deleteAnnouncement(id: any) {
    this.announcementService.delete(id).subscribe((response) => {
      console.log('announcement deleted');
      this.getAllAnnouncements();
    })
  }

  submitForm() {
    if(this.addAnnouncementForm.valid) {
      this.createAnnouncement()
    } else {
      console.log('error')
    }
  }
}
