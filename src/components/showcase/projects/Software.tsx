import React from 'react';
// @ts-ignore
import saga from '../../../assets/pictures/projects/software/saga.mp4';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import scroll from '../../../assets/pictures/projects/software/scroll.mp4';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps { }

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on
                over the last few years.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>rexshansam22.com</h2>
                <br />
                <p>
                    rexshansam22.com is my portfolio website, and also the
                    website you are on right now. This project was an absolute
                    joy to make and challenged me both technically and
                    creatively. Early in 2026, I knew I wanted to make an
                    interactive portfolio to aid my job search. I eventually got
                    the idea for this site around early February and began
                    development early March. I've been developing it alongside
                    my last semester at school and if you are reading this, it's
                    pretty much done!
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={computer} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Blender Scene of the 3D website.
                            The scene from Blender was baked and exported in a
                            GLTF format.
                        </sub>
                    </p>
                </div>
                <p>
                    Now, a quick technical breakdown of the site. The website is
                    split into two parts, the 3D site, and the 2D OS site. The
                    3D site uses Three.js to render the scene and renders the 2D
                    site inside of it using an iframe. The 2D OS site is a
                    simple react site that is hosted{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                    // href="https://henryheffernan.vercel.app/"
                    >
                        here
                    </a>{' '}
                    and works as a standalone web app. The actual rendering of
                    the 2D site is accomplished using a CSS renderer provided by
                    Three.js that transforms the html of the 2D site with 3D CSS
                    transforms to give the illusion of three dimensionality.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                        // href="https://henryheffernan.com"
                        >
                            <p>
                                <b>[3D Site]</b> -rexshan.com
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://rexshansam.netlify.app/"
                        >
                            <p>
                                <b>[OS Site]</b> - rexshansam.netlify.app
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://rexshansam.netlify.app/"
                        >
                            <p>
                                <b>[GitHub]</b> - 3D Site Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://rexshansam.netlify.app/"
                        >
                            <p>
                                <b>[GitHub]</b> - OS Site Repository
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    I'm skipping over a lot of details in exchange for brevity,
                    but I do plan on doing a more in depth breakdown for those
                    interested sometime in the future. To get updates with that
                    project feel free to follow me on twitter{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://rexshansam.netlify.app/"
                    >
                        @RexshanSam
                    </a>
                </p>
            </div>
            <div className="text-block">
                <h2>LockVault — Smart Storage Locker Management System</h2>
                <br />
                <p>
                    A full-stack web app that lets users browse, reserve, and manage
                    physical storage lockers — like a digital booking system for airport/gym/office lockers.
                    Admins can manage the locker inventory; regular users can reserve them with time slots.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={saga} />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 2: </b> LockVault — Smart Storage Locker Management System
                            </sub>
                        </p>
                    </div>
                </div>
                <p>
                    How it works
                    Authentication
                    JWT-based login/register with two roles — admin and user. Access tokens expire in 15 minutes, refresh tokens last 1 day. Route protection is handled on both frontend (React routes) and backend (custom IsAdminRole permission class).
                    Locker Management (Admin only)
                    Admins can create, update, and delete lockers. Each locker has a number, location, size (small/medium/large), and status (available/reserved). A seed command (seed_lockers) auto-creates 20 sample lockers across 4 locations.
                    Reservation System (Users)
                    Users pick an available locker and set a reserved_from / reserved_until time window. When a reservation is created, the locker status automatically flips to reserved via Django signals. On release or expiry, it returns to available. Double-booking is prevented at the DB level with overlapping queries.
                    Frontend UI
                    Dark theme with glassmorphism (frosted-glass cards). Includes a live countdown timer for active reservations, role-based dashboard views, toast notifications, and a responsive layout.
                    API Documentation
                    Full Swagger UI auto-generated via drf-spectacular — useful for testing all endpoints directly in the browser.

                    lockvault/
                    ├── backend/       → Django app (users, lockers, reservations apps)
                    └── frontend/      → React/Vite app (pages, components, API layer, context)
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://smart-storage-locker.vercel.app/"
                        >
                            <p>
                                <b>[GitHub]</b> - LockVault — Smart Storage Locker Management System
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/RexshanSam/SmartStorageLocker"
                        >
                            <p>
                                <b>[GitHub]</b> - LockVault — Smart Storage Locker Management System
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    Its Still Live In the Internet You Can Still view The Project
                </p>
            </div>
            <div className="text-block">
                <h2>⛳ Golf Charity Subscription Platform</h2>
                <br />
                <p>
                    A full-stack web app where golf players subscribe monthly, enter their scores, and those scores become lottery numbers for a monthly prize draw. Part of the prize pool goes to a charity of the user's choice — so it's a mix of golf gamification, lottery draw system, and charity fundraising.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={scroll} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b>
                            The Project Golf Charity Subscription Platform Overview
                        </sub>
                    </p>
                </div>
                <p>
                    How it works
                    Subscription & Auth
                    Users sign up and pick a plan — $29.99/month or $299.99/year — paid via Stripe. Supabase handles authentication. Stripe webhooks update the user's subscription status in the database in real time.
                    Score Entry → Lottery Numbers
                    Users enter their Stableford golf scores. The DB automatically keeps only the last 5 scores via a PostgreSQL trigger that deletes the oldest on insert. Those 5 scores become the user's lottery numbers for the monthly draw.
                    Monthly Draw System
                    A 3-tier prize draw runs each month:

                    5-number match → 40% of pool (jackpot, rolls over if no winner)
                    4-number match → 35%
                    3-number match → 25%

                    The draw engine supports two modes: pure random (1–45) or algorithmic (weighted by historical score frequency — rarer scores get higher weight).
                    Charity Contribution
                    Each user picks a charity and sets what percentage (10–100%) of their subscription goes to it. Monthly contributions are tracked per user in a separate table.
                    Admin Panel
                    Admins (set via is_admin = true in the DB) can manage users, charities, configure draws, simulate draws before running them, upload winner verification proof, and view an analytics/reports dashboard.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/RexshanSam/RexshanSam-golf-charity-subscription-platform"
                        >
                            <p>
                                <b>[GitHub]</b> - Skip the Scroll Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/RexshanSam/RexshanSam-golf-charity-subscription-platform"
                        >
                            <p>
                                <b>[Chrome Web Store]</b> - Skip the Scroll
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    /app
                    /api           → Serverless API routes (scores, draws, stripe, winners, admin)
                    /(public)      → Public pages
                    /(auth)        → Login / Signup
                    /(dashboard)   → Protected user pages (scores, charity, winnings)
                    /admin         → Admin panel (users, draws, charities, reports)
                    /lib           → Supabase client, Stripe config, Draw engine
                    /types         → TypeScript definitions
                    /supabase
                    /migrations    → SQL schema with RLS policies
                </p>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
