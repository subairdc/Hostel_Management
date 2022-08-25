package in.ac.auttvl.hostel.service;

//import java.security.SecureRandom;
//import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.ac.auttvl.hostel.model.Admin;
import in.ac.auttvl.hostel.model.Staff;
import in.ac.auttvl.hostel.model.StaffFemale;
import in.ac.auttvl.hostel.model.StaffMale;
import in.ac.auttvl.hostel.model.Student;
import in.ac.auttvl.hostel.model.StudentFemale;
import in.ac.auttvl.hostel.model.StudentMale;
import in.ac.auttvl.hostel.model.Warden;
import in.ac.auttvl.hostel.model.WardenFemale;
import in.ac.auttvl.hostel.model.WardenMale;
import in.ac.auttvl.hostel.repository.AdminRepository;
import in.ac.auttvl.hostel.repository.StaffFemaleRepository;
import in.ac.auttvl.hostel.repository.StaffMaleRepository;
import in.ac.auttvl.hostel.repository.StaffRepository;
import in.ac.auttvl.hostel.repository.StudentFemaleRepository;
import in.ac.auttvl.hostel.repository.StudentMaleRepository;
import in.ac.auttvl.hostel.repository.StudentRepository;
import in.ac.auttvl.hostel.repository.WardenFemaleRepository;
import in.ac.auttvl.hostel.repository.WardenMaleRepository;
import in.ac.auttvl.hostel.repository.WardenRepository;

@Service
public class AuthService {
	

    @Autowired
    private StaffRepository staffRepository;
    @Autowired
    private StaffMaleRepository staffMaleRepository;
    @Autowired
    private StaffFemaleRepository staffFemaleRepository;
    
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private StudentMaleRepository studentMaleRepository;
    @Autowired
    private StudentFemaleRepository studentFemaleRepository; 
    
    @Autowired
    private WardenRepository wardenRepository;
    @Autowired
    private WardenMaleRepository wardenMaleRepository;
    @Autowired
    private WardenFemaleRepository wardenFemaleRepository; 
    @Autowired
    
    private AdminRepository adminRepository;
    
//    private static final SecureRandom secureRandom = new SecureRandom();
//    private static final Base64.Encoder base64enocder = Base64.getUrlEncoder();

	public Staff staffRegister(Staff staff) {
//      staff.setToken(generateToken());
		
		if(checkStaffExist(staff)== true)
				return null;
		 // Check if user with username exist or not
		if(staff.getHostel().equalsIgnoreCase("Pothigai Boys Hostel")){
   		 if(checkStaffMale(staff)== true)
   			 return null;			
		}else {
   		if(checkStaffFemale(staff)== true)
  			 return null;
   	}

      return staffRepository.save(staff);
	}

	private boolean checkStaffExist(Staff staff) {
    	Staff existingUser = staffRepository.findByEmail(staff.getEmail());

        if(existingUser == null)
            return false;
        return true;
    }
   
   private boolean checkStaffMale(Staff staff) {
   	StaffMale existingUser = staffMaleRepository.findByEmail(staff.getEmail());

       if(existingUser == null)
           return false;
       return true;
   }
   
   private boolean checkStaffFemale(Staff staff) {
   	StaffFemale existingUser = staffFemaleRepository.findByEmail(staff.getEmail());

       if(existingUser == null)
           return false;
       return true;
   }
   
//	private String generateToken() {
//
//        byte[] token = new byte[24];
//        secureRandom.nextBytes(token);
//        return base64enocder.encodeToString(token);
//
//    }

    public Staff staffLogin(Staff staff) {
    	StaffMale existingUserM = staffMaleRepository.findByEmailAndPassword(staff.getEmail(), staff.getPassword());
    	StaffFemale existingUserF = staffFemaleRepository.findByEmailAndPassword(staff.getEmail(), staff.getPassword());
//          if(existingUser.getEmail().equals(student.getEmail()) &&
//                  existingUser.getPassword().equals(student.getPassword())) {
//              existingUser.setPassword("");
//              return existingUser;
//          }
      	
      	if(existingUserM != null) {
      		existingUserM.setPassword("");
      		Staff s = new Staff();
      		s.setId(existingUserM.getId());
      		 return s;
      	}else if (existingUserF != null) {
      		existingUserF.setPassword("");
      		Staff s = new Staff();
      		s.setId(existingUserF.getId());
      		 return s;
      	}
    	
        return null;
    }
    
    
    //Student Auth controller
    public Student studentRegister(Student student) {
		
    	if(checkStudentExist(student)== true)
			return null;
		 // Check if user with username exist or not
    	if(student.getGender().equalsIgnoreCase("Male")){
    		 if(checkStudentMale(student)== true)
    			 return null;			
    	}else {
    		if(checkStudentFemale(student)== true)
   			 return null;
    	}

       return studentRepository.save(student);
	}
    
