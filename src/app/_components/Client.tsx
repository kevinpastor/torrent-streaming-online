import { ClipboardEvent, ReactNode, use, useState } from "react"
import { Instance, Torrent } from "webtorrent"

import { Input } from '~/components/ui/input';

import { TorrentWithFallback } from "./TorrentWithFallback";

interface Props {
    clientPromise: Promise<Instance>
}

export const Client = ({ clientPromise }: Props): ReactNode => {
    const client = use(clientPromise)

    const [torrentPromise, setTorrentPromise] = useState<Promise<Torrent>>()

    const loadTorrent = (magnet: string): void => {
        for (const torrent of client.torrents) {
            torrent.destroy()
        }

        const promise = new Promise<Torrent>((resolve) => {
            client.add(magnet, resolve)
        })

        setTorrentPromise(promise)
    }

    const handlePaste = ({ clipboardData }: ClipboardEvent): void => {
        if (clipboardData === null) {
            return
        }

        const magnet = clipboardData.getData("text")
        loadTorrent(magnet)
    }

    return (
        <div className="grid grid-cols-3 gap-4">
            <div
                className="col-span-2 space-y-2"
            >
                <label
                    htmlFor="magnet"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Magnet
                </label>
                <Input
                    type="text"
                    id="magnet"
                    autoComplete="off"
                    name="magnet"
                    onPaste={handlePaste}
                // defaultValue="magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent"
                />
                <div className="text-[0.8rem] text-muted-foreground">
                    Paste a URL above.
                </div>
            </div>
            <TorrentWithFallback torrentPromise={torrentPromise} />
        </div>
    );
}
