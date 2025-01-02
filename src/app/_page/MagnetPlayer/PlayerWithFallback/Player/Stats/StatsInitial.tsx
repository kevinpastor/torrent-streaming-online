import { ArrowDownIcon, ArrowUpIcon, UsersIcon } from "lucide-react";
import { type ReactNode } from "react";

import { Badge } from "~/components/Badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/Tooltip";

export const StatsInitial = (): ReactNode => (
    <div className="flex justify-center space-x-1">
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Badge>
                        <UsersIcon className="w-4 h-4 mr-1" />
                        —
                    </Badge>
                </TooltipTrigger>
                <TooltipContent>
                    Peers
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Badge>
                        <ArrowDownIcon className="w-4 h-4 mr-1" />
                        — KB/s
                    </Badge>
                </TooltipTrigger>
                <TooltipContent>
                    Dowload Speed
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Badge>
                        <ArrowUpIcon className="w-4 h-4 mr-1" />
                        — KB/s
                    </Badge>

                </TooltipTrigger>
                <TooltipContent>
                    Upload Speed
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Badge>
                        —%
                    </Badge>

                </TooltipTrigger>
                <TooltipContent>
                    Progress
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    </div>
);
