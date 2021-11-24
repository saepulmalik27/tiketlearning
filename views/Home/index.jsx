// Libraries
import Section from '@/components/organisms/section'
import About from '@/components/templates/about'
import AudioPodcast from '@/components/templates/audiopodcast'
import Challenge from '@/components/templates/challenge'
import Hero from '@/components/templates/hero'
import Leaderboard from '@/components/templates/leaderboard'
import Photobooth from '@/components/templates/photobooth'
import PostIt from '@/components/templates/postit'
import Schedule from '@/components/templates/schedule'
import Layout from '@/hoc/layouts/common'
import React from 'react'

// Styles
// import styles from './style.module.scss'

const Home = () => {
    return (
        <Layout>
            <Hero />
            <About />
            <Section>
                <Schedule />
            </Section>
            <AudioPodcast />
            <Leaderboard />
            <Challenge />
            <PostIt />
            <Photobooth />
        </Layout>
    )
}

export default Home
