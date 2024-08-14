import { ReactNode } from "react";

export interface menuCardProps {
    className?: string;
    buttonText?: string;
    navigate?: string
}

export interface MusicContextProps {
    isMuted: boolean;
    toggleMute: () => void;
}

export interface MusicProviderProps {
    children: ReactNode;
}