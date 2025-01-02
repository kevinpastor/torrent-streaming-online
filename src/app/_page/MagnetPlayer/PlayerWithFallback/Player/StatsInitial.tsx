import { ArrowDownIcon, ArrowUpIcon, UsersIcon } from "lucide-react";
import { type ReactNode } from "react";

import { Badge } from "~/components/Badge";

export const StatsInitial = (): ReactNode => (
    <div className="flex justify-center space-x-1">
        <Badge>
            <UsersIcon className="w-4 h-4 mr-1" />
            —
        </Badge>
        <Badge>
            <ArrowDownIcon className="w-4 h-4 mr-1" />
            — MB/s
        </Badge>
        <Badge>
            <ArrowUpIcon className="w-4 h-4 mr-1" />
            — MB/s
        </Badge>
        <Badge>
            —%
        </Badge>
    </div>
);
