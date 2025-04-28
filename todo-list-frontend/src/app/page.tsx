"use client";
import React, { Suspense } from "react";
import { Container } from "@/components/ui";
import { TasksPage } from "@/components/shared/TasksPage";

export default function Home() {
  return (
    <div>
      <main>
        <Container>
          <TasksPage />
        </Container>
      </main>
    </div>
  );
}
