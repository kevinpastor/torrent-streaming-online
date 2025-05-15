import { type ReactNode } from "react";
import { type FallbackProps } from "react-error-boundary";

import { ErrorCode, KnownError } from "~/utils/KnownError";

import { Form } from "./MagnetPlayer/Form";
import { StatsInitial } from "./MagnetPlayer/PlayerWithFallback/Player/Stats/StatsInitial";

const getMessage = (error: unknown): string => {
    if (!(error instanceof KnownError)) {
        return "An unexpected error occured.";
    }

    if (error.code === ErrorCode.ServiceWorkerUnsupported) {
        return "Service Workers not supported";
    }

    if (error.code === ErrorCode.ServiceWorkerNull) {
        return "Initialization failed";
    }

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- Prevents new error codes from being problematic.
    if (error.code === ErrorCode.ServiceWorkerTimeout) {
        return "Initialization timed out";
    }

    return "An unexpected error occured.";
};

const getSuggestion = (error: unknown): string => {
    if (!(error instanceof KnownError)) {
        return "Try reloading the page.";
    }

    if (error.code === ErrorCode.ServiceWorkerUnsupported) {
        return "Try using a different browser.";
    }

    return "Try reloading the page.";
};

export const MagnetPlayerError = ({ error }: FallbackProps): ReactNode => (
    <>
        <Form />
        <div className="aspect-video rounded-md border bg-black shadow-sm flex flex-col items-center justify-center">
            <p className="text-sm text-destructive">
                {getMessage(error)}
            </p>
            <p className="text-sm text-muted-foreground">
                {getSuggestion(error)}
            </p>
        </div>
        <StatsInitial />
    </>
);
