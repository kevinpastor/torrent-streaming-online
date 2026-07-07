# Torrent Streaming Online

Stream torrents directly in your browser via a magnet link. No downloads, no installs, no server-side processing.

[torrentstreamingonline.com](https://torrentstreamingonline.com)

## Features

- **Browser-based streaming**: All torrent activity happens entirely client-side. Nothing is uploaded to or processed by a server.
- **Magnet link support**: Paste any magnet link and start streaming immediately.
- **In-browser video player**: Full-featured player (play/pause, seek, volume, fullscreen, picture-in-picture, captions) powered by [Vidstack](https://www.vidstack.io/).
- **Multi-file torrent support**: Switch between video files within a torrent using the in-player file selector.
- **Real-time stats**: Live peer count, download speed, upload speed, and progress displayed below the player.
- **Service Worker streaming**: Torrent data is piped through a Service Worker, enabling native `<video>` playback without buffering the entire file first.
- **PWA support**: Installable as a Progressive Web App.
- **No tracking of content**: The site does not host, store, or log any torrent content or activity.

## Limitations

Browser-based clients can only connect to peers via WebRTC; UDP/TCP are not accessible from a browser context. Torrents will only stream if the seeding peers support WebRTC.

WebTorrent support was [enabled by default in `libtorrent` on July 5, 2026](https://github.com/arvidn/libtorrent/pull/8532), but clients like qBittorrent and Transmission have not yet shipped a release built against it. Until they do, most torrents will not have reachable WebRTC peers.

Relevant upstream tracking:

- [arvidn/libtorrent#7283](https://github.com/arvidn/libtorrent/issues/7283)
- [qbittorrent/qBittorrent#17974](https://github.com/qbittorrent/qBittorrent/issues/17974#issuecomment-1302616587)
- [transmission/transmission#47](https://github.com/transmission/transmission/issues/47#issuecomment-1272237178)

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router) + [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/) (strict mode)
- [WebTorrent](https://webtorrent.io/), an in-browser torrent engine over WebRTC
- [Vidstack](https://www.vidstack.io/), an HTML5 video player
- [Tailwind CSS](https://tailwindcss.com/) v4
- [shadcn/ui](https://ui.shadcn.com/), a UI component primitives
- [Radix UI](https://www.radix-ui.com/), an accessible headless primitives
- [pnpm](https://pnpm.io/), a package manager

## License

[MIT licensed](LICENSE).
