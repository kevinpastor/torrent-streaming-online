import { type MediaErrorDetail, MediaPlayer, MediaProvider, type PlayerSrc, type VideoMimeType } from "@vidstack/react";
import { type DefaultLayoutIcons, defaultLayoutIcons, DefaultVideoLayout } from "@vidstack/react/player/layouts/default";
import { AArrowDownIcon, AArrowUpIcon, AirplayIcon, ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon, AudioLinesIcon, CaptionsIcon, CaptionsOff, CastIcon, CheckIcon, CirclePlayIcon, DownloadIcon, EyeIcon, EyeOffIcon, FastForwardIcon, LibraryIcon, MaximizeIcon, MinimizeIcon, PauseIcon, PersonStandingIcon, PictureInPicture2, PictureInPictureIcon, PlayIcon, RewindIcon, RotateCcwIcon, SettingsIcon, Volume1Icon, Volume2Icon, VolumeOffIcon } from "lucide-react";
import { type ReactNode, use, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { type Torrent, type TorrentFile } from "webtorrent";

import { FileSelector, isFormatSupported } from "./FileSelector";
import { Stats } from "./Stats/Stats";
import { UnsupportedFiles } from "./UnsupportedFiles";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

const isSupportedVideoMimeType = (type: string): type is VideoMimeType => (
    type === "video/mp4"
    || type === "video/webm"
    || type === "video/3gp"
    || type === "video/ogg"
    || type === "video/avi"
    || type === "video/mpeg"
    || type === "video/object"
);

const getSrc = (file: TorrentFile): PlayerSrc => {
    if (
        !("type" in file)
        || typeof file.type !== "string"
        || file.type.length === 0
        || !isSupportedVideoMimeType(file.type)
    ) {
        return file.streamURL;
    }

    return {
        src: file.streamURL,
        type: file.type
    };
};

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
    torrentPromise: Promise<Torrent>;
}

export const Player = ({ torrentPromise }: Props): ReactNode => {
    const torrent: Torrent = use(torrentPromise);

    const [selectedPath, setSelectedPath] = useState((): string | undefined => (
        torrent.files.find(isFormatSupported)?.path
    ));

    const selectedFile: TorrentFile | undefined = torrent.files.find(
        ({ path }: TorrentFile): boolean => (path === selectedPath)
    );

    const { showBoundary } = useErrorBoundary();
    const handleError = (error: MediaErrorDetail): void => {
        showBoundary(error);
    };

    const handleChange = (path: string): void => {
        setSelectedPath(path);
    };

    if (selectedFile === undefined) {
        return (
            <UnsupportedFiles />
        );
    }

    return (
        <>
            {/* Background and inner border added to prevent flicker when loading the player. */}
            <div className="bg-black ring-1 ring-inset ring-zinc-800 rounded-md aspect-video object-contain">
                <MediaPlayer
                    src={getSrc(selectedFile)}
                    aspectRatio="16/9"
                    viewType="video"
                    playsInline
                    autoPlay
                    // This callback does not seem to be called when a load error occurs. No other error handling for that case seems to be available.
                    onError={handleError}
                    // An explicit important border color is provided to better match the theme.
                    // `flex` is used instead of `inline-flex` to prevent the player from having some ghost margin that appears on the parent.
                    className="border-zinc-800! flex!"
                >
                    <MediaProvider />
                    <DefaultVideoLayout
                        colorScheme="dark"
                        icons={icons}
                        slots={{
                            beforeCurrentTime: (
                                <FileSelector
                                    files={torrent.files}
                                    selectedFilePath={selectedFile.path}
                                    onChange={handleChange}
                                />
                            )
                        }}
                    />
                </MediaPlayer>
            </div>
            <Stats torrent={torrent} />
        </>
    );
};
