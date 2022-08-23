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

import in.ac.auttvl.hostel.model.LeaveForm;
import in.ac.auttvl.hostel.model.LeaveForm2;
import in.ac.auttvl.hostel.service.LeaveForm2Service;

@RestController
@RequestMapping("/leaveForm")
@CrossOrigin(origins = "http://localhost:4200")
public class LeaveForm2Controller {
	
	@Autowired
	private LeaveForm2Service leaveForm2Service;
	
	// Add Leave Form
    @PostMapping("/addLeaveForm")
    public LeaveForm addLeaveForm(@RequestBody LeaveForm leaveForm) {
        return leaveForm2Service.addLeaveForm(leaveForm);
    }
 
 // Add Leave Form2
    @PostMapping("/addLeaveForm2")
    public LeaveForm2 addLeaveForm2(@RequestBody LeaveForm2 leaveForm2) {
        return leaveForm2Service.addLeaveForm2(leaveForm2);
    }

 // Get LeaveForm2 by Id
    @GetMapping("/getLeaveForm2ById/{id}")
    public LeaveForm2 getLeaveForm2ById(@PathVariable int id) {
        return leaveForm2Service.getLeaveForm2ById(id);
    }
    
    // Get LeaveForm2 by Id
    @GetMapping("/getLeaveForm2ByRegNo/{id}")
    public LeaveForm2 getLeaveForm2ByRegNo(@PathVariable String id) {
        return leaveForm2Service.getLeaveForm2ByRegNo(id);
    }

    // Get LeaveForm2 by name
    @GetMapping("/getLeaveForm2ByName/{name}")
    public  LeaveForm2 getLeaveForm2ByName(@PathVariable String name) {
        return  leaveForm2Service.getLeaveForm2ByName(name);
    }

    // Update LeaveForm2
    @PutMapping("/updateLeaveForm2")
    public LeaveForm2 updateLeaveForm2(@RequestBody LeaveForm2 LeaveForm2) {
        return leaveForm2Service.updateLeaveForm2(LeaveForm2);
    }

    // Delete LeaveForm2
    @DeleteMapping("/deleteLeaveForm2ById/{id}")
    public boolean deleteLeaveForm2ById(@PathVariable int id) {
        return leaveForm2Service.deleteLeaveForm2ById(id);
    }

    // Get all LeaveForm2
    @GetMapping("/getAllLeaveForm2")
    public List<LeaveForm2> getAllLeaveForm2() {
        return leaveForm2Service.getAllLeaveForm2();
    }

}
