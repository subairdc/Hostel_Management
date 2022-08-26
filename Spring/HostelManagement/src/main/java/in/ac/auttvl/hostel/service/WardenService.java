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
    
    public Warden getWardenByWardenId(String id) {
		return wardenRepository.findByWardenId(id);
	}

    public Warden getWardenByName(String name) {
        return  wardenRepository.findByName(name);
    }

    public Warden updateWarden(Warden warden) {
    	Warden existingUser = wardenRepository.findById(warden.getId()).orElse(null);
        System.out.println(warden);
        if(existingUser == null) {	
            System.out.println("Warden not found");
            return  wardenRepository.save(warden);
        }else  {
        	existingUser.setName(warden.getName());
	        existingUser.setGender(warden.getGender());
	        existingUser.setDateOfBirth(warden.getDateOfBirth());
	        existingUser.setAge(warden.getAge());
	        existingUser.setBloodGrp(warden.getBloodGrp());
	           
	        existingUser.setWardenId(warden.getWardenId());
	        existingUser.setPhoneNo(warden.getPhoneNo());
	        existingUser.setEmail(warden.getEmail());
	        existingUser.setPassword(warden.getPassword());
	        existingUser.setConfirmPassword(warden.getConfirmPassword());
	            
	        existingUser.setStatus(warden.getStatus());
	        existingUser.setHostel(warden.getHostel());
	            
	        existingUser.setStreet(warden.getStreet());
	        existingUser.setCity(warden.getCity());
	        existingUser.setDistrict(warden.getDistrict());
	        existingUser.setState(warden.getState());
            existingUser.setPincode(warden.getPincode());
	            
	        existingUser.setVerify(warden.getVerify());

            wardenRepository.save(existingUser);
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


	public Warden getByMaxOrder() {
		return wardenRepository.getByMaxOrder();
	}

}
