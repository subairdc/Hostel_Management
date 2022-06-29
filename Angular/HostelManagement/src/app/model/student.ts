export class Student {
  id : number;
  name : string;
  gender : string;
  dateOfBirth : any;
  age : number;
  email : string;

  course : string; //UG OR PG
  dept : string;   //ECE
  regNo : string;
  year : number; //12


  password : string;
  confirmPassword : string;

  status : string;
  hostel : string;
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
  relationship : string;
  guardianAddress : string;
  guardianPhoneNo : string;

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
    this.dateOfBirth = Date;
    this.age =0;

    this.email = '';
    this.course = ''; //UG OR PG
    this.dept = '';   //ECE
    this.regNo = '';
    this.year = 0; //12

    this.password = '';
    this.confirmPassword = '';

    this.status = '';
    this.hostel = '';
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
    this.relationship = '';
    this.guardianAddress = '';
    this.guardianPhoneNo = '';

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
