package in.ac.auttvl.hostel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
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
}
