package com.freshop.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "newOrder")
public class Order {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String orderId;
	private String title;
	private double amount;
	private double price;
	
	public Order(String orderId, String title, double amount, double price) {
		super();
		this.orderId = orderId;
		this.title = title;
		this.amount = amount;
		this.price = price;
	}
	
	
	
}
