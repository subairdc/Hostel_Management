export class Warden {
  id : number;
  name : string;
  gender : string;
  dateOfBirth : string;
  age : number;
  bloodGrp : string;

  wardenId : string;
  phoneNo : string;
  email : string;
  password : string;
  confirmPassword : string;

  status : string;
  hostel : string;

  //address
  street: string;
  city: string;
  district: string;
  state: string;
  pincode: string;

  image : string;
  imagePath : string;
  updatedBy : string;
  updatedOn : string;
  dateOfEnrollment : string;

  verify : string;


  constructor(){
    this.id = 0;
    this.name = '';
    this.gender = '';
    this.dateOfBirth = '';
    this.age = 0;
    this.bloodGrp = '';

    this.wardenId = '';
    this.phoneNo = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';

    this.status = '';
    this.hostel = '';

    this.street = '';
    this.city = '';
    this.district = '';
    this.state = '';
    this.pincode = '';

    this.image = '';
    this.imagePath = '';
    this.updatedBy = '';
    this.updatedOn = '';
    this.dateOfEnrollment = '';

    this.verify = '';
  }
}
