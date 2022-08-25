package in.ac.auttvl.hostel.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.ac.auttvl.hostel.model.Student;
import in.ac.auttvl.hostel.model.StudentFemale;

public interface StudentFemaleRepository extends JpaRepository<StudentFemale,Integer>{

	StudentFemale findByEmailAndPassword(String email, String password);

	StudentFemale findByEmail(String email);

}
