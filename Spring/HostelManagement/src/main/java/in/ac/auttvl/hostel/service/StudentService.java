package in.ac.auttvl.hostel.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.ac.auttvl.hostel.model.Student;
import in.ac.auttvl.hostel.model.StudentFemale;
import in.ac.auttvl.hostel.model.StudentMale;
import in.ac.auttvl.hostel.repository.StudentFemaleRepository;
import in.ac.auttvl.hostel.repository.StudentMaleRepository;
import in.ac.auttvl.hostel.repository.StudentRepository;

@Service
public class StudentService {
	
	 	@Autowired
	    private StudentRepository studentRepository;
//	 	@Autowired
//	 	private StudentMaleRepository studentMaleRepository;
//	 	@Autowired
//	 	private StudentFemaleRepository studentFemaleRepository;
	 	
	    public Student addStudent(Student student) {
	        return studentRepository.save(student);
	    }

	    public List<Student> addAllStudents(List<Student> students) {
	        return studentRepository.saveAll(students);
	    }

	    public Student getStudentById(int id) {
	        return studentRepository.findById(id).orElse(null);
	    }
	    
	    public Student getStudentByRegNo(String id) {
			return studentRepository.findByRegNo(id);
		}

	    public Student getStudentByName(String name) {
	        return  studentRepository.findByName(name);
	    }

	    public Student updateStudent(Student student) {
	    	Student existingUser = studentRepository.findById(student.getId()).orElse(null);
	        System.out.println(student);
	        if(existingUser == null) {	
	            System.out.println("Student not found");
	            return  studentRepository.save(student);
	        }else  {
	            existingUser.setName(student.getName());
	            existingUser.setGender(student.getGender());
	            existingUser.setDateOfBirth(student.getDateOfBirth());
	            existingUser.setAge(student.getAge());
	            existingUser.setBloodGrp(student.getBloodGrp());
	            
	            existingUser.setDegree(student.getDegree());
	            existingUser.setDept(student.getDept());
	            existingUser.setYear(student.getYear());
	            existingUser.setSem(student.getSem());
	            
	            existingUser.setRegNo(student.getRegNo());
	            existingUser.setPhoneNo(student.getPhoneNo());
	            existingUser.setEmail(student.getEmail());
	            existingUser.setPassword(student.getPassword());
	            existingUser.setConfirmPassword(student.getConfirmPassword());
	            
	            existingUser.setStatus(student.getStatus());
	            existingUser.setHostel(student.getHostel());
	            existingUser.setRoomNo(student.getRoomNo());
	            
	            existingUser.setStreet(student.getStreet());
	            existingUser.setCity(student.getCity());
	            existingUser.setDistrict(student.getDistrict());
	            existingUser.setState(student.getState());
	            existingUser.setPincode(student.getPincode());
	            
	            existingUser.setFatherName(student.getFatherName());
	            existingUser.setFatherPhoneNo(student.getFatherPhoneNo());
	            existingUser.setMotherName(student.getMotherName());
	            existingUser.setMotherPhoneNo(student.getMotherPhoneNo());
	            
	            existingUser.setGuardianName(student.getGuardianName());
	            existingUser.setGuardianRelation(student.getGuardianRelation());
	            existingUser.setGuardianAddress(student.getGuardianAddress());
	            existingUser.setGuardianPhoneNo(student.getGuardianPhoneNo());
	            
	            existingUser.setVerify(student.getVerify());
	            studentRepository.save(existingUser);
	        }
	        return student;
	    }

	    public boolean deleteStudentById(int id) {
	    	Student existingUser = studentRepository.getById(id);
	        if(existingUser != null) {
	            studentRepository.deleteById(id);
	            return true;
	        }
	        return false;
	    }

	    public List<Student> getAllStudents() {
	        return studentRepository.findAll();
	    }

//		public Student addVerifiedStudent(Student student) {
//	    	Student existingUser = studentRepository.findById(student.getId()).orElse(null);
//	    	if(existingUser.getHostel() == "Pothigai Boys Hostel") {
//	    		return studentMaleRepository.save(student);
//	    	}else if(existingUser.getHostel() == "Thamirabharani Girls Hostel")
//	    		return studentFemaleRepository.save(student);
//			return null;
//		}

//		public StudentMale addVerifiedStuMale(StudentMale studentMale) {
//			return studentMaleRepository.save(studentMale);
//		}
//
//		public StudentFemale addVerifiedStuFemale(StudentFemale studentFemale) {
//			return studentFemaleRepository.save(studentFemale);
//		}

}
