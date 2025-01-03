import { type ReactNode } from "react";

import { Form } from "./MagnetPlayer/Form";
import { PlayerInitial } from "./MagnetPlayer/PlayerWithFallback/PlayerInitial";

export const MagnetPlayerLoading = (): ReactNode => (
    <>
        <Form />
        <PlayerInitial />
    </>
);
