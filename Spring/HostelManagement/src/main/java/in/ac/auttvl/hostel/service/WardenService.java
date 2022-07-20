package in.ac.auttvl.hostel.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.ac.auttvl.hostel.model.Warden;
import in.ac.auttvl.hostel.repository.WardenRepository;

@Service
public class WardenService {
	
	@Autowired
    private WardenRepository wardenRepository;

    public Warden addWarden(Warden warden) {
        return wardenRepository.save(warden);
    }

    public List<Warden> addAllWardens(List<Warden> wardens) {
        return wardenRepository.saveAll(wardens);
    }

    public Warden getWardenById(int id) {
        return wardenRepository.findById(id).orElse(null);
    }

    public Warden getWardenByName(String name) {
        return  wardenRepository.findByName(name);
    }

    public Warden updateWarden(Warden warden) {
    	Warden existingWarden = wardenRepository.findById(warden.getId()).orElse(null);
        System.out.println(warden);
        if(existingWarden == null) {	
            System.out.println("Warden not found");
            return  wardenRepository.save(warden);
        }else  {
            existingWarden.setName(warden.getName());
            existingWarden.setEmail(warden.getEmail());
            existingWarden.setPassword(warden.getPassword());
            wardenRepository.save(existingWarden);
        }
        return warden;
    }

    public boolean deleteWardenById(int id) {
    	Warden existingWarden = wardenRepository.getById(id);
        if(existingWarden != null) {
        	wardenRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public List<Warden> getAllWardens() {
        return wardenRepository.findAll();
    }


	public Warden getMaxOrder() {
		return wardenRepository.getMaxOrder();
	}


}
