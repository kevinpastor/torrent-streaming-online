import { Spinner } from "@vidstack/react";
import { type ReactNode } from "react";

export const PlayerLoading = (): ReactNode => (
    <div className="pointer-events-none inset-0 z-50 flex w-full aspect-video items-center justify-center border rounded-md bg-black">
        <Spinner.Root
            className="text-white duration-1000 ease-linear animate-spin"
            size={84}
        >
            <Spinner.Track className="opacity-25" width={8} />
            <Spinner.TrackFill className="opacity-75" width={8} />
        </Spinner.Root>
    </div>
);
