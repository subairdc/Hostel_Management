package in.ac.auttvl.hostel.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.ac.auttvl.hostel.model.LeaveManagement;
import in.ac.auttvl.hostel.repository.LeaveManagementRepository;

@Service
public class LeaveManagementService {
	
	@Autowired
 	private LeaveManagementRepository leaveManagementRepository;
	

	public LeaveManagement addLeave(LeaveManagement leaveManagement) {
        return leaveManagementRepository.save(leaveManagement);
    }

	public LeaveManagement getLeaveById(int id) {
		return leaveManagementRepository.findById(id).orElse(null);
	}

	public List<LeaveManagement> getLeaveByRegNo(String id) {
		return leaveManagementRepository.findByRegNo(id);
	}

	public LeaveManagement getLeaveByName(String name) {
		return  leaveManagementRepository.findByName(name);
	}

	public LeaveManagement updateLeave(LeaveManagement leaveManagement) {
		LeaveManagement existingLeaveManagement = leaveManagementRepository.findById(leaveManagement.getId()).orElse(null);
        System.out.println(leaveManagement);
        if(existingLeaveManagement == null) {	
            System.out.println("Student not found");
            return  leaveManagementRepository.save(leaveManagement);
        }else  {
        	existingLeaveManagement.setName(leaveManagement.getName());
        	existingLeaveManagement.setRegNo(leaveManagement.getRegNo());
        	existingLeaveManagement.setRoomNo(leaveManagement.getRoomNo());
        	existingLeaveManagement.setStaff(leaveManagement.getStaff());
        	existingLeaveManagement.setParent(leaveManagement.getParent());
        	existingLeaveManagement.setWarden(leaveManagement.getWarden());
        	existingLeaveManagement.setRemark(leaveManagement.getRemark());
        	existingLeaveManagement.setLeaveStatus(leaveManagement.getLeaveStatus());
        	leaveManagementRepository.save(existingLeaveManagement);
        }
        return leaveManagement;
	}

	public boolean deleteLeaveById(int id) {
		LeaveManagement existingLeaveManagement = leaveManagementRepository.getById(id);
        if(existingLeaveManagement != null) {
        	leaveManagementRepository.deleteById(id);
            return true;
        }
        return false;
	}

	public List<LeaveManagement> getAllLeave() {
		return leaveManagementRepository.findAll();
	}
	
	
	public List<LeaveManagement> getStudentLeave(String regNo) {
		return leaveManagementRepository.findByRegNo(regNo);
	}


}
