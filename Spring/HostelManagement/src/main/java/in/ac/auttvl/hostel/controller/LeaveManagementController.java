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

import in.ac.auttvl.hostel.model.LeaveManagement;
import in.ac.auttvl.hostel.service.LeaveManagementService;

@RestController
@RequestMapping("/leaveForm")
@CrossOrigin(origins = "http://localhost:4200")
public class LeaveManagementController {
	
	@Autowired
	private LeaveManagementService leaveService;
	
	// Add Leave Form
    @PostMapping("/addLeave")
    public LeaveManagement addLeave(@RequestBody LeaveManagement leave) {
        return leaveService.addLeave(leave);
    }

 // Get Leave by Id
    @GetMapping("/getLeaveById/{id}")
    public LeaveManagement getLeaveById(@PathVariable int id) {
        return leaveService.getLeaveById(id);
    }
    
    // Get Leave by Id
    @GetMapping("/getLeaveByRegNo/{id}")
    public List<LeaveManagement> getLeaveByRegNo(@PathVariable String id) {
        return leaveService.getLeaveByRegNo(id);
    }

    // Get Leave by name
    @GetMapping("/getLeaveByName/{name}")
    public  LeaveManagement getLeaveByName(@PathVariable String name) {
        return  leaveService.getLeaveByName(name);
    }

    // Update Leave
    @PutMapping("/updateLeave")
    public LeaveManagement updateLeave(@RequestBody LeaveManagement Leave) {
        return leaveService.updateLeave(Leave);
    }

    // Delete Leave
    @DeleteMapping("/deleteLeaveById/{id}")
    public boolean deleteLeaveById(@PathVariable int id) {
        return leaveService.deleteLeaveById(id);
    }

    // Get all Leave
    @GetMapping("/getAllLeave")
    public List<LeaveManagement> getAllLeave() {
        return leaveService.getAllLeave();
    }
    
 // Get all Leave single student
    @GetMapping("/getStudentLeave/{regNo}")
    public List<LeaveManagement> getStudentLeave(@PathVariable String regNo) {
        return leaveService.getStudentLeave(regNo);
    }



}
