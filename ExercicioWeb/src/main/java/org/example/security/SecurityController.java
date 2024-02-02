package org.example.security;

import java.security.KeyFactory;
import java.security.PublicKey;
import java.security.spec.X509EncodedKeySpec;
import java.util.Base64;

import org.example.dto.SecurityDTO;
import org.example.security.BlowFishKeyGenerator;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.crypto.Cipher;
import java.nio.charset.StandardCharsets;

@RestController
@RequestMapping("security")
public class SecurityController {


    public SecurityController() {

    }

    public static PublicKey convertStringToPublicKey(String publicKeyString) throws Exception {
        // Converte a string para um array de bytes
        // Converte a string limpa para um array de bytes
        byte[] publicKeyBytes = Base64.getDecoder().decode(publicKeyString);

        // Cria a especificação da chave pública
        X509EncodedKeySpec keySpec = new X509EncodedKeySpec(publicKeyBytes);

        // Obtém a fábrica de chaves
        KeyFactory keyFactory = KeyFactory.getInstance("RSA"); // Substitua por outro algoritmo se necessário

        // Gera a chave pública
        return keyFactory.generatePublic(keySpec);
    }

    @PostMapping
    public String createUser(@RequestBody SecurityDTO securityDTO) throws Exception {
        BlowFishKeyGenerator b = new BlowFishKeyGenerator();
        String secretMessage = b.generateKey("chave");
        System.out.println(secretMessage);
        Cipher encryptCipher = Cipher.getInstance("RSA");
        PublicKey pk = convertStringToPublicKey(securityDTO.getPublicKey());
        encryptCipher.init(Cipher.ENCRYPT_MODE, pk);
        byte[] secretMessageBytes = secretMessage.getBytes(StandardCharsets.UTF_8);
        byte[] encryptedMessageBytes = encryptCipher.doFinal(secretMessageBytes);
        String encodedMessage = Base64.getEncoder().encodeToString(encryptedMessageBytes);
        return encodedMessage;
    }

}