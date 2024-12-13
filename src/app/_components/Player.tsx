import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import { ReactNode } from "react"

import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

interface Props {
    url: string
}

export const Player = ({ url }: Props): ReactNode => (
    <MediaPlayer
        src={url}
        aspectRatio="16/9"
        viewType="video"
        playsInline
        className="col-span-3"
    >
        <MediaProvider />
        <DefaultVideoLayout
            colorScheme="dark"
            icons={defaultLayoutIcons}
        />
    </MediaPlayer>
)
