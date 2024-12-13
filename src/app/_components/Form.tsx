import { Loader2 } from 'lucide-react';
import { ReactNode } from "react"
import { useFormStatus } from 'react-dom';

import { Button } from '~/components/ui/button';

export const Submit = (): ReactNode => {
    const { pending } = useFormStatus()

    return (
        <Button
            type="submit"
            disabled={pending}
        >
            {pending && <Loader2 className="animate-spin" />}
            Load
        </Button>
    );
};
