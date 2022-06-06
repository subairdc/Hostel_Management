package in.ac.auttvl.hostel.service;

import java.security.SecureRandom;
import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.ac.auttvl.hostel.model.Staff;
import in.ac.auttvl.hostel.repository.StaffRepository;

@Service
public class AuthService {
	

    @Autowired
    private StaffRepository staffRepository;
    
    private static final SecureRandom secureRandom = new SecureRandom();
    private static final Base64.Encoder base64enocder = Base64.getUrlEncoder();

	public Staff register(Staff staff) {
		
		 // Check if user with username exist or not
        if(checkUserExist(staff)== true)
		return null;
        
        staff.setToken(generateToken());

        return staffRepository.save(staff);
	}
	
	
	
	private String generateToken() {

        byte[] token = new byte[24];
        secureRandom.nextBytes(token);
        return base64enocder.encodeToString(token);

    }

    private boolean checkUserExist(Staff staff) {
    	Staff existingUser = staffRepository.findById(staff.getUsername()).orElse(null);

        if(existingUser == null)
            return false;
        return true;
    }

    public Staff login(Staff staff) {
        Staff existingUser = staffRepository.findById(staff.getUsername()).orElse(null);

        if(existingUser.getUsername().equals(staff.getUsername()) &&
                existingUser.getPassword().equals(staff.getPassword()) &&
                existingUser.getRole().equals(staff.getRole())) {
            existingUser.setPassword("");
            return existingUser;
        }

        return null;

    }

}
