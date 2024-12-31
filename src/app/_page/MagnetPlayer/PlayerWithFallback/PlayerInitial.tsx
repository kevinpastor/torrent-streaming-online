import { type ReactNode } from "react";

export const PlayerInitial = (): ReactNode => (
    <div className="col-span-3 aspect-video rounded-md border bg-black shadow flex flex-col items-center justify-center">
        <p className="text-sm text-foreground">
            No torrent loaded
        </p>
        <p className="text-sm text-muted-foreground">
            Load a magnet link to start streaming.
        </p>
    </div>
);
