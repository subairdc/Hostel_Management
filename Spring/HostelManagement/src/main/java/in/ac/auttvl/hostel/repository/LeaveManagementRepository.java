package in.ac.auttvl.hostel.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import in.ac.auttvl.hostel.model.LeaveManagement;

public interface LeaveManagementRepository extends JpaRepository<LeaveManagement, Integer>{

	List<LeaveManagement> findByRegNo(String id);

	LeaveManagement findByName(String name);

}
