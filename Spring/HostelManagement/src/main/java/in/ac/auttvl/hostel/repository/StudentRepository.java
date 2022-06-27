package in.ac.auttvl.hostel.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.ac.auttvl.hostel.model.Staff;
import in.ac.auttvl.hostel.model.Student;

public interface StudentRepository extends JpaRepository<Student,Integer>{
	
	Student getByName(String name);

    Student findByName(String name);

	Student findByEmail(String email);

	Student findByEmailAndPassword(String email, String password);

}
