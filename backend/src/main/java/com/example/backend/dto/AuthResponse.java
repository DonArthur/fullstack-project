package com.example.backend.dto;

public class AuthResponse {
    private final String token;
    private final UserResponse userDetails;

    public AuthResponse(String token, UserResponse userDetails) {
        this.token = token;
        this.userDetails = userDetails;
    }

    public String getToken() {
        return token;
    }
    public UserResponse getUserDetails() { return userDetails; }
}
