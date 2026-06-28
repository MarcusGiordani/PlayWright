import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "@/components/Button";

describe("Button", () => {
  it("deve renderizar o texto filho corretamente", () => {
    render(<Button>Confirmar</Button>);
    const btn = screen.getByRole("button");
    expect(btn.textContent).toBe("Confirmar");
  });

  it("deve exibir 'Carregando...' quando isLoading é verdadeiro", () => {
    render(<Button isLoading>Confirmar</Button>);
    const btn = screen.getByRole("button");
    expect(btn.textContent).toBe("Carregando...");
  });

  it("deve estar desabilitado quando isLoading é verdadeiro", () => {
    render(<Button isLoading>Confirmar</Button>);
    const btn = screen.getByRole("button") as HTMLButtonElement;
    expect(btn.disabled).toBe(true);
  });

  it("deve estar desabilitado quando disabled é verdadeiro", () => {
    render(<Button disabled>Confirmar</Button>);
    const btn = screen.getByRole("button") as HTMLButtonElement;
    expect(btn.disabled).toBe(true);
  });

  it("não deve estar desabilitado por padrão", () => {
    render(<Button>Confirmar</Button>);
    const btn = screen.getByRole("button") as HTMLButtonElement;
    expect(btn.disabled).toBe(false);
  });
});
