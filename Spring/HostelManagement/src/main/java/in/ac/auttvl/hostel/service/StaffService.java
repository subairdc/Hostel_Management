package in.ac.auttvl.hostel.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.ac.auttvl.hostel.model.Staff;
import in.ac.auttvl.hostel.repository.StaffRepository;

@Service
public class StaffService {
	
	@Autowired
    private StaffRepository staffRepository;

    public Staff addStaff(Staff staff) {
        return staffRepository.save(staff);
    }

    public List<Staff> addAllStaffs(List<Staff> staffs) {
        return  staffRepository.saveAll(staffs);
    }

    public Staff getStaffByEmail(String email) {
        return staffRepository.findById(email).orElse(null);
    }

    public Staff getStaffByName(String name) {
        return  staffRepository.findByName(name);
    }

    public Staff updateStaff(Staff staff) {
    	Staff existingStaff = staffRepository.findById(staff.getEmail()).orElse(null);
        System.out.println(staff);
        if(existingStaff == null) {
            System.out.println("Staff not found");
            return  staffRepository.save(staff);
        }else  {
            existingStaff.setName(staff.getName());
            existingStaff.setEmail(staff.getEmail());
            existingStaff.setPassword(staff.getPassword());
            staffRepository.save(existingStaff);
        }
        return staff;
    }

    public boolean deleteStaffByEmail(String email) {
    	Staff existingStaff = staffRepository.findById(email).orElse(null);
        if(existingStaff != null) {
        	staffRepository.deleteById(email);
            return true;
        }
        return false;
    }

    public List<Staff> getAllStaffs() {
        return staffRepository.findAll();
    }
 

}
