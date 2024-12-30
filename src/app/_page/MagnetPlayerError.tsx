import { ReactNode } from "react";
import { FallbackProps } from "react-error-boundary";
import { KnownError, KnownErrorCode } from "~/utils/KnownError";

export const MagnetPlayerError = ({ error }: FallbackProps): ReactNode => {
    if (error instanceof KnownError) {
        if (error.code === KnownErrorCode.ServiceWorkerUnsupported) {
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
