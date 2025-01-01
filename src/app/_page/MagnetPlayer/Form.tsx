import { valibotResolver } from "@hookform/resolvers/valibot";
import { CloudDownloadIcon } from "lucide-react";
import { type ReactNode, useEffect } from "react";
import { useForm, type UseFormReturn } from "react-hook-form";
import { type InferOutput, pipe, startsWith, strictObject, string, url } from "valibot";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

const schema = strictObject({
    magnet: pipe(
        string(),
        url("Must be a valid URL."),
        startsWith("magnet:", "Must be a magnet link.")
    )
});

export type Schema = InferOutput<typeof schema>;

const sintelOpenMovieMagnet = "magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent";
const useAutofillShortcut = (form: UseFormReturn<Schema>): void => {
    const { getValues, setValue, setFocus } = form;
    useEffect((): (() => void) => {
        const handleKeyDown = (event: KeyboardEvent): void => {
            if (event.ctrlKey && event.key === "m") {
                event.preventDefault(); // Prevent any default browser behavior.
                setFocus("magnet");
                setValue("magnet", sintelOpenMovieMagnet); // Autofill the input with the saved magnet.
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return (): void => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [getValues, setFocus, setValue]);
};

interface Props {
    onMagnetChange?: (magnet: string) => void | Promise<void>
}

export const Form = ({ onMagnetChange }: Props): ReactNode => {
    const form = useForm<Schema>({
        resolver: valibotResolver(schema),
        defaultValues: {
            magnet: ""
        }
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = form;

    const handleSuccess = async ({ magnet }: Schema): Promise<void> => {
        await onMagnetChange?.(magnet);
    };

    useAutofillShortcut(form);

    return (
        <form
            onSubmit={handleSubmit(handleSuccess)}
            className="flex space-x-4"
        >
            <div className="space-y-2 grow">
                <Label htmlFor="magnet">
                    Magnet Link
                </Label>
                <Input
                    {...register("magnet")}
                    id="magnet"
                    placeholder="magnet:?xt=urn:btih:..."
                    disabled={onMagnetChange === undefined}
                />
                {errors.magnet && (
                    <p className="text-[0.8rem] font-medium text-destructive">
                        {errors.magnet?.message}
                    </p>
                )}
            </div>
            <Button
                // A top margin is added to match the space taken by the form label.
                className="mt-8"
                type="submit"
                disabled={onMagnetChange === undefined}
            >
                <CloudDownloadIcon />
                Load
            </Button>
        </form>
    );
};
