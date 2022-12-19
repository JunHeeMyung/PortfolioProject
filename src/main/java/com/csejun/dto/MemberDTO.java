package com.csejun.dto;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import org.hibernate.annotations.CreationTimestamp;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Table(name = "member")
@Entity
@Builder
@EqualsAndHashCode(of = "memSeq")
@SequenceGenerator(name = "memSeqGenerator", sequenceName = "memSeq", initialValue = 1, allocationSize = 1)
public class MemberDTO {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "memSeqGenerator")
	private Long memSeq;

	private String memNick;
	private String memEmail;

	@CreationTimestamp
	private Timestamp memRegdate;

	@Enumerated(EnumType.STRING)
	private Memtype memType;

	@Enumerated(EnumType.STRING)
	private Memstatus memStatus;

	private String socialType;

}