package com.freshop.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SuppliedProducts {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Long sid;
	private Long pid;
	private String src;
	@Column(length = 30)
	private String title;
	@Column(length = 50)
	private String description;
	private double price;
	private String catagory;
	@Column(length = 20)
	private String status;
	public SuppliedProducts(Long sid, Long pid, String src, String title, String description, double price,
			String catagory, String status) {
		super();
		this.sid = sid;
		this.pid = pid;
		this.src = src;
		this.title = title;
		this.description = description;
		this.price = price;
		this.catagory = catagory;
		this.status = status;
	}
	
	
}
