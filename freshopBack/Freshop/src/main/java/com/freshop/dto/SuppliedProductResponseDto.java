package com.freshop.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SuppliedProductResponseDto {

	private Long sid;
	private Long pid;
	private String src;
	private String title;
	private String description;
	private double price;
	private String catagory;
	private String status;
	
}
