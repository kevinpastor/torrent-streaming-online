import { ReactNode } from "react"

import { Select, SelectTrigger, SelectValue } from "~/components/ui/select"

export const LoadingFileSelector = (): ReactNode => (
    <Select disabled>
        <SelectTrigger>
            <SelectValue placeholder="Loading files..." />
        </SelectTrigger>
    </Select>
);
