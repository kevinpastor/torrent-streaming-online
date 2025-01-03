import { type ReactNode } from "react";

import { StatsInitial } from "./Player/Stats/StatsInitial";

export const PlayerError = (): ReactNode => (
    <>
        <div className="aspect-video rounded-md border bg-black shadow flex flex-col items-center justify-center">
            <p className="text-sm text-destructive">
                Unexpected error
            </p>
            <p className="text-sm text-muted-foreground">
                Try again or try loading another torrent.
            </p>
        </div>
        <StatsInitial />
    </>
);
