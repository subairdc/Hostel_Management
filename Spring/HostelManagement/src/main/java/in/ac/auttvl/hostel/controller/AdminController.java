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

import in.ac.auttvl.hostel.model.Admin;
import in.ac.auttvl.hostel.service.AdminService;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/admin")
public class AdminController {

	@Autowired
    private AdminService adminService;

    // Add new Admin
    @PostMapping("/addAdmin")
    public Admin addAdmin(@RequestBody Admin admin) {
        return adminService.addAdmin(admin);
    }

    // Add more than 1 Admin
    @PostMapping("/addAdmins")
    public List<Admin> addAllAdmins(@RequestBody List<Admin> admins) {
        return adminService.addAllAdmins(admins);
    }

    // Get Admin by Id
    @GetMapping("/getAdminById/{id}")
    public Admin getAdminById(@PathVariable int id) {
        return adminService.getAdminById(id);
    }
    
 // Get Admin by Id
    @GetMapping("/getAdminByAdminId/{id}")
    public Admin getAdminByAdminId(@PathVariable String id) {
        return adminService.getAdminByAdminId(id);
    }

    // Get Admin by name
    @GetMapping("/getAdminByName/{name}")
    public  Admin getAdminByName(@PathVariable String name) {
        return  adminService.getAdminByName(name);
    }

    // Update Admin
    @PutMapping("/updateAdmin")
    public Admin updateAdmin(@RequestBody Admin admin) {
        return adminService.updateAdmin(admin);
    }

    // Delete Admin
    @DeleteMapping("/deleteAdminById/{id}")
    public boolean deleteAdminByID(@PathVariable int id) {
        return adminService.deleteAdminById(id);
    }

    // Get all Admin
    @GetMapping("/getAll")
    public List<Admin> getAllAdmin() {
        return adminService.getAllAdmins();
    }

}
