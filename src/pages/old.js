/** @jsx jsx */
import { jsx } from "theme-ui"

import Image from "../components/image"
import "../sample.css"

const Subtitle = props => (
  <p className="subtitle" sx={{ color: "text" }}>
    {props.children}
  </p>
)

const YouTubeIcon = ({ link }) => (
  <a
    className="icon"
    target="_blank"
    rel="nofollow noopener noreferrer"
    href={link}
  >
    <svg
      className="small-icon"
      viewBox="0 0 1792 1792"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1280 896q0-37-30-54l-512-320q-31-20-65-2-33 18-33 56v640q0 38 33 56 16 8 31 8 20 0 34-10l512-320q30-17 30-54zm512 0q0 96-1 150t-8.5 136.5-22.5 147.5q-16 73-69 123t-124 58q-222 25-671 25t-671-25q-71-8-124.5-58t-69.5-123q-14-65-21.5-147.5t-8.5-136.5-1-150 1-150 8.5-136.5 22.5-147.5q16-73 69-123t124-58q222-25 671-25t671 25q71 8 124.5 58t69.5 123q14 65 21.5 147.5t8.5 136.5 1 150z"
        fill="#999"
      ></path>
    </svg>
  </a>
)

const Link = ({ link, children }) => (
  <a className="project" rel="nofollow" href={link}>
    {children}
  </a>
)

const links = {
  twitter: "https://twitter.com/zenriaaa",
  github: "https://github.com/mwufi",
}

const IndexPage = props => (
  <div id="container">
    <div className="content">
      <div id="side" className="col">
        <div id="photo" className="photo animate">
          <Image />
        </div>
        <div className="profiles">
          <a className="icon" href={links.github} rel="me">
            <svg
              id="ic0"
              className="profile-icon animate"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1664 896q0 251-146.5 451.5t-378.5 277.5q-27 5-39.5-7t-12.5-30v-211q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-86-13.5q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 89t.5 54q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
                fill="#999"
              ></path>
            </svg>
          </a>
          <a className="icon" href={links.twitter} rel="me">
            <svg
              id="ic1"
              className="profile-icon animate"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"
                fill="#999"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div id="main" className="col">
        <h1 id="title" className="animate" sx={{ color: "text" }}>
          Hi! I’m{" "}
          <span className="name" sx={{ color: "accent" }}>
            Zen Tang
          </span>
          , a machine learning/software engineer in sunny London 🌞
        </h1>
        <div id="about" className="animate">
          <p>
            My interests include data visualization, distributed systems, mobile
            apps, and machine learning. But mostly, I just like writing and
            shipping software.
          </p>
        </div>
        <div id="projects" className="animate">
          <Subtitle>Fun stuff I’ve built, with friends</Subtitle>
          <ul>
            <li>
              A live, in-car video streaming service for{" "}
              <Link link="https://wayve.ai">Wayve AI</Link>. Lots of other
              things here :)
            </li>
            <li>
              A tiny piece of Facebook: if you get an{" "}
              <Link link="https://www.youtube.com/watch?v=FiwbdwGSizw">
                Anniversary video
              </Link>
              , you can edit which pieces of content go in there
              <YouTubeIcon link="https://www.theverge.com/2014/3/17/5518414/how-facebook-made-its-look-back-videos"></YouTubeIcon>
            </li>
          </ul>

          <Subtitle>Smaller Projects</Subtitle>
          <ul>
            <li>
              <a
                className="project"
                rel="nofollow"
                href="https://github.com/mwufi/pytorch-gqn"
              >
                Generative Query Networks
              </a>{" "}
              in PyTorch
              <YouTubeIcon link="https://vimeo.com/345774866"></YouTubeIcon>
            </li>

            <li>
              <a
                className="project"
                href="https://github.com/pukacheen/MagicBrush"
                rel="nofollow"
              >
                MagicBrush
              </a>
              , an interactive painting app with Fast Neural Style Transfer
              &nbsp;
              <YouTubeIcon link="https://www.youtube.com/watch?v=splMEzd4ClU&feature=youtu.be"></YouTubeIcon>
            </li>

            <li>
              <a
                className="project"
                href="https://github.com/mwufi/test/blob/master/demos/writeups/README.md"
                rel="nofollow"
              >
                GANBox
              </a>
              , a playground for GANs
            </li>
          </ul>
        </div>
        <p id="email" className="animate">
          I'm always interested in hearing from people! Write me at tangzen09@X,
          where X=the google mail service.
        </p>
        <p>
          Check out <a href="https://mwufi.github.io/">my blog</a>!!
        </p>
        <p>
          Theme by <a href="https://keithito.com/">Keith Ito</a>
        </p>
      </div>
    </div>
  </div>
)

export default IndexPage
