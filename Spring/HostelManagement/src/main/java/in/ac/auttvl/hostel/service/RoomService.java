package in.ac.auttvl.hostel.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.ac.auttvl.hostel.model.Room;
import in.ac.auttvl.hostel.model.Student;
import in.ac.auttvl.hostel.repository.RoomRepository;

@Service
public class RoomService {

	@Autowired
	private RoomRepository roomRepository; 
	
	public Room addRoom(Room room) {
		return roomRepository.save(room);
	}

	public Room updateRoom(Room room) {
		
		Room existingRoom = roomRepository.findById(room.getId()).orElse(null);
		if(existingRoom == null) {
			return roomRepository.save(room);
		}else {
			existingRoom.setStudent1(room.getStudent1());
			existingRoom.setStu1Name(room.getStu1Name());
			existingRoom.setStu1FromDate(room.getStu1FromDate());
			existingRoom.setStu1LeaveDate(room.getStu1LeaveDate());
			
			existingRoom.setStudent2(room.getStudent2());
			existingRoom.setStu2Name(room.getStu2Name());
			existingRoom.setStu2FromDate(room.getStu2FromDate());
			existingRoom.setStu2LeaveDate(room.getStu2LeaveDate());
			
			existingRoom.setStudent3(room.getStudent3());
			existingRoom.setStu3Name(room.getStu3Name());
			existingRoom.setStu3FromDate(room.getStu3FromDate());
			existingRoom.setStu3LeaveDate(room.getStu3LeaveDate());
			
			existingRoom.setStudent4(room.getStudent4());
			existingRoom.setStu4Name(room.getStu4Name());
			existingRoom.setStu4FromDate(room.getStu4FromDate());
			existingRoom.setStu4LeaveDate(room.getStu4LeaveDate());
			
			existingRoom.setUpdatedBy(room.getUpdatedBy());
			roomRepository.save(existingRoom);
		}
		return room;
	}
	
	public List<Room> getAllRooms() {
		return roomRepository.findAll();
	}

}
