import { ReactNode } from "react"

import { Select, SelectTrigger, SelectValue } from "~/components/ui/select"

export const InitialFileSelector = (): ReactNode => (
    <Select disabled>
        <SelectTrigger>
            <SelectValue placeholder="No files available" />
        </SelectTrigger>
    </Select>
);
