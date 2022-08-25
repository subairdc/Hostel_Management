package in.ac.auttvl.hostel.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.ac.auttvl.hostel.model.StaffMale;

public interface StaffMaleRepository extends JpaRepository<StaffMale, Integer>{

	StaffMale findByEmailAndPassword(String email, String password);

	StaffMale findByEmail(String email);

}
