package com.csejun.util;

import javax.servlet.http.HttpServletRequest;

public class IPUtil {
	
	private static final String[] IPHEADER = {
			"X-Forwarded-For",
			"Proxy-Client-IP",
			"HTTP_X_FORWARDED_FOR",
			"HTTP_X_FORWARDED",
			"HTTP_X_CLUSTER_CLIENT_IP",
			"HTTP_CLIENT_IP",
			"HTTP_FORWARDED_FOR",
			"HTTP_FORWARDED",
			"HTTP_VIA",
			"REMOTE_ADDR"
	};

    public static String getClientIpAddr(HttpServletRequest request) {
    	
	    String ip = null;
	    
	    for(String ipHeader:IPHEADER) {
	    	ip = request.getHeader(ipHeader);
		    if (ip != null && ip.length() != 0 && !"unknown".equalsIgnoreCase(ip)) {
		    	return getFirstHeaderIp(ip);    
		    }
	    }
	 
	    return request.getRemoteAddr();
	}
    
    private static String getFirstHeaderIp(String ip) {
    	
    	return ip.contains(",")?ip.split(",")[0]:ip;
    	
    }
}