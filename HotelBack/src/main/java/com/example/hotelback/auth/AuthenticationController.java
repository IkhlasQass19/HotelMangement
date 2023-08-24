package com.example.hotelback.auth;
import com.example.hotelback.Entities.Role;
import com.example.hotelback.Entities.User;
import com.example.hotelback.helpers.jwtHelper;
import com.example.hotelback.repositories.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/auth")

//@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;

    @Autowired
    public  final UserRepository userRepository;

    @PostMapping("/register")
    public Map<String, Object>  register(
            @RequestBody RegisterRequest request
    ) {
        Map<String, Object> response = new HashMap<>();

        try {
            AuthenticationResponse authResponse = service.register(request);
            String authToken = authResponse.getAccessToken();
            String refreshToken = authResponse.getRefreshToken();
            String UserEmail=authResponse.getEmail();
            response.put("access_token", authToken);
            response.put("refresh_token", refreshToken);

            response.put("email", UserEmail);

        } catch (Exception e) {
            response.put("error", e.getMessage());
        }
        return response;
    }
    //    @PostMapping("/authenticate")
//    public ResponseEntity authenticate(
//            @RequestBody AuthenticationRequest request
//    ) {
//        try {
//            service.authenticate(request);
//        }catch (Exception e){
//            return ResponseEntity.badRequest().body(e.getMessage());
//        }
//        return ResponseEntity.ok("good");
//    }
    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        try {

            var auth = service.authenticate(request);
            String authToken = auth.getAccessToken();
            String email=auth.getEmail();
            Role userRole = auth.getRole();
            Map<String, Object> response = new HashMap<>();
            response.put("token", authToken);
            response.put("email",email);
            response.put("role", userRole);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }

    @PostMapping("/refresh-token")
    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException {
        service.refreshToken(request, response);
    }

    @GetMapping("/Profile")
    public ResponseEntity<User> docProfile(HttpServletRequest request) {
        var email = jwtHelper.getEmail(request);
        return ResponseEntity.ok(userRepository.findByEmail(email).get());

    }


}
