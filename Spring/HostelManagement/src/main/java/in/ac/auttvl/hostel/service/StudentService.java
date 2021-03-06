package in.ac.auttvl.hostel.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.ac.auttvl.hostel.model.LeaveForm;
import in.ac.auttvl.hostel.model.Student;
import in.ac.auttvl.hostel.repository.LeaveFormRepository;
import in.ac.auttvl.hostel.repository.StudentRepository;

@Service
public class StudentService {
	
	 	@Autowired
	    private StudentRepository studentRepository;

	    public Student addStudent(Student student) {
	        return studentRepository.save(student);
	    }

	    public List<Student> addAllStudents(List<Student> students) {
	        return studentRepository.saveAll(students);
	    }

	    public Student getStudentById(int id) {
	        return studentRepository.findById(id).orElse(null);
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
	            existingStudent.setEmail(student.getEmail());
	            existingStudent.setPassword(student.getPassword());
	            existingStudent.setPhoneNo(student.getPhoneNo());
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
	    
	    
	    @Autowired
	    private LeaveFormRepository leaveFormRepository;

	    public LeaveForm addLeaveForm(LeaveForm leaveForm) {
	        return leaveFormRepository.save(leaveForm);
	    }
}
