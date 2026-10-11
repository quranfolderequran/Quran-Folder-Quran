"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  isTrialOpen: boolean;
  openTrialModal: (courseName?: string) => void;
  closeTrialModal: () => void;
  selectedCourse: string;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const openTrialModal = (courseName?: string) => {
    setSelectedCourse(courseName || "General Quran Trial");
    setIsTrialOpen(true);
  };

  const closeTrialModal = () => {
    setIsTrialOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isTrialOpen,
        openTrialModal,
        closeTrialModal,
        selectedCourse,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
