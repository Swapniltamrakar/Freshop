package com.freshop.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SupplierRequestDto {
	private Long sid;
	private String supplierFirstName;
	private String supplierLastName;
	private String address;
	private String ln;
	private String status;
}