    private boolean checkStudentExist(Student student) {
    	Student existingUser = studentRepository.findByEmail(student.getEmail());

        if(existingUser == null)
            return false;
        return true;
    }
    
    private boolean checkStudentMale(Student student) {
    	StudentMale existingUser = studentMaleRepository.findByEmail(student.getEmail());

        if(existingUser == null)
            return false;
        return true;
    }
    
    private boolean checkStudentFemale(Student student) {
    	StudentFemale existingUser = studentFemaleRepository.findByEmail(student.getEmail());

        if(existingUser == null)
            return false;
        return true;
    }

    public Student studentLogin(Student student) {

    	StudentMale existingUserM = studentMaleRepository.findByEmailAndPassword(student.getEmail(), student.getPassword());
    	StudentFemale existingUserF = studentFemaleRepository.findByEmailAndPassword(student.getEmail(), student.getPassword());
//          if(existingUser.getEmail().equals(student.getEmail()) &&
//                  existingUser.getPassword().equals(student.getPassword())) {
//              existingUser.setPassword("");
//              return existingUser;
//          }
      	
      	if(existingUserM != null) {
      		existingUserM.setPassword("");
      		Student s = new Student();
      		s.setId(existingUserM.getId());
      		 return s;
      	}else if (existingUserF != null) {
      		existingUserF.setPassword("");
      		Student s = new Student();
      		s.setId(existingUserF.getId());
      		 return s;
      	}
    	
        return null;
    }

    
    
    //Warden Auth controller
    public Warden wardenRegister(Warden warden) {
    	
    	
    	if(checkWardenExist(warden)== true)
			return null;
		 // Check if user with username exist or not
    	if(warden.getHostel().equalsIgnoreCase("Pothigai Boys Hostel")){
    		 if(checkWardenMale(warden)== true)
    			 return null;			
    	}else {
    		if(checkWardenFemale(warden)== true)
   			 return null;
    	}

       return wardenRepository.save(warden);
	}
    
    private boolean checkWardenExist(Warden warden) {
    	Warden existingUser = wardenRepository.findByEmail(warden.getEmail());

        if(existingUser == null)
            return false;
        return true;
    }
    
    private boolean checkWardenMale(Warden warden) {
    	WardenMale existingUser = wardenMaleRepository.findByEmail(warden.getEmail());

        if(existingUser == null)
            return false;
        return true;
    }
    
    private boolean checkWardenFemale(Warden warden) {
    	WardenFemale existingUser = wardenFemaleRepository.findByEmail(warden.getEmail());

        if(existingUser == null)
            return false;
        return true;
    }

    public Warden wardenLogin(Warden warden) {
    	
    	WardenMale existingUserM = wardenMaleRepository.findByEmailAndPassword(warden.getEmail(), warden.getPassword());
    	WardenFemale existingUserF = wardenFemaleRepository.findByEmailAndPassword(warden.getEmail(), warden.getPassword());
//          if(existingUser.getEmail().equals(student.getEmail()) &&
//                  existingUser.getPassword().equals(student.getPassword())) {
//              existingUser.setPassword("");
//              return existingUser;
//          }
      	
      	if(existingUserM != null) {
      		existingUserM.setPassword("");
      		Warden s = new Warden();
      		s.setId(existingUserM.getId());
      		 return s;
      	}else if (existingUserF != null) {
      		existingUserF.setPassword("");
      		Warden s = new Warden();
      		s.setId(existingUserF.getId());
      		 return s;
      	}
    	
        return null;
    }
    
    
    //Admin Auth controller
    public Admin adminRegister(Admin admin) {
		
		 // Check if user with username exist or not
       if(checkAdminExist(admin)== true)
		return null;

       return adminRepository.save(admin);
	}
    
    private boolean checkAdminExist(Admin admin) {
    	Admin existingUser = adminRepository.findByEmail(admin.getEmail());

        if(existingUser == null)
            return false;
        return true;
    }

    public Admin adminLogin(Admin admin) {
    	Admin existingUser = adminRepository.findByEmailAndPassword(admin.getEmail(), admin.getPassword());

//        if(existingUser.getEmail().equals(admin.getEmail()) &&
//                existingUser.getName().equals(admin.getName())) {
//            existingUser.setPassword("");
//            return existingUser;
//        }student.getGender().equalsIgnoreCase("Male")
    	
    	if(existingUser != null  && existingUser.getVerify().equalsIgnoreCase("Verified")) {
    		existingUser.setPassword("");
    		 return existingUser;
    	}

    	
        return null;

    }
    
// forget Password

	public Student getStudentByEmailAndRegNo(Student student) {
		
		Student existingUser = studentRepository.findByEmailAndRegNo(student.getEmail(), student.getRegNo());
		
		if(existingUser!=null) {
			return existingUser;
		}
		return null;
	}



	public Student getStudentByRegNo(Student student) {
		Student existingUser = studentRepository.findByRegNo(student.getRegNo());
		
		if(existingUser!=null) {
			return existingUser;
		}
		return null;
	}
}
