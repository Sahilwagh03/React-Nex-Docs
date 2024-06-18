import React from 'react'
import { CentralIcon, CollabIcon, CollabIconContainer, Collaboration } from '../CollaborationCircle/Collaboration'
import discord from "../../assets/collaboration/discord.png";
import figma from "../../assets/collaboration/figma.png";
import framer from "../../assets/collaboration/framer.png";
import notion from "../../assets/collaboration/notion.png";
import photoshop from "../../assets/collaboration/photoshop.png";
import protopie from "../../assets/collaboration/protopie.png";
import raindrop from "../../assets/collaboration/raindrop.png";
import slack from "../../assets/collaboration/slack.png";
import brainwaveSymbol from '../../assets/brainwave-symbol-white.svg'
const CollaborationCircleWrapper = () => {
    const collabApps = [
        {
            id: "0",
            alt: "Figma",
            icon: figma,
            width: 26,
            height: 36,
        },
        {
            id: "1",
            alt: "Notion",
            icon: notion,
            width: 34,
            height: 36,
        },
        {
            id: "2",
            alt: "Discord",
            icon: discord,
            width: 36,
            height: 28,
        },
        {
            id: "3",
            alt: "Slack",
            icon: slack,
            width: 34,
            height: 35,
        },
        {
            id: "4",
            alt: "Photoshop",
            icon: photoshop,
            width: 34,
            height: 34,
        },
        {
            id: "5",
            alt: "Protopie",
            icon: protopie,
            width: 34,
            height: 34,
        },
        {
            id: "6",
            alt: "Framer",
            icon: framer,
            width: 26,
            height: 34,
        },
        {
            id: "7",
            alt: "Raindrop",
            icon: raindrop,
            width: 38,
            height: 32,
        },
    ];
    return (
        <div className='my-20'>
            <Collaboration>
                <CentralIcon icon={brainwaveSymbol.src} width={48} height={48} />
                <CollabIconContainer>
                    {
                        collabApps.map(({ icon, width, height, alt }, index) => (
                            <CollabIcon index={index} icon={icon.src} width={width} height={height} alt={alt} />
                        ))
                    }
                </CollabIconContainer>
            </Collaboration>
        </div>
    )
}

export default CollaborationCircleWrapper