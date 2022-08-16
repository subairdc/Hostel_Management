package in.ac.auttvl.hostel.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.ac.auttvl.hostel.model.Room;
import in.ac.auttvl.hostel.repository.RoomRepository;

@Service
public class RoomService {

	@Autowired
	private RoomRepository roomRepository; 
	
	public Room addRoom(Room room) {
		roomRepository.save(room);
		return null;
	}

}
