export class Student {
  id : number;
  name : string;
  gender : string;
  dateOfBirth : string;
  age : number;
  email : string;
  bloodGrp : string;

  degree : string; //UG OR PG
  dept : string;   //ECE
  regNo : string;
  year : number; //12
  sem : number;


  password : string;
  confirmPassword : string;

  status : string;
  hostel : string;

  roomNo : number;
  //sibling

  //address
  street: string;
  city: string;
  district: string;
  state: string;
  pincode: string;

  //Parents details
  fatherName : string;
  fatherPhoneNo : string;
  motherName : string;
  motherPhoneNo : string;
  phoneNo : string;

  //guardian
  guardianName : string;
  guardianPhoneNo : string;
  guardianRelation : string;
  guardianAddress : string;


  image : string;
  imagePath : string;
  updatedBy : string;
  updatedOn : string;
  dateOfEnrollment : string;

  // //office use
  // roomAllotted : string;
  // Floor : string; //Ground or first floor
  // DOE : any; //date of enrollment
  // //yearOfStudy
  // Feestatus : string = '';

  constructor() {
    this.id =0;
    this.name = '';
    this.gender = '';
    this.dateOfBirth = '';
    this.age =0;
    this.bloodGrp='';

    this.email = '';
    this.degree = ''; //UG OR PG
    this.dept = '';   //ECE
    this.regNo = '';
    this.year = 0; //12
    this.sem = 0;

    this.password = '';
    this.confirmPassword = '';

    this.status = '';
    this.hostel = '';

    this.roomNo = 0;
    //sibling

    //address
    this.street = '';
    this.city = '';
    this.district = '';
    this.state = '';
    this.pincode = '';

    //Parents details
    this.fatherName = '';
    this.fatherPhoneNo = '';
    this.motherName = '';
    this.motherPhoneNo = '';
    this.phoneNo = '';

    //guardian
    this.guardianName = '';
    this.guardianRelation = '';
    this.guardianAddress = '';
    this.guardianPhoneNo = '';

    this.image = '';
    this.imagePath = '';
    this.updatedBy = '';
    this.updatedOn = '';
    this.dateOfEnrollment = '';

    // //office use
    // roomAllotted = '';
    // Floor = ''; //Ground or first floor
    // DOE : any; //date of enrollment
    // //yearOfStudy
    // Feestatus : string = '';


  }

}



// export class Student {
//   id : number=0;
//   name : string = '';

//
//   email : string = '';
//   password : string = '';
//   phoneNo : string = '';
// }
