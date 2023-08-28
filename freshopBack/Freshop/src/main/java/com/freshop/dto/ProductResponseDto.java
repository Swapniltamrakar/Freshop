package com.freshop.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductResponseDto {

	private Long pid;
	private String src;
	private String title;
	private String description;
	private double price;
	private String catagory;
	
}
