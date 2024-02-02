package org.example.controller;

import jakarta.validation.Valid;
import org.example.service.UsuarioService;
import org.example.model.Usuario;
import org.example.shared.GenericResponse;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("usuarios")
public class UsuarioController {
    private final UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @PostMapping
    public GenericResponse createUser(@Valid @RequestBody Usuario usuario) {
        usuarioService.save(usuario);
        GenericResponse genericResponse = new GenericResponse();
        genericResponse.setMessage("User saved");
        return genericResponse;
    }
}
