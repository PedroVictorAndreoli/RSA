package org.example.service;

import org.example.model.Usuario;
import org.example.repository.UsuarioRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;


    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
        bCryptPasswordEncoder = new BCryptPasswordEncoder();
    }

    public Usuario save(Usuario usuario) {
        usuario.setSenha( bCryptPasswordEncoder.encode(usuario.getSenha()) );
        return usuarioRepository.save(usuario);
    }
}
