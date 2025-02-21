import { Spinner } from "@vidstack/react";
import { type ReactNode } from "react";
import { useBoolean, useTimeout } from "usehooks-ts";

import { StatsInitial } from "./Player/Stats/StatsInitial";

export const PlayerLoading = (): ReactNode => {
    const { value: isSlow, setTrue } = useBoolean(true);
    useTimeout(setTrue, 5000);

    return (
        <>
            <div className="pointer-events-none aspect-video flex flex-col items-center justify-center gap-4 border rounded-md bg-black">
                <Spinner.Root
                    size={84}
                    className="animate-spin"
                >
                    <Spinner.Track
                        width={8}
                        className="text-muted"
                    />
                    <Spinner.TrackFill
                        width={8}
                        className="text-foreground"
                    />
                </Spinner.Root>
                {isSlow && (
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-sm text-foreground">
                            Taking longer than expected
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Ensure that the magnet link is correct and that the torrent has WebRTC peers.
                        </p>
                    </div>
                )}
            </div>
            <StatsInitial />
        </>
    );
};
