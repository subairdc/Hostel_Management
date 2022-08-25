package in.ac.auttvl.hostel.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.ac.auttvl.hostel.model.StaffFemale;

public interface StaffFemaleRepository extends JpaRepository<StaffFemale, Integer>{

	StaffFemale findByEmailAndPassword(String email, String password);

	StaffFemale findByEmail(String email);

}
