import { ReactNode } from "react";

export const PlayerInitial = (): ReactNode => (
    <div className="col-span-3 aspect-video rounded-md border bg-black text-card-foreground shadow flex flex-col items-center justify-center">
        <p className="leading-7">
            No torrent loaded.
        </p>
        <p className="leading-7">
            Load a torrent by pasting a magnet link above to start watching.
        </p>
    </div>
);
