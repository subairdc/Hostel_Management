package in.ac.auttvl.hostel.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.ac.auttvl.hostel.model.WardenMale;

public interface WardenMaleRepository extends JpaRepository<WardenMale, Integer>{

	WardenMale getByName(String name);

    WardenMale findByName(String name);

	WardenMale findByEmailAndPassword(String email, String password);

	WardenMale findByEmail(String email);

	WardenMale findByWardenId(String id);
}
