import { type ReactNode } from "react";

export const UnsupportedFiles = (): ReactNode => (
    <div className="aspect-video rounded-md border bg-black shadow flex flex-col items-center justify-center">
        <p className="text-sm text-foreground">
            No supported video file
        </p>
        <p className="text-sm text-muted-foreground">
            Load another torrent with other formats.
        </p>
    </div>
);
