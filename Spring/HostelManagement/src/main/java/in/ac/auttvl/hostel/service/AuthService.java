package in.ac.auttvl.hostel.service;

//import java.security.SecureRandom;
//import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.ac.auttvl.hostel.model.Admin;
import in.ac.auttvl.hostel.model.Staff;
import in.ac.auttvl.hostel.model.Student;
import in.ac.auttvl.hostel.model.Warden;
import in.ac.auttvl.hostel.repository.AdminRepository;
import in.ac.auttvl.hostel.repository.StaffRepository;
import in.ac.auttvl.hostel.repository.StudentRepository;
import in.ac.auttvl.hostel.repository.WardenRepository;

@Service
public class AuthService {
	

    @Autowired
    private StaffRepository staffRepository;
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private WardenRepository wardenRepository;
    @Autowired
    private AdminRepository adminRepository;
    
//    private static final SecureRandom secureRandom = new SecureRandom();
//    private static final Base64.Encoder base64enocder = Base64.getUrlEncoder();

	public Staff staffRegister(Staff staff) {
		
		 // Check if user with username exist or not
        if(checkStaffExist(staff)== true)
		return null;
        
//        staff.setToken(generateToken());

        return staffRepository.save(staff);
	}
	
	
	
//	private String generateToken() {
//
//        byte[] token = new byte[24];
//        secureRandom.nextBytes(token);
//        return base64enocder.encodeToString(token);
//
//    }

    private boolean checkStaffExist(Staff staff) {
    	Staff existingUser = staffRepository.findByEmail(staff.getEmail());

        if(existingUser == null)
            return false;
        return true;
    }

    public Staff staffLogin(Staff staff) {
        Staff existingUser = staffRepository.findByEmailAndPassword(staff.getEmail(), staff.getPassword());

//        if(existingUser.getEmail().equals(staff.getEmail()) &&
//                existingUser.getPassword().equals(staff.getPassword())) {
//            existingUser.setPassword("");
//            return existingUser;
//        }
        
        if(existingUser != null) {
    		existingUser.setPassword("");
    		 return existingUser;
    	}

        return null;

    }
    
    
    //Student Auth controller
    public Student studentRegister(Student student) {
		
		 // Check if user with username exist or not
       if(checkStudentExist(student)== true)
		return null;

       return studentRepository.save(student);
	}
    
    private boolean checkStudentExist(Student student) {
    	Student existingUser = studentRepository.findByEmail(student.getEmail());

        if(existingUser == null)
            return false;
        return true;
    }

    public Student studentLogin(Student student) {
    	Student existingUser = studentRepository.findByEmailAndPassword(student.getEmail(), student.getPassword());

//        if(existingUser.getEmail().equals(student.getEmail()) &&
//                existingUser.getPassword().equals(student.getPassword())) {
//            existingUser.setPassword("");
//            return existingUser;
//        }
    	
    	if(existingUser != null) {
    		existingUser.setPassword("");
    		 return existingUser;
    	}

        return null;

    }

    
    
    //Warden Auth controller
    public Warden wardenRegister(Warden warden) {
		
		 // Check if user with username exist or not
       if(checkWardenExist(warden)== true)
		return null;

       return wardenRepository.save(warden);
	}
    
    private boolean checkWardenExist(Warden warden) {
    	Warden existingUser = wardenRepository.findByEmail(warden.getEmail());

        if(existingUser == null)
            return false;
        return true;
    }

    public Warden wardenLogin(Warden warden) {
    	Warden existingUser = wardenRepository.findByEmailAndPassword(warden.getEmail(), warden.getPassword());

//        if(existingUser.getEmail().equals(warden.getEmail()) &&
//                existingUser.getPassword().equals(warden.getPassword())) {
//            existingUser.setPassword("");
//            return existingUser;
//        }
    	
    	if(existingUser != null) {
    		existingUser.setPassword("");
    		 return existingUser;
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
//        }
    	
    	if(existingUser != null) {
    		existingUser.setPassword("");
    		 return existingUser;
    	}

    	
        return null;

    }
}
