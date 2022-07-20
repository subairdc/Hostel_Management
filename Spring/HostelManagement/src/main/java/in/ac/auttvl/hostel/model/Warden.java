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
public class Warden {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(length =100)
	private int id;
	private String email;
	private String name;
	private String password;
	private int orderNo;
	private String updatedBy;
	private String updatedOn;
	
	
	
	public Warden(int id, String email, String name, String password, int orderNo, String updatedBy,String updatedOn) {
		super();
		this.id =id;
		this.email = email;
		this.name = name;
		this.password = password;
		this.orderNo = orderNo;
		this.updatedBy = updatedBy;
		this.updatedOn = updatedOn;
	}
	
	
	public Warden() {
		super();	
	}
	
	

	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public int getOrderNo() {
		return orderNo;
	}


	public void setOrderNo(int orderNo) {
		this.orderNo = orderNo;
	}


	public String getUpdatedBy() {
		return updatedBy;
	}


	public void setUpdatedBy(String updatedBy) {
		this.updatedBy = updatedBy;
	}


	public String getUpdatedOn() {
		return updatedOn;
	}


	public void setUpdatedOn(String updatedOn) {
		this.updatedOn = updatedOn;
	}
	
}
