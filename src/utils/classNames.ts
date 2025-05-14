import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const classNames = (...inputs: Array<ClassValue>): string => (
    twMerge(clsx(inputs))
);
