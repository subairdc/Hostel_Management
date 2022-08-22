package in.ac.auttvl.hostel.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.ac.auttvl.hostel.model.Room;
import in.ac.auttvl.hostel.model.Student;
import in.ac.auttvl.hostel.service.RoomService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/room")
public class RoomController {
	
	@Autowired
    private RoomService roomService;
	
	// Add new Room
    @PostMapping("/addRoom")
    public Room addRoom(@RequestBody Room room) {
        return roomService.addRoom(room);
    }
    
    //Update Room
    @PutMapping("/updateRoom")
    public Room updateRoom(@RequestBody Room room) {
    	return roomService.updateRoom(room);
    }
    
    //Get All Room
    @GetMapping("/getAllRooms")
    public List<Room> getAllRooms() {
    	return roomService.getAllRooms();
    }

}
