package in.ac.auttvl.hostel.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.ac.auttvl.hostel.model.Student;

public interface StudentRepository extends JpaRepository<Student,java.lang.String>{
	
	Student getByName(String name);

    Student findByName(String name);

}
