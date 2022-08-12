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
public class LeaveForm {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(length =100)
	private int id;
	private String name;
	private String regNo;
	private int roomNo;
	private String hostel;

	private String degree;
	private String dept;
	private int year;
	private int sem;

	private String leaveCategory;

	private String date;
	private String day;
	private String leavingTime;
	private String reportingTime;
	private String leavePurpose;

	private String fromDate;
	private String toDate;
	private int noOfDays;

	private String contactPerson;
	private String personName;
	private String relation;
	private String contactPhoneNo;
	
	public LeaveForm() {
		
	}
	
	public LeaveForm(int id, String name, String regNo, int roomNo, String hostel, String degree,
			String dept, int year, int sem, String leaveCategory, String date, String day, String leavingTime,
			String reportingTime, String leavePurpose, String fromDate, String toDate, int noOfDays,
			String contactPerson, String personName, String relation, String contactPhoneNo) {
		super();
		this.id = id;
		this.name = name;
		this.regNo = regNo;
		this.roomNo = roomNo;
		this.hostel = hostel;
		this.degree = degree;
		this.dept = dept;
		this.year = year;
		this.sem = sem;
		this.leaveCategory = leaveCategory;
		this.date = date;
		this.day = day;
		this.leavingTime = leavingTime;
		this.reportingTime = reportingTime;
		this.leavePurpose = leavePurpose;
		this.fromDate = fromDate;
		this.toDate = toDate;
		this.noOfDays = noOfDays;
		this.contactPerson = contactPerson;
		this.personName = personName;
		this.relation = relation;
		this.contactPhoneNo = contactPhoneNo;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getRegNo() {
		return regNo;
	}
	public void setRegNo(String regNo) {
		this.regNo = regNo;
	}
	public int getRoomNo() {
		return roomNo;
	}
	public void setRoomNo(int roomNo) {
		this.roomNo = roomNo;
	}
	public String getHostel() {
		return hostel;
	}
	public void setHostel(String hostel) {
		this.hostel = hostel;
	}
	public String getDegree() {
		return degree;
	}
	public void setDegree(String degree) {
		this.degree = degree;
	}
	public String getDept() {
		return dept;
	}
	public void setDept(String dept) {
		this.dept = dept;
	}
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	public int getSem() {
		return sem;
	}
	public void setSem(int sem) {
		this.sem = sem;
	}
	public String getLeaveCategory() {
		return leaveCategory;
	}
	public void setLeaveCategory(String leaveCategory) {
		this.leaveCategory = leaveCategory;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getDay() {
		return day;
	}
	public void setDay(String day) {
		this.day = day;
	}
	public String getLeavingTime() {
		return leavingTime;
	}
	public void setLeavingTime(String leavingTime) {
		this.leavingTime = leavingTime;
	}
	public String getReportingTime() {
		return reportingTime;
	}
	public void setReportingTime(String reportingTime) {
		this.reportingTime = reportingTime;
	}
	public String getLeavePurpose() {
		return leavePurpose;
	}
	public void setLeavePurpose(String leavePurpose) {
		this.leavePurpose = leavePurpose;
	}
	public String getFromDate() {
		return fromDate;
	}
	public void setFromDate(String fromDate) {
		this.fromDate = fromDate;
	}
	public String getToDate() {
		return toDate;
	}
	public void setToDate(String toDate) {
		this.toDate = toDate;
	}
	public int getNoOfDays() {
		return noOfDays;
	}
	public void setNoOfDays(int noOfDays) {
		this.noOfDays = noOfDays;
	}
	public String getContactPerson() {
		return contactPerson;
	}
	public void setContactPerson(String contactPerson) {
		this.contactPerson = contactPerson;
	}
	public String getPersonName() {
		return personName;
	}
	public void setPersonName(String personName) {
		this.personName = personName;
	}
	public String getRelation() {
		return relation;
	}
	public void setRelation(String relation) {
		this.relation = relation;
	}
	public String getContactPhoneNo() {
		return contactPhoneNo;
	}
	public void setContactPhoneNo(String contactPhoneNo) {
		this.contactPhoneNo = contactPhoneNo;
	}
	
}
