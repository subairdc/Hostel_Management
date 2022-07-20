package in.ac.auttvl.hostel.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.ac.auttvl.hostel.model.Admin;
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

    public Admin getAdminByName(String name) {
        return  adminRepository.findByName(name);
    }

    public Admin updateAdmin(Admin admin) {
    	Admin existingAdmin = adminRepository.findById(admin.getId()).orElse(null);
        System.out.println(admin);
        if(existingAdmin == null) {
            System.out.println("Admin not found");
            return  adminRepository.save(admin);
        }else  {
            existingAdmin.setName(admin.getName());
            existingAdmin.setEmail(admin.getEmail());
            existingAdmin.setPassword(admin.getPassword());
            adminRepository.save(existingAdmin);
        }
        return admin;
    }

    public boolean deleteAdminById(int id) {
    	Admin existingAdmin = adminRepository.findById(id).orElse(null);
        if(existingAdmin != null) {
        	adminRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

}
