package in.ac.auttvl.hostel.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import in.ac.auttvl.hostel.model.LeaveForm2;

public interface LeaveForm2Repository extends JpaRepository<LeaveForm2, Integer>{

	List<LeaveForm2> findByRegNo(String id);

	LeaveForm2 findByName(String name);


}
