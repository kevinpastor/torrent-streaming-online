import { ArrowDownIcon, ArrowUpIcon, UsersIcon } from "lucide-react";
import { type ReactNode } from "react";

import { Badge } from "~/components/Badge";
import { Tooltip } from "~/components/Tooltip";

export const StatsInitial = (): ReactNode => (
    <div className="flex justify-center gap-1">
        <Tooltip content="Peers">
            <Badge>
                <UsersIcon className="size-4 mr-1" />
                —
            </Badge>
        </Tooltip>
        <Tooltip content="Download Speed">
            <Badge>
                <ArrowDownIcon className="size-4 mr-1" />
                — KB/s
            </Badge>
        </Tooltip>
        <Tooltip content="Upload Speed">
            <Badge>
                <ArrowUpIcon className="size-4 mr-1" />
                — KB/s
            </Badge>
        </Tooltip>
        <Tooltip content="Progress">
            <Badge>
                —%
            </Badge>
        </Tooltip>
    </div>
);
