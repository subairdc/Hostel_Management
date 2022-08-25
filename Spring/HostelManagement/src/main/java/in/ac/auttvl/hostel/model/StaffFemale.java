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
public class StaffFemale {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(length =100)
	private int id;
	private String name;
	private String gender;
	private String dateOfBirth;
	private int age;
	private String bloodGrp;
	
	private String staffId;
	private String phoneNo;
	private String email;
	private String password;
	private String confirmPassword;
	
	private String status;
	private String hostel;
	
	private String street;
	private String city;
	private String district;
	private String state;
	private String pincode;
	
	private String image;
	private String imagePath;
	private String updatedBy;
	private String updatedOn;
	private String dateOfEnrollment;

	
	public StaffFemale(){
		
	}

	public StaffFemale(int id, String name, String gender, String dateOfBirth, int age, String bloodGrp, String staffId,
			String phoneNo, String email, String password, String confirmPassword, String status, String hostel,
			String street, String city, String district, String state, String pincode, String image, String imagePath,
			String updatedBy, String updatedOn, String dateOfEnrollment) {
		super();
		this.id = id;
		this.name = name;
		this.gender = gender;
		this.dateOfBirth = dateOfBirth;
		this.age = age;
		this.bloodGrp = bloodGrp;
		this.staffId = staffId;
		this.phoneNo = phoneNo;
		this.email = email;
		this.password = password;
		this.confirmPassword = confirmPassword;
		this.status = status;
		this.hostel = hostel;
		this.street = street;
		this.city = city;
		this.district = district;
		this.state = state;
		this.pincode = pincode;
		this.image = image;
		this.imagePath = imagePath;
		this.updatedBy = updatedBy;
		this.updatedOn = updatedOn;
		this.dateOfEnrollment = dateOfEnrollment;
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


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public String getDateOfBirth() {
		return dateOfBirth;
	}


	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}


	public int getAge() {
		return age;
	}


	public void setAge(int age) {
		this.age = age;
	}


	public String getBloodGrp() {
		return bloodGrp;
	}


	public void setBloodGrp(String bloodGrp) {
		this.bloodGrp = bloodGrp;
	}


	public String getStaffId() {
		return staffId;
	}


	public void setStaffId(String staffId) {
		this.staffId = staffId;
	}


	public String getPhoneNo() {
		return phoneNo;
	}


	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getConfirmPassword() {
		return confirmPassword;
	}


	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public String getHostel() {
		return hostel;
	}


	public void setHostel(String hostel) {
		this.hostel = hostel;
	}


	public String getStreet() {
		return street;
	}


	public void setStreet(String street) {
		this.street = street;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public String getDistrict() {
		return district;
	}


	public void setDistrict(String district) {
		this.district = district;
	}


	public String getState() {
		return state;
	}


	public void setState(String state) {
		this.state = state;
	}


	public String getPincode() {
		return pincode;
	}


	public void setPincode(String pincode) {
		this.pincode = pincode;
	}


	public String getImage() {
		return image;
	}


	public void setImage(String image) {
		this.image = image;
	}


	public String getImagePath() {
		return imagePath;
	}


	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
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


	public String getDateOfEnrollment() {
		return dateOfEnrollment;
	}


	public void setDateOfEnrollment(String dateOfEnrollment) {
		this.dateOfEnrollment = dateOfEnrollment;
	}
	
}
