package com.csejun.controller;

import java.util.Enumeration;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.csejun.service.MailService;
import com.csejun.util.IPUtil;


@RestController
@RequestMapping("/test")
public class TestController {
	
	@Autowired
	MailService mailService;
	
	@GetMapping("/heartbeat")
	public String heartbeat() {
		return "BE is alive";
	}
		
	@GetMapping("/mailsend")
	public String mailsend() throws MessagingException {
		
		mailService.sendMail("회원가입 ", "platinyan@naver.com", "내용");
		
		return "ok";
	}
	

	@GetMapping("/header")
	public String register(HttpServletRequest request) {
		
		Enumeration<String> headerNames = request.getHeaderNames();
		
		String header = "";
		
		while(headerNames.hasMoreElements()) {
			String name = headerNames.nextElement();
			System.out.println(name+":"+request.getHeader(name));
			header+=(name+":"+request.getHeader(name)+"\n");
		}
		
		System.out.println(request.getRemoteAddr());
		System.out.println(IPUtil.getClientIpAddr(request));
		
		return header;
	}

	
	
	
	
	

}