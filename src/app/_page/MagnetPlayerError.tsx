import { type ReactNode } from "react";
import { type FallbackProps } from "react-error-boundary";

import { ErrorCode, KnownError } from "~/utils/KnownError";

export const MagnetPlayerError = ({ error }: FallbackProps): ReactNode => {
    if (error instanceof KnownError) {
        if (error.code === ErrorCode.ServiceWorkerUnsupported) {
            return (
                // TODO Improve this message.
                <p>
                    Your browser does not support Service Workers.
                </p>
            );
        }
    }

    return (
        // TODO Improve this message.
        <p>
            An unknown error occured.
        </p>
    );
};
