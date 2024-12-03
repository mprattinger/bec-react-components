import { ClassValue, clsx } from "clsx";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export interface ContainerPropsBase {
    className?: string,
    children: ReactNode | ReactNode[]
}

export interface InputPropsBase<T> {
    id: string,
    label?: string,
    value: T,
    onChange: (value: T) => void
}