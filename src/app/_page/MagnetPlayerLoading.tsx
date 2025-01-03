import { type ReactNode } from "react";

import { Form } from "./MagnetPlayer/Form";
import { PlayerInitial } from "./MagnetPlayer/PlayerWithFallback/PlayerInitial";

export const MagnetPlayerLoading = (): ReactNode => (
    <>
        <Form />
        {/* The page "feels" faster when `PlayerInitial` is displayed instead of `PlayerLoading`. */}
        <PlayerInitial />
    </>
);
