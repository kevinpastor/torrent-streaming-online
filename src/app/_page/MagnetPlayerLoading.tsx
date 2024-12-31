import { type ReactNode } from "react";

// import { Skeleton } from "~/components/ui/skeleton";

import { Form } from "./MagnetPlayer/Form";
import { PlayerInitial } from "./MagnetPlayer/PlayerWithFallback/PlayerInitial";

export const MagnetPlayerLoading = (): ReactNode => (
    <div className="space-y-4">
        {/* <div className="flex gap-4">
            <div className="space-y-2 grow">
                <Skeleton className="w-[82.13px] h-[16px] mt-2" />
                <Skeleton className="h-[36px]" />
            </div>
            <Skeleton className="w-[88.55px] h-[36px] mt-[32px]" />
        </div>
        <Skeleton className="aspect-video" /> */}
        <Form />
        <PlayerInitial />
    </div>
);
