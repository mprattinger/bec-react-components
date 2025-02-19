import { ApplicationError } from "bec-react-components";
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

export interface BecControlPropsBase {
  id: string;
  label?: string;
}

export interface InputPropsBase<T> extends BecControlPropsBase {
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  value: T;
  onChange: (value: T) => void;
  error?: ApplicationError;
  className?: string;
}

export interface ValidatableInputPropsBase<T extends FieldValues> {
  id: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
  placeHolder?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  error?: ApplicationError;
}

export interface IData {
  dataId: string;
}

export function getProperty<T>(obj: T, key: keyof T): T[keyof T] {
  return obj[key];
}

export function getPropertyByString<T>(obj: T, key: string): any {
  return obj[key as keyof T];
}

export function isEqual(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}
