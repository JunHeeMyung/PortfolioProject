package com.csejun.service;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class MailService {
	
	@Autowired
	private JavaMailSender javaMailSender;
	
	@Async
	public void sendMail(String subject,String recipient,String content) throws MessagingException{
		
		MimeMessage message = javaMailSender.createMimeMessage();
		
		message.setSubject(subject);
		message.setRecipient(Message.RecipientType.TO, new InternetAddress(recipient));
		message.setText(content);
		
		javaMailSender.send(message);
		
	}

}