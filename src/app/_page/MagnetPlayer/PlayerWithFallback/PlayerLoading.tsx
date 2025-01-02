import { Spinner } from "@vidstack/react";
import { type ReactNode } from "react";
import { useBoolean, useTimeout } from "usehooks-ts";

import { StatsInitial } from "./Player/Stats/StatsInitial";

export const PlayerLoading = (): ReactNode => {
    const { value: isSlow, setTrue } = useBoolean();
    useTimeout(setTrue, 5000);

    return (
        <>
            <div className="pointer-events-none aspect-video flex flex-col items-center justify-center space-y-4 border rounded-md bg-black">
                <Spinner.Root
                    className="animate-spin"
                    size={84}
                >
                    <Spinner.Track
                        className="text-muted"
                        width={8}
                    />
                    <Spinner.TrackFill
                        className="text-foreground"
                        width={8}
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
