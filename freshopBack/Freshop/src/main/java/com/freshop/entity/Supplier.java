package com.freshop.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Supplier {

	@Id
	private Long sid;
	@Column(length = 20)
	@NonNull
	private String supplierFirstName;
	@Column(length = 20)
	@NonNull
	private String supplierLastName;
	@Column(length=30)
	private String address;
	@Column(length = 10)
	@NonNull
	private String ln;
	@Column(length = 10)
	private String status;
	
	
}
