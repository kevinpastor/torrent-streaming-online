"use client"

import { MediaPlayer, MediaPlayerInstance, MediaProvider, Poster } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import { ReactNode, useEffect, useRef, useState } from "react"
import WebTorrent from "webtorrent"

import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

const Page = (): ReactNode => {
    const [isInitializing, setIsInitializing] = useState(true)
    const clientRef = useRef<WebTorrent.Instance>()
    // const videoRef = useRef<HTMLVideoElement>(null)
    const [streamUrl, setStreamUrl] = useState<string>("")
    const playerRef = useRef<MediaPlayerInstance>(null)

    useEffect(() => {
        if (clientRef.current !== undefined) {
            return
        }

        const execute = async () => {
            clientRef.current = new WebTorrent()

            const registration = await navigator.serviceWorker.register('/sw.min.js', { scope: './' })
            const serviceWorker = registration.installing || registration.waiting || registration.active
            if (serviceWorker === null) {
                return
            }

            const createServer = () => {
                clientRef.current!.createServer({ controller: registration })
                setIsInitializing(false)
            }

            if (serviceWorker.state === "activated") {
                createServer()
                return
            }

            serviceWorker.addEventListener("statechange", ({ target }) => {
                if (target === null || !("state" in target) || target.state !== "activated") {
                    return
                }

                createServer()
            })
        }

        // TODO
        execute().catch(console.error)
    }, [])

    const submit = (formData: FormData) => {
        const magnet = formData.get("magnet")
        console.log(magnet)
        if (clientRef.current === undefined || typeof magnet !== "string") {
            return
        }
        console.log("q-ywfupl")

        clientRef.current.add(magnet, ({ files }) => {
            console.log(files)
            const file = files.find(({ name }) => name.endsWith('.mp4'))
            if (file === undefined) {
                return
            }

            setStreamUrl(file.streamURL)
            playerRef.current?.startLoading()

            // file.streamTo(videoRef.current)
        })
    }

    return (
        <div className="m-4">
            <form
                action={submit}
                className="flex justify-between items-end gap-1"
            >
                <input
                    type="text"
                    id="magnet"
                    autoComplete="off"
                    name="magnet"
                    placeholder="Magnet"
                    defaultValue="magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent"
                />
                <button
                    type="submit"
                    disabled={isInitializing}
                >
                    Load
                </button>
            </form>
            <div>
                <MediaPlayer
                    ref={playerRef}
                    title="Sprite Fight"
                    src={streamUrl}
                    aspectRatio="16/9"
                    viewType="video"
                    load="custom"
                    posterLoad="eager"
                    playsInline
                >
                    <MediaProvider>
                        <Poster
                            src="https://files.vidstack.io/sprite-fight/poster.webp"
                            alt="Girl walks into campfire with gnomes surrounding her friend ready for their next meal!"
                        />
                    </MediaProvider>
                    <DefaultVideoLayout
                        colorScheme="dark"
                        icons={defaultLayoutIcons}
                    />
                </MediaPlayer>
            </div>
        </div>
    );
}

export default Page;