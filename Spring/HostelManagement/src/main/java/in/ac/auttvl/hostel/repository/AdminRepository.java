package in.ac.auttvl.hostel.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.ac.auttvl.hostel.model.Admin;


public interface AdminRepository extends JpaRepository<Admin, java.lang.String> {
	
	Admin getByName(String name);

	Admin findByName(String name);
}
