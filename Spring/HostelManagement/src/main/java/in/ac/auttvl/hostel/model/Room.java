package in.ac.auttvl.hostel.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Room {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(length =100)
	private int id;
	private int roomNo;
	
	private String studentId1;
	private String stu1FromDate;
	private String stu1LeaveDate;

	
	
	public Room(int id, int roomNo, String studentId1, String stu1FromDate, String stu1LeaveDate) {
		super();
		this.id = id;
		this.roomNo = roomNo;
		this.studentId1 = studentId1;
		this.stu1FromDate = stu1FromDate;
		this.stu1LeaveDate = stu1LeaveDate;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getRoomNo() {
		return roomNo;
	}
	public void setRoomNo(int roomNo) {
		this.roomNo = roomNo;
	}
	public String getStudentId1() {
		return studentId1;
	}
	public void setStudentId1(String studentId1) {
		this.studentId1 = studentId1;
	}
	public String getStu1FromDate() {
		return stu1FromDate;
	}
	public void setStu1FromDate(String stu1FromDate) {
		this.stu1FromDate = stu1FromDate;
	}
	public String getStu1LeaveDate() {
		return stu1LeaveDate;
	}
	public void setStu1LeaveDate(String stu1LeaveDate) {
		this.stu1LeaveDate = stu1LeaveDate;
	}
	

}
