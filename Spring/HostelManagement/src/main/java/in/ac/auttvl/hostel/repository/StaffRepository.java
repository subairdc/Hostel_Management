package in.ac.auttvl.hostel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import in.ac.auttvl.hostel.model.Staff;
import in.ac.auttvl.hostel.model.Student;
import in.ac.auttvl.hostel.model.Admin;

public interface StaffRepository extends JpaRepository<Staff, java.lang.String>{

	Staff findByEmail(String email);
	
	@Query(value = "select name from Staff  " , nativeQuery=true)  //name case as per java classs
	Staff findByName(String name);
	//Staff findById(String email);
	
	//Staff getById(String email);
	//Staff getByName(String name);
	
	//Staff deleteByIdEmail(String email);
}
