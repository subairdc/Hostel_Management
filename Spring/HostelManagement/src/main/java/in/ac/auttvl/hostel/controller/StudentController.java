package in.ac.auttvl.hostel.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.ac.auttvl.hostel.model.Student;
import in.ac.auttvl.hostel.service.StudentService;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "http://localhost:4200")
public class StudentController {
	
	@Autowired
    private StudentService studentService;

    // Add new student
    @PostMapping("/addStudent")
    public Student addStudent(@RequestBody Student student) {
        return studentService.addStudent(student);
    }

    // Add more than 1 student
    @PostMapping("/addStudents")
    public List<Student> addAllStudents(@RequestBody List<Student> students) {
        return studentService.addAllStudents(students);
    }

    // Get student by Id
    @GetMapping("/getStudentById/{id}")
    public Student getStudentById(@PathVariable int id) {
        return studentService.getStudentById(id);
    }
    
    // Get student by Id
    @GetMapping("/getStudentByRegNo/{id}")
    public Student getStudentByRegNo(@PathVariable String id) {
        return studentService.getStudentByRegNo(id);
    }

    // Get student by name
    @GetMapping("/getStudentByName/{name}")
    public  Student getStudentByName(@PathVariable String name) {
        return  studentService.getStudentByName(name);
    }

    // Update student
    @PutMapping("/updateStudent")
    public Student updateStudent(@RequestBody Student student) {
        return studentService.updateStudent(student);
    }

    // Delete student
    @DeleteMapping("/deleteStudentById/{id}")
    public boolean deleteStudentById(@PathVariable int id) {
        return studentService.deleteStudentById(id);
    }

    // Get all student
    @GetMapping("/getAllStudents")
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }
    
    
 //Get Student Max Order
    @GetMapping("/getMaxOrder")
    public  Student getMaxOrder() {
        return studentService.getByMaxOrder();
    }
}
