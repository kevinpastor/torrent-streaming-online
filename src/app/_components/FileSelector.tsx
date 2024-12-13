import { ReactNode } from "react"
import { TorrentFile } from "webtorrent"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"

const isSupported = (file: TorrentFile): boolean => (
    file.path.endsWith(".mp4")
)

interface Props {
    files: TorrentFile[]
    selectedPath?: string
    onChange: (path: string) => void
}

export const FileSelector = ({ files, selectedPath, onChange: handleChange }: Props): ReactNode => {
    const file = files.find(({ path }) => path === selectedPath)

    if (file === undefined) {
        return (
            <div className="w-full aspect-video rounded-md border bg-black text-card-foreground shadow flex items-center justify-center">
                <span className="leading-7">
                    TODO
                </span>
            </div>
        )
    }

    return (
        <Select>
            <SelectTrigger>
                <SelectValue placeholder={file.path} />
            </SelectTrigger>
            <SelectContent>
                {files
                    .sort(({ path: a }, { path: b }) => (a.localeCompare(b)))
                    .map((file) => (
                        <SelectItem
                            key={file.path}
                            value={file.path}
                            disabled={!isSupported(file)}
                        >
                            {file.path}
                        </SelectItem>

                    ))
                }
            </SelectContent>
        </Select>
    )
}
