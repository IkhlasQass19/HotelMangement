package com.example.hotelback.helpers;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.http.HttpServletRequest;

public class jwtHelper {
    public static Claims parseToken(HttpServletRequest request) {
        String authorizationHeader = request.getHeader("Authorization");
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            String jwtToken = authorizationHeader.substring(7);

            Claims claims = Jwts.parser()
                    .setSigningKey("404E635266556A586E3272357538782F413F4428472B4B6250645367566B5970")
                    .parseClaimsJws(jwtToken)
                    .getBody();

            // Extract claims from the parsed JWT
            String username = claims.getSubject();
            String email = claims.get("email", String.class);

            return claims;
        } else {
            return null;
        }
    }
    public  static String getEmail(HttpServletRequest request){
        return parseToken(request).getSubject();
    }

}
