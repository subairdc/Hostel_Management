package in.ac.auttvl.hostel.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.ac.auttvl.hostel.model.Staff;
import in.ac.auttvl.hostel.model.StaffFemale;
import in.ac.auttvl.hostel.model.StaffMale;
import in.ac.auttvl.hostel.model.StudentFemale;
import in.ac.auttvl.hostel.model.StudentMale;
import in.ac.auttvl.hostel.service.StaffService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/staff")
public class StaffController {

    @Autowired
    private StaffService staffService;

    // Add new staff
    @PostMapping("/addStaff")
    public Staff addStaff(@RequestBody Staff staff) {
        return staffService.addStaff(staff);
    }

    // Add more than 1 Staff
    @PostMapping("/addStaffs")
    public List<Staff> addAllStaffs(@RequestBody List<Staff> staffs) {
        return staffService.addAllStaffs(staffs);
    }

    // Get staff by Id
    @GetMapping("/getStaffById/{id}")
    public Staff getStaffById(@PathVariable int id) {
        return staffService.getStaffById(id);
    }
    
 // Get staff by Id
    @GetMapping("/getStaffByStaffId/{id}")
    public Staff getStaffByStaffId(@PathVariable String id) {
        return staffService.getStaffByStaffId(id);
    }

    // Get staff by name
    @GetMapping("/getStaffByName/{name}")
    public  Staff getStaffByName(@PathVariable String name) {
        return  staffService.getStaffByName(name);
    }

    // Update staff
    @PutMapping("/updateStaff")
    public Staff updateStaff(@RequestBody Staff staff) {
        return staffService.updateStaff(staff);
    }

    // Delete staff
    @DeleteMapping("/deleteStaffById/{id}")
    public boolean deleteStaffByID(@PathVariable int id) {
        return staffService.deleteStaffById(id);
    }

    // Get all staff
    @GetMapping("/getAllStaff")
    public List<Staff> getAllStaff() {
        return staffService.getAllStaffs();
    }
    
    // Add new  verified staff
    @PostMapping("/addVerifiedStaffMale")
    public StaffMale addVerifiedStaffMale(@RequestBody StaffMale staffMale) {
        return staffService.addVerifiedStaffMale(staffMale);
    }
    
 // Add new  verified staff
    @PostMapping("/addVerifiedStaffFemale")
    public StaffFemale addVerifiedStaffFemale(@RequestBody StaffFemale staffFemale) {
        return staffService.addVerifiedStaffFemale(staffFemale);
    }
}

