import { type ReactNode } from "react";

export const UnsupportedFiles = (): ReactNode => (
    <div className="aspect-video rounded-md border bg-black shadow-sm flex flex-col items-center justify-center">
        <p className="text-sm text-destructive">
            No supported video file
        </p>
        <p className="text-sm text-muted-foreground">
            Try loading another torrent with other file formats.
        </p>
    </div>
);
