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
	
	private String student1;
	private String stu1Name;
	private String stu1FromDate;
	private String stu1LeaveDate;
	
	private String student2;
	private String stu2Name;
	private String stu2FromDate;
	private String stu2LeaveDate;
	
	private String student3;
	private String stu3Name;
	private String stu3FromDate;
	private String stu3LeaveDate;
	
	private String student4;
	private String stu4Name;
	private String stu4FromDate;
	private String stu4LeaveDate;

	private String updatedBy;
	
	
	public Room() {
	
	}
	
	
	public Room(int id, int roomNo, String student1, String stu1Name, String stu1FromDate, String stu1LeaveDate,
			String student2, String stu2Name, String stu2FromDate, String stu2LeaveDate, String student3,
			String stu3Name, String stu3FromDate, String stu3LeaveDate, String student4, String stu4Name,
			String stu4FromDate, String stu4LeaveDate, String updatedBy) {
		super();
		this.id = id;
		this.roomNo = roomNo;
		this.student1 = student1;
		this.stu1Name = stu1Name;
		this.stu1FromDate = stu1FromDate;
		this.stu1LeaveDate = stu1LeaveDate;
		this.student2 = student2;
		this.stu2Name = stu2Name;
		this.stu2FromDate = stu2FromDate;
		this.stu2LeaveDate = stu2LeaveDate;
		this.student3 = student3;
		this.stu3Name = stu3Name;
		this.stu3FromDate = stu3FromDate;
		this.stu3LeaveDate = stu3LeaveDate;
		this.student4 = student4;
		this.stu4Name = stu4Name;
		this.stu4FromDate = stu4FromDate;
		this.stu4LeaveDate = stu4LeaveDate;
		this.updatedBy = updatedBy;
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


	public String getStudent1() {
		return student1;
	}


	public void setStudent1(String student1) {
		this.student1 = student1;
	}


	public String getStu1Name() {
		return stu1Name;
	}


	public void setStu1Name(String stu1Name) {
		this.stu1Name = stu1Name;
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


	public String getStudent2() {
		return student2;
	}


	public void setStudent2(String student2) {
		this.student2 = student2;
	}


	public String getStu2Name() {
		return stu2Name;
	}


	public void setStu2Name(String stu2Name) {
		this.stu2Name = stu2Name;
	}


	public String getStu2FromDate() {
		return stu2FromDate;
	}


	public void setStu2FromDate(String stu2FromDate) {
		this.stu2FromDate = stu2FromDate;
	}


	public String getStu2LeaveDate() {
		return stu2LeaveDate;
	}


	public void setStu2LeaveDate(String stu2LeaveDate) {
		this.stu2LeaveDate = stu2LeaveDate;
	}


	public String getStudent3() {
		return student3;
	}


	public void setStudent3(String student3) {
		this.student3 = student3;
	}


	public String getStu3Name() {
		return stu3Name;
	}


	public void setStu3Name(String stu3Name) {
		this.stu3Name = stu3Name;
	}


	public String getStu3FromDate() {
		return stu3FromDate;
	}


	public void setStu3FromDate(String stu3FromDate) {
		this.stu3FromDate = stu3FromDate;
	}


	public String getStu3LeaveDate() {
		return stu3LeaveDate;
	}


	public void setStu3LeaveDate(String stu3LeaveDate) {
		this.stu3LeaveDate = stu3LeaveDate;
	}


	public String getStudent4() {
		return student4;
	}


	public void setStudent4(String student4) {
		this.student4 = student4;
	}


	public String getStu4Name() {
		return stu4Name;
	}


	public void setStu4Name(String stu4Name) {
		this.stu4Name = stu4Name;
	}


	public String getStu4FromDate() {
		return stu4FromDate;
	}


	public void setStu4FromDate(String stu4FromDate) {
		this.stu4FromDate = stu4FromDate;
	}


	public String getStu4LeaveDate() {
		return stu4LeaveDate;
	}


	public void setStu4LeaveDate(String stu4LeaveDate) {
		this.stu4LeaveDate = stu4LeaveDate;
	}


	public String getUpdatedBy() {
		return updatedBy;
	}


	public void setUpdatedBy(String updatedBy) {
		this.updatedBy = updatedBy;
	}

}
