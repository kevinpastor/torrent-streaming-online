import { Spinner } from "@vidstack/react";
import { type ReactNode } from "react";
import { useBoolean, useTimeout } from "usehooks-ts";

export const PlayerLoading = (): ReactNode => {
    const { value: isSlow, setTrue } = useBoolean();
    useTimeout(setTrue, 5000);

    return (
        <div className="pointer-events-none inset-0 z-50 flex w-full aspect-video flex-col items-center justify-center gap-4 border rounded-md bg-black">
            <Spinner.Root
                className="text-white duration-1000 ease-linear animate-spin"
                size={84}
            >
                <Spinner.Track
                    className="opacity-25"
                    width={8}
                />
                <Spinner.TrackFill
                    className="opacity-75"
                    width={8}
                />
            </Spinner.Root>
            {isSlow && (
                <div>
                    Taking longer than expected. Ensure that the magnet link is correct.
                </div>
            )}
        </div>
    );
};
