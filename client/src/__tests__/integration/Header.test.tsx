import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Header from "@/components/Header";
import { AuthProvider } from "@/contexts/AuthContext";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
  }),
}));

function renderHeader() {
  return render(
    <AuthProvider>
      <Header />
    </AuthProvider>
  );
}

describe("Header — integração com AuthContext", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("deve exibir 'Entrar' e 'Criar Conta' quando o usuário não está autenticado", () => {
    renderHeader();
    expect(screen.getByText("Entrar")).toBeTruthy();
    expect(screen.getByText("Criar Conta")).toBeTruthy();
  });

  it("deve exibir o título 'SQA Social Media' independente do estado de autenticação", () => {
    renderHeader();
    expect(screen.getByText("SQA Social Media")).toBeTruthy();
  });

  it("deve exibir 'Posts Curtidos' e 'Sair' quando o usuário está autenticado", async () => {
    localStorage.setItem("sqa_social_user", JSON.stringify({ id: 1, email: "test@test.com" }));
    renderHeader();
    await waitFor(() => {
      expect(screen.getByText("Posts Curtidos")).toBeTruthy();
      expect(screen.getByText("Sair")).toBeTruthy();
    });
  });

  it("não deve exibir 'Entrar' quando o usuário está autenticado", async () => {
    localStorage.setItem("sqa_social_user", JSON.stringify({ id: 1, email: "test@test.com" }));
    renderHeader();
    await waitFor(() => {
      expect(screen.queryByText("Entrar")).toBeNull();
    });
  });
});
