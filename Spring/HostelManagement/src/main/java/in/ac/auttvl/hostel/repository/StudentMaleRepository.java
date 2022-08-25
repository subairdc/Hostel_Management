package in.ac.auttvl.hostel.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.ac.auttvl.hostel.model.Student;
import in.ac.auttvl.hostel.model.StudentMale;

public interface StudentMaleRepository extends JpaRepository<StudentMale,Integer> {

	StudentMale findByEmailAndPassword(String email, String password);

	StudentMale findByEmail(String email);

}
