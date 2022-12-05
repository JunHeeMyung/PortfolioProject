package com.csejun.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
public class MainController {
	
	@GetMapping("/heartbeat")
	public String heartbeat() {
		System.out.println("BE is alive");
		return "BE is alive";
	}

}