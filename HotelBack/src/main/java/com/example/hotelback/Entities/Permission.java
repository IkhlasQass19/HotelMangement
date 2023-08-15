package com.example.hotelback.Entities;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum Permission {

    admin_READ("admin:read"),
    admin_UPDATE("admin:update"),
    admin_CREATE("admin:create"),
    admin_DELETE("admin:delete"),
    user_READ("admin:read"),
    user_UPDATE("admin:update"),
    user_CREATE("admin:create"),
    user_DELETE("admin:delete")

    ;

    @Getter
    private final String permission;
}