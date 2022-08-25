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
	 	@Autowired
	 	private StudentMaleRepository studentMaleRepository;
	 	@Autowired
	 	private StudentFemaleRepository studentFemaleRepository;
	 	
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
	    	Student existingStudent = studentRepository.findById(student.getId()).orElse(null);
	        System.out.println(student);
	        if(existingStudent == null) {	
	            System.out.println("Student not found");
	            return  studentRepository.save(student);
	        }else  {
	            existingStudent.setName(student.getName());
	            existingStudent.setGender(student.getGender());
	            existingStudent.setDateOfBirth(student.getDateOfBirth());
	            existingStudent.setAge(student.getAge());
	            existingStudent.setBloodGrp(student.getBloodGrp());
	            
	            existingStudent.setDegree(student.getDegree());
	            existingStudent.setDept(student.getDept());
	            existingStudent.setYear(student.getYear());
	            existingStudent.setSem(student.getSem());
	            
	            existingStudent.setRegNo(student.getRegNo());
	            existingStudent.setPhoneNo(student.getPhoneNo());
	            existingStudent.setEmail(student.getEmail());
	            existingStudent.setPassword(student.getPassword());
	            existingStudent.setConfirmPassword(student.getConfirmPassword());
	            existingStudent.setStatus(student.getStatus());
	            existingStudent.setHostel(student.getHostel());
	            existingStudent.setRoomNo(student.getRoomNo());
	            existingStudent.setStreet(student.getStreet());
	            existingStudent.setCity(student.getCity());
	            existingStudent.setDistrict(student.getDistrict());
	            existingStudent.setState(student.getState());
	            existingStudent.setPincode(student.getPincode());
	            
	            existingStudent.setGuardianName(student.getGuardianName());
	            existingStudent.setGuardianRelation(student.getGuardianRelation());
	            existingStudent.setGuardianAddress(student.getGuardianAddress());
	            existingStudent.setGuardianPhoneNo(student.getGuardianPhoneNo());
	            
	            studentRepository.save(existingStudent);
	        }
	        return student;
	    }

	    public boolean deleteStudentById(int id) {
	    	Student existingStudent = studentRepository.getById(id);
	        if(existingStudent != null) {
	            studentRepository.deleteById(id);
	            return true;
	        }
	        return false;
	    }

	    public List<Student> getAllStudents() {
	        return studentRepository.findAll();
	    }
	    

		public Student getByMaxOrder() {
			return studentRepository.getByMaxOrder();
		}

//		public Student addVerifiedStudent(Student student) {
//	    	Student existingStudent = studentRepository.findById(student.getId()).orElse(null);
//	    	if(existingStudent.getHostel() == "Pothigai Boys Hostel") {
//	    		return studentMaleRepository.save(student);
//	    	}else if(existingStudent.getHostel() == "Thamirabharani Girls Hostel")
//	    		return studentFemaleRepository.save(student);
//			return null;
//		}

		public StudentMale addVerifiedStuMale(StudentMale studentMale) {
			return studentMaleRepository.save(studentMale);
		}

		public StudentFemale addVerifiedStuFemale(StudentFemale studentFemale) {
			return studentFemaleRepository.save(studentFemale);
		}

}
