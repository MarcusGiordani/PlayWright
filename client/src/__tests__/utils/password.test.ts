import { isPasswordValid, getPasswordValidationMessage } from "@/utils/password";

describe("isPasswordValid", () => {
  it("deve retornar verdadeiro para senha que atende todos os requisitos", () => {
    expect(isPasswordValid("Senha@123")).toBe(true);
  });

  it("deve retornar falso para senha sem letra maiúscula", () => {
    expect(isPasswordValid("senha@123")).toBe(false);
  });

  it("deve retornar falso para senha curta sem requisitos", () => {
    expect(isPasswordValid("fraca")).toBe(false);
  });

  // ponto está na regex de getPasswordValidationMessage mas não em isPasswordValid
  it("deve aceitar ponto como caractere especial válido", () => {
    expect(isPasswordValid("Abcdefg1.")).toBe(true);
  });
});

describe("getPasswordValidationMessage", () => {
  it("deve retornar mensagem de obrigatório para senha vazia", () => {
    expect(getPasswordValidationMessage("")).toBe("Senha é obrigatória");
  });

  it("deve retornar string vazia para senha que atende todos os requisitos", () => {
    expect(getPasswordValidationMessage("Senha@123")).toBe("");
  });

  it("deve indicar ausência de letra maiúscula na mensagem", () => {
    const msg = getPasswordValidationMessage("senha@123");
    expect(msg).toContain("uma letra maiúscula");
  });
});
