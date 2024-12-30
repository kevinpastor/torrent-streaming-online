import { ReactNode } from "react";
import { TorrentFile } from "webtorrent";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";

interface Format {
    extension: string
    mimeType: string
}

export const supportedFormats: Array<Format> = [
    {
        extension: ".mp4",
        mimeType: "video/mp4"
    },
    {
        extension: ".avi",
        mimeType: "video/x-msvideo"
    },
    {
        extension: ".mpeg",
        mimeType: "video/mpeg"
    },
    {
        extension: ".ogv",
        mimeType: "video/ogg"
    },
    {
        extension: ".webm",
        mimeType: "video/webm"
    }
];

export const isFormatSupported = (file: TorrentFile): boolean => (
    supportedFormats.some(({ extension, mimeType }) => (
        file.path.endsWith(extension)
        // At runtime, `type` is defined.
        || ("type" in file && file.type === mimeType)
    ))
);

interface Props {
    files: TorrentFile[]
    selectedPath?: string
    onChange: (path: string) => void
}

export const FileSelector = ({
    files,
    selectedPath,
    // onChange
}: Props): ReactNode => {
    const file: TorrentFile | undefined = files.find(
        ({ path }: TorrentFile): boolean => (path === selectedPath)
    );

    if (file === undefined) {
        return (
            <div className="w-full aspect-video rounded-md border bg-black text-card-foreground shadow flex items-center justify-center">
                <span className="leading-7">
                    TODO
                </span>
            </div>
        );
    }

    return (
        <Select>
            <SelectTrigger className="mr-2">
                <SelectValue placeholder={file.path} />
            </SelectTrigger>
            <SelectContent>
                {files
                    .sort(({ path: a }, { path: b }) => (a.localeCompare(b)))
                    .map((file) => (
                        <SelectItem
                            key={file.path}
                            value={file.path}
                            disabled={!isFormatSupported(file)}
                        >
                            {file.path}
                        </SelectItem>

                    ))
                }
            </SelectContent>
        </Select>
    );
};
