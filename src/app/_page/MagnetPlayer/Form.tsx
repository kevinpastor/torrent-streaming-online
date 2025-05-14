import { CloudDownloadIcon } from "lucide-react";
import { type FormEvent, type ReactNode, useRef, useState } from "react";

import { Button } from "~/components/Button";
import { Input } from "~/components/Input";
import { InputDescription } from "~/components/InputDescription";
import { InputError } from "~/components/InputError";
import { Label } from "~/components/Label";
import { LinkButton } from "~/components/LinkButton";

const sintelOpenMovieMagnet = "magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent";

interface Props {
    onMagnetChange?: (magnet: string) => void | Promise<void>;
}

export const Form = ({ onMagnetChange }: Props): ReactNode => {
    const [error, setError] = useState<string>();

    const ref = useRef<HTMLInputElement>(null);
    const handleClick = (): void => {
        if (ref.current === null) {
            return;
        }

        ref.current.focus();
        ref.current.value = sintelOpenMovieMagnet;
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const magnet: FormDataEntryValue | null = formData.get("magnet");
        if (magnet === null || typeof magnet !== "string") {
            return;
        }

        const trimmedMagnet = magnet.trim();

        if (trimmedMagnet.length === 0) {
            setError("Required.");
            return;
        }

        if (!trimmedMagnet.startsWith("magnet:")) {
            setError("Must be a magnet link.");
            return;
        }

        setError(undefined);

        await onMagnetChange?.(trimmedMagnet);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex gap-4"
        >
            <div className="flex flex-col gap-2 grow">
                <Label htmlFor="magnet">
                    Magnet Link
                </Label>
                <Input
                    ref={ref}
                    id="magnet"
                    name="magnet"
                    placeholder="magnet:?xt=urn:btih:..."
                    disabled={onMagnetChange === undefined}
                    className={error ? "border-destructive focus-visible:ring-destructive" : undefined}
                />
                {error
                    ? (
                        <InputError>
                            {error}
                        </InputError>
                    )
                    : (
                        <InputDescription className="has-disabled:text-muted-foreground/50">
                            Try it with
                            {" "}
                            <LinkButton
                                onClick={handleClick}
                                disabled={onMagnetChange === undefined}
                            >
                                Sintel
                            </LinkButton>
                            , an open-source movie.
                        </InputDescription>
                    )}
            </div>
            <Button
                type="submit"
                disabled={onMagnetChange === undefined}
                // Top padding is used instead of `items-end` on the container to consider input helper text.
                className="mt-[22px]"
            >
                <CloudDownloadIcon />
                Load
            </Button>
        </form>
    );
};
