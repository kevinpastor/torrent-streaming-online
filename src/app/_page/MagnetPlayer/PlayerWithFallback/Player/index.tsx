import { MediaPlayer, MediaProvider } from "@vidstack/react";
import { type DefaultLayoutIcons, defaultLayoutIcons, DefaultVideoLayout } from "@vidstack/react/player/layouts/default";
import { AArrowDownIcon, AArrowUpIcon, AirplayIcon, ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon, AudioLinesIcon, CaptionsIcon, CaptionsOff, CastIcon, CheckIcon, CirclePlayIcon, CircleXIcon, DownloadIcon, EyeIcon, EyeOffIcon, FastForwardIcon, LibraryIcon, MaximizeIcon, MinimizeIcon, PauseIcon, PersonStandingIcon, PictureInPicture2, PictureInPictureIcon, PlayIcon, RewindIcon, RotateCcwIcon, SettingsIcon, Volume1Icon, Volume2Icon, VolumeOffIcon } from "lucide-react";
import { type ReactNode, use, useState } from "react";
import { type Torrent as ITorrent, type TorrentFile } from "webtorrent";

import { FileSelector, isFormatSupported } from "./FileSelector";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

const { KeyboardDisplay } = defaultLayoutIcons;

const icons: DefaultLayoutIcons = {
    AirPlayButton: {
        Default: AirplayIcon
    },
    GoogleCastButton: {
        Default: CastIcon
    },
    PlayButton: {
        Play: PlayIcon,
        Pause: PauseIcon,
        Replay: RotateCcwIcon
    },
    MuteButton: {
        Mute: VolumeOffIcon,
        VolumeHigh: Volume2Icon,
        VolumeLow: Volume1Icon
    },
    CaptionButton: {
        On: CaptionsIcon,
        Off: CaptionsOff
    },
    PIPButton: {
        Enter: PictureInPicture2,
        Exit: PictureInPictureIcon
    },
    FullscreenButton: {
        Enter: MaximizeIcon,
        Exit: MinimizeIcon
    },
    SeekButton: {
        Forward: FastForwardIcon,
        Backward: RewindIcon
    },
    DownloadButton: {
        Default: DownloadIcon
    },
    Menu: {
        Accessibility: PersonStandingIcon,
        ArrowLeft: ArrowLeftIcon,
        ArrowRight: ArrowRightIcon,
        Audio: AudioLinesIcon,
        AudioBoostUp: Volume2Icon,
        AudioBoostDown: Volume1Icon,
        Chapters: LibraryIcon,
        Captions: CaptionsIcon,
        Playback: CirclePlayIcon,
        Settings: SettingsIcon,
        SpeedUp: FastForwardIcon,
        SpeedDown: RewindIcon,
        QualityUp: ArrowUpIcon,
        QualityDown: ArrowDownIcon,
        FontSizeUp: AArrowUpIcon,
        FontSizeDown: AArrowDownIcon,
        OpacityUp: EyeIcon,
        OpacityDown: EyeOffIcon,
        RadioCheck: CheckIcon
    },
    KeyboardDisplay
};

interface Props {
    torrentPromise: Promise<ITorrent>;
}

export const Player = ({ torrentPromise }: Props): ReactNode => {
    const torrent: ITorrent = use(torrentPromise);

    const [selectedPath, setSelectedPath] = useState((): string | undefined => (
        // undefined
        torrent.files.find(isFormatSupported)?.path
    ));

    const url: string | undefined = torrent.files.find(
        ({ path }: TorrentFile): boolean => (path === selectedPath)
    )?.streamURL;

    if (url === undefined) {
        return (
            <div className="aspect-video border rounded-md">
                <div className="flex items-center justify-center gap-2 h-full text-sm text-gray-400">
                    <CircleXIcon className="h-4 w-4" />
                    No supported video file found.
                </div>
            </div>
        );
    }

    const handleChange = (path: string): void => {
        setSelectedPath(path);
    };

    return (
        // Background and inner border added to prevent flicker when loading the player.
        <div className="bg-black ring-1 ring-inset ring-zinc-800 rounded-md aspect-video object-contain">
            <MediaPlayer
                src={url}
                aspectRatio="16/9"
                viewType="video"
                playsInline
                // An explicit important border color is provided to better match the theme.
                // `flex` is used instead of `inline-flex` to prevent the player from having some ghost margin that appears on the parent.
                className="!border-zinc-800 !flex"
            >
                <MediaProvider />
                <DefaultVideoLayout
                    colorScheme="dark"
                    icons={icons}
                    slots={{
                        beforeCurrentTime: (
                            <FileSelector
                                files={torrent.files}
                                selectedPath={selectedPath}
                                onChange={handleChange}
                            />
                        )
                    }}
                />
            </MediaPlayer>
        </div>
    );
};
