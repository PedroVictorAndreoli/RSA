package org.example.security.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.model.Usuario;
import org.springframework.security.core.GrantedAuthority;

import java.util.HashSet;
import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserResponseDTO {

    private String nome;
    private String username;

    public UserResponseDTO(Usuario user) {
        this.nome = user.getNome();
        this.username = user.getUsername();
        }
}

