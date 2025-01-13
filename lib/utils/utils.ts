import { ClassValue, clsx } from "clsx";
import { HTMLInputTypeAttribute, ReactNode } from "react";
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ContainerPropsBase {
  className?: string;
  children: ReactNode | ReactNode[];
}

export interface InputPropsBase<T> {
  id: string;
  label?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  value: T;
  onChange: (value: T) => void;
}

export interface ValidatableInputPropsBase<T extends FieldValues> {
  id: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
  placeHolder?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
}
