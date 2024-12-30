import { ReactNode } from "react";

import { Form } from "./MagnetPlayer/Form";
import { PlayerInitial } from "./MagnetPlayer/PlayerWithFallback/PlayerInitial";

export const MagnetPlayerLoading = (): ReactNode => (
    <div className="space-y-4">
        <Form />
        <PlayerInitial />
    </div>
);
