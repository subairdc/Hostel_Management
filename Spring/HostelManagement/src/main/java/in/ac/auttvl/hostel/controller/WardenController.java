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


import in.ac.auttvl.hostel.model.Warden;
import in.ac.auttvl.hostel.service.WardenService;

@RestController
@RequestMapping("/warden")
@CrossOrigin(origins = "http://localhost:4200")
public class WardenController {
	
	@Autowired
	private WardenService wardenService;
		
		// Add new warden
	    @PostMapping("/addWarden")
	    public Warden addWarden(@RequestBody Warden warden) {
	        return wardenService.addWarden(warden);
	    }

	    // Add more than 1 Warden
	    @PostMapping("/addWardens")
	    public List<Warden> addAllWardens(@RequestBody List<Warden> wardens) {
	        return wardenService.addAllWardens(wardens);
	    }

	    // Get Warden by Id
	    @GetMapping("/getWardenById/{id}")
	    public Warden getWardenById(@PathVariable int id) {
	        return wardenService.getWardenById(id);
	    }

	    // Get warden by name
	    @GetMapping("/getWardenByName/{name}")
	    public  Warden getWardenByName(@PathVariable String name) {
	        return  wardenService.getWardenByName(name);
	    }

	    // Update warden
	    @PutMapping("/updateWarden")
	    public Warden updateWarden(@RequestBody Warden warden) {
	        return wardenService.updateWarden(warden);
	    }

	    // Delete warden
	    @DeleteMapping("/deleteWardenById/{id}")
	    public boolean deleteWardenById(@PathVariable int id) {
	        return wardenService.deleteWardenById(id);
	    }

	    // Get all warden
	    @GetMapping("/getAll")
	    public List<Warden> getAllWardens() {
	        return wardenService.getAllWardens();
	    }
	    
	 // Get warden Max Order
	    @GetMapping("/getMaxOrder")
	    public  Warden getMaxOrder() {
	        return wardenService.getByMaxOrder();
	    }
}
