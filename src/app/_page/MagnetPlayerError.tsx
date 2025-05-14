import { type ReactNode } from "react";
import { type FallbackProps } from "react-error-boundary";

import { ErrorCode, KnownError } from "~/utils/KnownError";

import { Form } from "./MagnetPlayer/Form";
import { StatsInitial } from "./MagnetPlayer/PlayerWithFallback/Player/Stats/StatsInitial";

export const MagnetPlayerError = ({ error }: FallbackProps): ReactNode => {
    let message: string = "An unexpected error occured.";
    let details: string = "Try reloading the page.";

    if (error instanceof KnownError) {
        if (error.code === ErrorCode.ServiceWorkerUnsupported) {
            message = "Service Workers not supported";
            details = "Try using a different browser.";
        }
        else if (error.code === ErrorCode.ServiceWorkerNull) {
            message = "Initialization failed";
        }
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- Prevents new error codes from being problematic.
        else if (error.code === ErrorCode.ServiceWorkerTimeout) {
            message = "Initialization timed out";
        }
    }

    return (
        <>
            <Form />
            <div className="aspect-video rounded-md border bg-black shadow-sm flex flex-col items-center justify-center">
                <p className="text-sm text-destructive">
                    {message}
                </p>
                <p className="text-sm text-muted-foreground">
                    {details}
                </p>
            </div>
            <StatsInitial />
        </>
    );
};
