import { createContext } from "react";

export type ComponentContext = {
    Component: React.ReactNode | null,
    setPassedComponent: (component: React.ReactNode | null) => void;
};

export const BtnContext = createContext<ComponentContext | undefined>(undefined);