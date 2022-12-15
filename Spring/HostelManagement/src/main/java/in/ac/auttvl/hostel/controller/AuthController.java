package in.ac.auttvl.hostel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.ac.auttvl.hostel.model.Admin;
import in.ac.auttvl.hostel.model.Staff;
import in.ac.auttvl.hostel.model.Student;
import in.ac.auttvl.hostel.model.Warden;
import in.ac.auttvl.hostel.service.AuthService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {
	 	@Autowired
	    private AuthService authService;

	    @PostMapping("/staffRegister")
	    public Staff staffRegister(@RequestBody Staff staff) {

	        return  authService.staffRegister(staff);

	    }

	    @PostMapping("/staffLogin")
	    public Staff staffLogin(@RequestBody Staff staff) {

	        return authService.staffLogin(staff);
	    }
	    
	    
	    
	    //Student Auth controller
	    @PostMapping("/studentRegister")
	    public Student studentRegister(@RequestBody Student student) {

	        return  authService.studentRegister(student);

	    }

	    @PostMapping("/studentLogin")
	    public Student studentLogin(@RequestBody Student student) {

	        return authService.studentLogin(student);
	    }
	    
	    
	    
	    //Warden Auth Controller
	    @PostMapping("/wardenRegister")
	    public Warden wardenRegister(@RequestBody Warden warden) {

	        return  authService.wardenRegister(warden);

	    }

	    @PostMapping("/wardenLogin")
	    public Warden wardenLogin(@RequestBody Warden warden) {

	        return authService.wardenLogin(warden);
	    }
	    
	    
	  //Admin Auth Controller
	    @PostMapping("/adminRegister")
	    public Admin adminRegister(@RequestBody Admin admin) {

	        return  authService.adminRegister(admin);

	    }

	    @PostMapping("/adminLogin")
	    public Admin adminLogin(@RequestBody Admin admin) {

	        return authService.adminLogin(admin);
	    }
	    
	 // Get Password by Email and regNo      Student
	    @PostMapping("/stuForgetPassword")
	    public  Student stuForgetPassword(@RequestBody Student student) {
	        return  authService.getStudentByEmailAndRegNo(student);
	    }
	    
	 // Get student by regNo
	    @PostMapping("/stuForgetEmail")
	    public  Student stuForgetEmail(@RequestBody Student student) {
	        return  authService.getStudentByRegNo(student);
	    }
	    
	 // Get Password by Email and regNo         Staff
	    @PostMapping("/staffForgetPassword")
	    public  Staff staffForgetPassword(@RequestBody Staff staff) {
	        return  authService.getStaffByEmailAndStaffId(staff);
	    }
	    
	 // Get student by regNo
	    @PostMapping("/staffForgetEmail")
	    public  Staff stuForgetEmail(@RequestBody Staff staff) {
	        return  authService.getStaffByStaffId(staff);
	    }
	    
	 // Get Password by Email and regNo           Warden
	    @PostMapping("/wardenForgetPassword")
	    public  Warden wardenForgetPassword(@RequestBody Warden warden) {
	        return  authService.getWardenByEmailAndWardenId(warden);
	    }
	    
	 // Get student by regNo
	    @PostMapping("/wardenForgetEmail")
	    public  Warden wardenForgetEmail(@RequestBody Warden warden) {
	        return  authService.getWardenByWardenId(warden);
	    }
	    
	 // Get Password by Email and regNo             Admin
	    @PostMapping("/adminForgetPassword")
	    public  Admin adminForgetPassword(@RequestBody Admin admin) {
	        return  authService.getAdminByEmailAndAdminId(admin);
	    }
	    
	 // Get student by regNo
	    @PostMapping("/adminForgetEmail")
	    public  Admin adminForgetEmail(@RequestBody Admin admin) {
	        return  authService.getAdminByAdminId(admin);
	    }    
	    
	 //Change Password                                 Student\
	    @PutMapping("/studentChangePassword")
	    public Student stuChangePassword(@RequestBody Student student) {

	        return authService.stuChangePassword(student);
	    }
}
