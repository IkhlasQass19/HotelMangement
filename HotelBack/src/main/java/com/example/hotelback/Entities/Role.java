package com.example.hotelback.Entities;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static com.example.hotelback.Entities.Permission.*;

@RequiredArgsConstructor
public enum Role {

    USER(Collections.emptySet()),
    admin(
            Set.of(
                    admin_READ,
                    admin_UPDATE,
                    admin_DELETE,
                    admin_CREATE

            )
    ),
    user(
            Set.of(
                    user_READ,
                    user_UPDATE,
                    user_DELETE,
                    user_CREATE
            )
    )

    ;

    @Getter
    private final Set<Permission> permissions;

    public List<SimpleGrantedAuthority> getAuthorities() {
        var authorities = getPermissions()
                .stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
                .collect(Collectors.toList());
        authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return authorities;
    }
}