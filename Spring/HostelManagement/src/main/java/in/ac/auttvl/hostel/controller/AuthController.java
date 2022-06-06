package in.ac.auttvl.hostel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.ac.auttvl.hostel.model.Staff;
import in.ac.auttvl.hostel.service.AuthService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {
	 	@Autowired
	    private AuthService authService;

	    @PostMapping("/register")
	    public Staff Register(@RequestBody Staff staff) {

	        return  authService.register(staff);

	    }

	    @PostMapping("/login")
	    public Staff login(@RequestBody Staff staff) {

	        return authService.login(staff);
	    }
}
