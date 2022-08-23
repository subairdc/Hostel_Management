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
public class LeaveForm2 {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(length =100)
	private int id;
	private String name;
	private String regNo;
	private int roomNo;
	private String parent;
	private String staff;
	private String warden;
	private String remark;
	private String leaveStatus;
	
	public LeaveForm2(int id, String name, String regNo, int roomNo, String parent, String staff, String warden,
			String remark, String leaveStatus) {
		super();
		this.id = id;
		this.name = name;
		this.regNo = regNo;
		this.roomNo = roomNo;
		this.parent = parent;
		this.staff = staff;
		this.warden = warden;
		this.remark = remark;
		this.leaveStatus = leaveStatus;
	}
	
	public LeaveForm2() {
		super();
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
	public String getParent() {
		return parent;
	}
	public void setParent(String parent) {
		this.parent = parent;
	}
	public String getStaff() {
		return staff;
	}
	public void setStaff(String staff) {
		this.staff = staff;
	}
	public String getWarden() {
		return warden;
	}
	public void setWarden(String warden) {
		this.warden = warden;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public String getLeaveStatus() {
		return leaveStatus;
	}
	public void setLeaveStatus(String leaveStatus) {
		this.leaveStatus = leaveStatus;
	}

}
