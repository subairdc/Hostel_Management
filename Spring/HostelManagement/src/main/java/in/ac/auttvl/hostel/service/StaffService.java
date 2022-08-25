package in.ac.auttvl.hostel.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.ac.auttvl.hostel.model.Staff;
import in.ac.auttvl.hostel.model.StaffFemale;
import in.ac.auttvl.hostel.model.StaffMale;
import in.ac.auttvl.hostel.repository.StaffFemaleRepository;
import in.ac.auttvl.hostel.repository.StaffMaleRepository;
import in.ac.auttvl.hostel.repository.StaffRepository;

@Service
public class StaffService {
	
	@Autowired
    private StaffRepository staffRepository;
	
	@Autowired
    private StaffMaleRepository staffMaleRepository;
	
	@Autowired
    private StaffFemaleRepository staffFemaleRepository;

    public Staff addStaff(Staff staff) {
        return staffRepository.save(staff);
    }

    public List<Staff> addAllStaffs(List<Staff> staffs) {
        return  staffRepository.saveAll(staffs);
    }

    public Staff getStaffById(int id) {
        return staffRepository.findById(id).orElse(null);
    }

    public Staff getStaffByStaffId(String id) {
		return staffRepository.findByStaffId(id);
	}
    
    public Staff getStaffByName(String name) {
        return  staffRepository.findByName(name);
    }

    public Staff updateStaff(Staff staff) {
    	Staff existingStaff = staffRepository.findById(staff.getId()).orElse(null);
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

    public boolean deleteStaffById(int id) {
    	Staff existingStaff = staffRepository.findById(id).orElse(null);
        if(existingStaff != null) {
        	staffRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public List<Staff> getAllStaffs() {
        return staffRepository.findAll();
    }

   //Verify Staff Service
	public StaffMale addVerifiedStaffMale(StaffMale staffMale) {
	
		return staffMaleRepository.save(staffMale);
	}

	public StaffFemale addVerifiedStaffFemale(StaffFemale staffFemale) {
		return staffFemaleRepository.save(staffFemale);
	}

    
}
