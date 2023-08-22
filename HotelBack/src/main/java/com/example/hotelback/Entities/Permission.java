package com.example.hotelback.Entities;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum Permission {

    admin_READ("admin:read"),
    admin_UPDATE("admin:update"),
    admin_CREATE("admin:create"),
    admin_DELETE("admin:delete"),
    user_READ("user:read"),
    user_UPDATE("user:update"),
    user_CREATE("user:create"),
    user_DELETE("user:delete")

    ;

    @Getter
    private final String permission;
}