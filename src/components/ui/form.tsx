"use client";

import { Slot } from "@radix-ui/react-slot";
import { type ComponentPropsWithRef, createContext, type ReactNode, useContext, useId } from "react";
import {
    Controller,
    type ControllerProps,
    type FieldPath,
    type FieldValues,
    FormProvider,
    useFormContext
} from "react-hook-form";

import { Label } from "~/components/ui/label";
import { cn } from "~/lib/utils";

export const Form = FormProvider;

type FormFieldContextValue<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
    name: TName
};

const FormFieldContext = createContext<FormFieldContextValue | undefined>(undefined);

export const FormField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(props: ControllerProps<TFieldValues, TName>): ReactNode => (
    <FormFieldContext value={{ name: props.name }}>
        <Controller {...props} />
    </FormFieldContext>
);

export const useFormField = () => {
    const fieldContext = useContext(FormFieldContext);
    if (fieldContext === undefined) {
        throw new Error("useFormField should be used within <FormField>");
    }

    const itemContext = useContext(FormItemContext);
    if (itemContext === undefined) {
        throw new Error("useFormField should be used within <FormItem>");
    }

    const { getFieldState, formState } = useFormContext();
    const fieldState = getFieldState(fieldContext.name, formState);

    const { id } = itemContext;

    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState
    };
};

type FormItemContextValue = {
    id: string
};

const FormItemContext = createContext<FormItemContextValue | undefined>(undefined);

export const FormItem = ({ ref, className, ...props }: ComponentPropsWithRef<"div">): ReactNode => {
    const id = useId();

    return (
        <FormItemContext value={{ id }}>
            <div
                ref={ref}
                className={cn("space-y-2", className)}
                {...props}
            />
        </FormItemContext>
    );
};

export const FormLabel = ({ ref, className, ...props }: ComponentPropsWithRef<typeof Label>): ReactNode => {
    const { error, formItemId } = useFormField();

    return (
        <Label
            ref={ref}
            className={cn(error && "text-destructive", className)}
            htmlFor={formItemId}
            {...props}
        />
    );
};

export const FormControl = ({ ref, ...props }: ComponentPropsWithRef<typeof Slot>): ReactNode => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

    return (
        <Slot
            ref={ref}
            id={formItemId}
            aria-describedby={
                !error
                    ? `${formDescriptionId}`
                    : `${formDescriptionId} ${formMessageId}`
            }
            aria-invalid={!!error}
            {...props}
        />
    );
};

export const FormDescription = ({ ref, className, ...props }: ComponentPropsWithRef<"p">): ReactNode => {
    const { formDescriptionId } = useFormField();

    return (
        <p
            ref={ref}
            id={formDescriptionId}
            className={cn("text-[0.8rem] text-muted-foreground", className)}
            {...props}
        />
    );
};

export const FormMessage = ({ ref, className, children, ...props }: ComponentPropsWithRef<"p">): ReactNode => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;

    if (!body) {
        return null;
    }

    return (
        <p
            ref={ref}
            id={formMessageId}
            className={cn("text-[0.8rem] font-medium text-destructive", className)}
            {...props}
        >
            {body}
        </p>
    );
};
