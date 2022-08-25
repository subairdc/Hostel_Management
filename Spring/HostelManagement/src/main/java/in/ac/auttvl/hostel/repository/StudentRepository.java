package in.ac.auttvl.hostel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import in.ac.auttvl.hostel.model.Student;

public interface StudentRepository extends JpaRepository<Student,Integer>{
	
	Student getByName(String name);

    Student findByName(String name);

	Student findByEmail(String email);

	Student findByEmailAndPassword(String email, String password);

	@Query(value = "select max(order_no) from warden" , nativeQuery=true)  //name case as per java classs
	Student getByMaxOrder();
	
	Student findByEmailAndRegNo(String email, String regNo);

	Student findByRegNo(String regNo);

}
