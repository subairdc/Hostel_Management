package in.ac.auttvl.hostel.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.ac.auttvl.hostel.model.Warden;

public interface WardenRepository extends JpaRepository<Warden, Integer> {
	
	Warden getByName(String name);

    Warden findByName(String name);

	Warden findByEmailAndPassword(String email, String password);

	Warden findByEmail(String email);

}
