package in.ac.auttvl.hostel.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.ac.auttvl.hostel.model.Warden;

public interface WardenRepository extends JpaRepository<Warden, java.lang.String> {
	
	Warden getByName(String name);

    Warden findByName(String name);

}
