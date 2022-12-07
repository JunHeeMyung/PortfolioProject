package com.csejun.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/test")
public class MainController {
	
	@GetMapping("/heartbeat")
	public String heartbeat() {
		return "BE is alive";
	}

}