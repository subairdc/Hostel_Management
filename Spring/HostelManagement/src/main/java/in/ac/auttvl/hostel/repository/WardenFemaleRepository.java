package in.ac.auttvl.hostel.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.ac.auttvl.hostel.model.WardenFemale;

public interface WardenFemaleRepository extends JpaRepository<WardenFemale, Integer>  {

	WardenFemale getByName(String name);

    WardenFemale findByName(String name);

	WardenFemale findByEmailAndPassword(String email, String password);

	WardenFemale findByEmail(String email);

	WardenFemale findByWardenId(String id);
}
