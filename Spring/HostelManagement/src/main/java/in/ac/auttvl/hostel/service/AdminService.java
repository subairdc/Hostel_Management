package in.ac.auttvl.hostel.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.ac.auttvl.hostel.model.Admin;
import in.ac.auttvl.hostel.model.Student;
import in.ac.auttvl.hostel.repository.AdminRepository;

@Service
public class AdminService {
	@Autowired
    private AdminRepository adminRepository;

    public Admin addAdmin(Admin admin) {
        return adminRepository.save(admin);
    }

    public List<Admin> addAllAdmins(List<Admin> admins) {
        return  adminRepository.saveAll(admins);
    }

    public Admin getAdminById(int id) {
        return adminRepository.findById(id).orElse(null);
    }
    
    public Admin getAdminByAdminId(String id) {
		return adminRepository.findByAdminId(id);
	}

    public Admin getAdminByName(String name) {
        return  adminRepository.findByName(name);
    }

    public Admin updateAdmin(Admin admin) {
    	Admin existingUser = adminRepository.findById(admin.getId()).orElse(null);
        System.out.println(admin);
        if(existingUser == null) {
            System.out.println("Admin not found");
            return  adminRepository.save(admin);
        }else  {
        	existingUser.setName(admin.getName());
	        existingUser.setGender(admin.getGender());
	        existingUser.setDateOfBirth(admin.getDateOfBirth());
	        existingUser.setAge(admin.getAge());
	        existingUser.setBloodGrp(admin.getBloodGrp());
	           
	        existingUser.setAdminId(admin.getAdminId());
	        existingUser.setPhoneNo(admin.getPhoneNo());
	        existingUser.setEmail(admin.getEmail());
	        existingUser.setPassword(admin.getPassword());
	        existingUser.setConfirmPassword(admin.getConfirmPassword());
	            
	        existingUser.setStatus(admin.getStatus());
	            
	        existingUser.setStreet(admin.getStreet());
	        existingUser.setCity(admin.getCity());
	        existingUser.setDistrict(admin.getDistrict());
	        existingUser.setState(admin.getState());
            existingUser.setPincode(admin.getPincode());
	            
	        existingUser.setVerify(admin.getVerify());

            adminRepository.save(existingUser);
        }
        return admin;
    }

    public boolean deleteAdminById(int id) {
    	Admin existingUser = adminRepository.findById(id).orElse(null);
        if(existingUser != null) {
        	adminRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

}
