import {Component, OnInit} from '@angular/core';
import {AnnouncementService} from "../../services/announcement.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {

  announcement: Array<any> = [];
  isUpdated: boolean = false;
  addEdited: any;

  addAnnouncementForm: FormGroup = this.formBuilder.group({
    title: ['', {validators: [Validators.required, Validators.maxLength(60)], updateOn: 'change'}],
    description: ['', {validators: [Validators.required], updateOn: 'change'}]
  })

  constructor(private announcementService: AnnouncementService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getAllAnnouncements(1);
  }

  get title() { return this.addAnnouncementForm.get('title');}
  get description() {return this.addAnnouncementForm.get('description');}

  resetForm() {
    this.addAnnouncementForm.reset({title: '', description: ''});
    this.title?.setErrors(null);
    this.description?.setErrors(null);
  }

  getAllAnnouncements(directorId: any){
    return this.announcementService.getAllAnnouncements(directorId).subscribe((response: any)=>{
      this.announcement = response;
    })
  }

  createAnnouncement(directorId: any) {
    const add = {
      title: this.addAnnouncementForm.value.title,
      description: this.addAnnouncementForm.value.description,
    }

    this.announcementService.create(directorId, add).subscribe( (response) => {
      console.log('announcement added');
      this.resetForm();
      this.getAllAnnouncements(directorId);
    })
  }

  deleteAnnouncement(id: any) {
    this.announcementService.delete(id).subscribe((response) => {
      console.log('announcement deleted');
      this.getAllAnnouncements(1);
    })
  }

  getAnnouncementEdited(add: any){
    this.isUpdated = !this.isUpdated;
    this.addEdited = add;
    this.title?.setValue(this.addEdited.title);
    this.description?.setValue(this.addEdited.description)
  }

  cancel() {
    this.isUpdated = !this.isUpdated;
    this.resetForm();
    this.addEdited = {}
  }

  updateAnnouncement() {
    const add = {
      title: this.addAnnouncementForm.value.title,
      description: this.addAnnouncementForm.value.description,
    }
    this.announcementService.update(this.addEdited.id, add).subscribe( (response) => {
      console.log('announcement updated');
      this.getAllAnnouncements(1);
      this.cancel()
    })
  }

  submitForm() {
    if(this.addAnnouncementForm.valid && !this.isUpdated) {
      this.createAnnouncement(1)
    } else {
      console.log('error')
    }
  }
}
