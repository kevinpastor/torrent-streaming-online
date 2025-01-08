import { type ReactNode } from "react";
import { type TorrentFile } from "webtorrent";

import { Select, SelectItem } from "~/components/Select";

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
    supportedFormats.some(({ extension, mimeType }: Format): boolean => (
        file.path.endsWith(extension)
        // At runtime, `type` is defined.
        || ("type" in file && file.type === mimeType)
    ))
);

interface Props {
    files: TorrentFile[]
    selectedFilePath: string
    onChange: (path: string) => void
}

export const FileSelector = ({
    files,
    selectedFilePath,
    onChange: handleChange
}: Props): ReactNode => (
    <Select
        defaultValue={selectedFilePath}
        onValueChange={handleChange}
        className="mr-2 bg-background"
    >
        {files
            .sort(({ path: a }: TorrentFile, { path: b }: TorrentFile): number => (a.localeCompare(b)))
            .map((file: TorrentFile): ReactNode => (
                <SelectItem
                    key={file.path}
                    value={file.path}
                    disabled={!isFormatSupported(file)}
                >
                    {file.path}
                </SelectItem>
            ))}
    </Select>
);
