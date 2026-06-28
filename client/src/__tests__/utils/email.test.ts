import { isEmailValid, getEmailValidationMessage } from "@/utils/email";

describe("isEmailValid", () => {
  it("deve retornar verdadeiro para email com formato válido", () => {
    expect(isEmailValid("usuario@example.com")).toBe(true);
  });

  it("deve retornar falso para string sem @", () => {
    expect(isEmailValid("invalido")).toBe(false);
  });

  it("deve retornar falso para email sem domínio após @", () => {
    expect(isEmailValid("usuario@")).toBe(false);
  });

  it("deve retornar falso para string vazia", () => {
    expect(isEmailValid("")).toBe(false);
  });
});

describe("getEmailValidationMessage", () => {
  it("deve retornar mensagem de obrigatório para email vazio", () => {
    expect(getEmailValidationMessage("")).toBe("Email é obrigatório");
  });

  it("deve retornar 'Email inválido' para email sem formato correto", () => {
    expect(getEmailValidationMessage("naotem-arroba")).toBe("Email inválido");
  });

  it("deve retornar string vazia para email válido", () => {
    expect(getEmailValidationMessage("usuario@example.com")).toBe("");
  });
});
