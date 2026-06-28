package com.demoapp.demo.service;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.demoapp.demo.repository.UserRepository;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @Test
    void isEmailValid_comEmailValido_deveRetornarVerdadeiro() {
        assertTrue(userService.isEmailValid("usuario@example.com"));
    }

    @Test
    void isPasswordValid_comSenhaForte_deveRetornarVerdadeiro() {
        assertTrue(userService.isPasswordValid("Senha@123"));
    }

    // isEmailValid só verifica contains("@"), então "@" passa como válido
    @Test
    void isEmailValid_comApenasArroba_deveRetornarFalso() {
        assertFalse(userService.isEmailValid("@"));
    }
}
