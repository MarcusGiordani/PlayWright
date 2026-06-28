import React from "react";
import { render, screen } from "@testing-library/react";
import PostCard from "@/components/PostCard";

const mockPost = {
  id: 1,
  title: "Título do Post de Teste",
  body: "Este é o corpo do post de teste.",
  liked: false,
};

describe("PostCard", () => {
  it("deve renderizar o título do post", () => {
    const onLike = jest.fn().mockResolvedValue(undefined);
    render(<PostCard post={mockPost} isAuthenticated={false} onLike={onLike} />);
    expect(screen.getByText("Título do Post de Teste")).toBeTruthy();
  });

  it("deve renderizar o corpo do post", () => {
    const onLike = jest.fn().mockResolvedValue(undefined);
    render(<PostCard post={mockPost} isAuthenticated={false} onLike={onLike} />);
    expect(screen.getByText("Este é o corpo do post de teste.")).toBeTruthy();
  });

  it("deve exibir emoji 🤍 e texto 'Curtir' quando post não está curtido", () => {
    const onLike = jest.fn().mockResolvedValue(undefined);
    render(<PostCard post={mockPost} isAuthenticated={false} onLike={onLike} />);
    expect(screen.getByText("🤍")).toBeTruthy();
    expect(screen.getByText("Curtir")).toBeTruthy();
  });

  it("deve exibir emoji ❤️ e texto 'Curtido' quando post está curtido", () => {
    const likedPost = { ...mockPost, liked: true };
    const onLike = jest.fn().mockResolvedValue(undefined);
    render(<PostCard post={likedPost} isAuthenticated={true} onLike={onLike} />);
    expect(screen.getByText("❤️")).toBeTruthy();
    expect(screen.getByText("Curtido")).toBeTruthy();
  });

  it("deve renderizar um elemento com role='listitem'", () => {
    const onLike = jest.fn().mockResolvedValue(undefined);
    render(<PostCard post={mockPost} isAuthenticated={false} onLike={onLike} />);
    expect(screen.getByRole("listitem")).toBeTruthy();
  });
});
