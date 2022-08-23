package in.ac.auttvl.hostel.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.ac.auttvl.hostel.model.LeaveForm;
import in.ac.auttvl.hostel.model.LeaveForm2;
import in.ac.auttvl.hostel.model.Student;
import in.ac.auttvl.hostel.repository.LeaveForm2Repository;
import in.ac.auttvl.hostel.repository.LeaveFormRepository;

@Service
public class LeaveForm2Service {
	
	@Autowired
 	private LeaveFormRepository leaveFormRepository;
	
	@Autowired
 	private LeaveForm2Repository leaveForm2Repository; 

	public LeaveForm addLeaveForm(LeaveForm leaveForm) {
        return leaveFormRepository.save(leaveForm);
    }

	public LeaveForm2 addLeaveForm2(LeaveForm2 leaveForm2) {
		
        return leaveForm2Repository.save(leaveForm2);
	}

	public LeaveForm2 getLeaveForm2ById(int id) {
		return leaveForm2Repository.findById(id).orElse(null);
	}

	public LeaveForm2 getLeaveForm2ByRegNo(String id) {
		return leaveForm2Repository.findByRegNo(id);
	}

	public LeaveForm2 getLeaveForm2ByName(String name) {
		return  leaveForm2Repository.findByName(name);
	}

	public LeaveForm2 updateLeaveForm2(LeaveForm2 leaveForm2) {
		LeaveForm2 existingLeaveForm = leaveForm2Repository.findById(leaveForm2.getId()).orElse(null);
        System.out.println(leaveForm2);
        if(existingLeaveForm == null) {	
            System.out.println("Student not found");
            return  leaveForm2Repository.save(leaveForm2);
        }else  {
        	existingLeaveForm.setName(leaveForm2.getName());
        	existingLeaveForm.setRegNo(leaveForm2.getRegNo());
        	existingLeaveForm.setRoomNo(leaveForm2.getRoomNo());
        	existingLeaveForm.setStaff(leaveForm2.getStaff());
        	existingLeaveForm.setParent(leaveForm2.getParent());
        	existingLeaveForm.setWarden(leaveForm2.getWarden());
        	existingLeaveForm.setRemark(leaveForm2.getRemark());
        	existingLeaveForm.setLeaveStatus(leaveForm2.getLeaveStatus());
        	leaveForm2Repository.save(existingLeaveForm);
        }
        return leaveForm2;
	}

	public boolean deleteLeaveForm2ById(int id) {
		LeaveForm2 existingLeaveForm = leaveForm2Repository.getById(id);
        if(existingLeaveForm != null) {
        	leaveForm2Repository.deleteById(id);
            return true;
        }
        return false;
	}

	public List<LeaveForm2> getAllLeaveForm2() {
		return leaveForm2Repository.findAll();
	}

}
