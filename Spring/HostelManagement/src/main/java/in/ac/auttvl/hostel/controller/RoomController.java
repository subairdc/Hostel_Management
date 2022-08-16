package in.ac.auttvl.hostel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
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

}
