import { saveUser, getUser, removeUser, isAuthenticated } from "@/lib/localStorage";

describe("localStorage — integração entre saveUser / getUser / isAuthenticated", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("isAuthenticated deve retornar false quando não há usuário armazenado", () => {
    expect(isAuthenticated()).toBe(false);
  });

  it("removeUser não deve lançar exceção quando não há usuário para remover", () => {
    expect(() => removeUser()).not.toThrow();
    expect(isAuthenticated()).toBe(false);
  });

  it("isAuthenticated deve retornar false após removeUser de um usuário existente", () => {
    // Escreve diretamente na chave que getUser lê, para não depender de saveUser
    localStorage.setItem("sqa_social_user", JSON.stringify({ id: 1, email: "x@x.com" }));
    expect(isAuthenticated()).toBe(true);
    removeUser();
    expect(isAuthenticated()).toBe(false);
  });

  // saveUser grava em "user", getUser lê de "sqa_social_user"
  it("getUser deve retornar o usuário salvo por saveUser", () => {
    const usuario = { id: 42, email: "usuario@teste.com" };
    saveUser(usuario);
    expect(getUser()).toEqual(usuario);
  });
});
