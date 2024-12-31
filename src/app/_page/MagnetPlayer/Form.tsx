import { zodResolver } from "@hookform/resolvers/zod";
import { CloudDownloadIcon } from "lucide-react";
import { type ReactElement, type ReactNode, useEffect } from "react";
import { useForm, type UseFormReturn } from "react-hook-form";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import { Form as FormProvider, FormControl, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form";
import { Input } from "~/components/ui/input";

const formSchema = z.object({
    magnet: z
        .string()
        .url({ message: "Must be a valid URL." })
        .startsWith("magnet:", { message: "Must be a magnet link." })
});

type Schema = z.infer<typeof formSchema>;

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
        resolver: zodResolver(formSchema),
        defaultValues: {
            magnet: ""
        }
    });

    const handleSubmit = async ({ magnet }: Schema): Promise<void> => {
        await onMagnetChange?.(magnet);
    };

    useAutofillShortcut(form);

    return (
        <FormProvider {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="flex space-x-4"
            >
                <FormField
                    control={form.control}
                    name="magnet"
                    render={({ field }): ReactElement => (
                        <FormItem className="grow">
                            <FormLabel>
                                Magnet Link
                            </FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="magnet:?xt=urn:btih:..."
                                    disabled={onMagnetChange === undefined}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
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
        </FormProvider>
    );
};
