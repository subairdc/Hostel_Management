package in.ac.auttvl.hostel.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.ac.auttvl.hostel.model.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer> {
	
	Admin getByName(String name);

	Admin findByName(String name);

	Admin findByEmailAndPassword(String email, String password);

	Admin findByEmail(String email);

	Admin findByAdminId(String id);
}
