import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      I'm interested in ways to make outsized impact in the way we live. Through
      technology, science, and the stories we tell ourselves, we create the
      future.
    </h1>
    <img
      src="https://images.unsplash.com/photo-1531604250646-2f0e818c4f06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
      alt="flowers in a field"
    ></img>

    <h1>Work</h1>

    <div class="project">
      <h2>Wayve Technologies</h2>
      <p>
        I am a research engineer working to make self-driving cars. Our approach
        is to take cars as actors with no script - can a vehicle drive itself in
        a new environment? With strange people, lighting, road signs, and the
        works? The challenge of building generalizable intelligence is really
        interesting to me - I feel like deep learning has brought so many things
        into the feasibility zone (like imitation learning in real life, which
        works ok-ish) but there are still so many things on the boundary which
        we care about but don't yet know how to solve (can talk for days). It's
        also <em>freaky cool</em> (and also a bit scary) to have code run on a
        vehicle on the actual street.{" "}
      </p>

      <ul>
        <li>
          Lots of computer vision involved. It's super important for the car not
          to <em>miss</em> anything important. And developing the tools to
          understand the machine learning models so that it can do this is
          crucial for trust. I'm quite keen on exploring more how one can create{" "}
          <em>trustworthy</em> machine learning systems.
        </li>
        <li>
          How does it learn behaviors? Many interesting things here regarding
          skill acquisition (especially if the rules change!) One of the
          challenges we had early on was that there was no signal for the
          vehicle to stay on one side of the lane! More generally, what kind of
          things do we explicitly care about, and what kind of things do we
          leave for the model to learn? If ML research has taught us anything,
          it's 1) priors go a long way, but 2) data is surprisingly effective.{" "}
        </li>
        <li>
          I need to talk to people about imitation learning and the limits of
          behavioral cloning. Part of my goal is to build general robotic
          systems which can learn new skills. (<em>keep wishing ... ;</em>)
        </li>
      </ul>
    </div>

    <h1>Projects</h1>

    <div class="project">
      <h2>NeuRender</h2>
      <p>
        Imagine video games, but where the graphics were rendered by a{" "}
        <em>deep renderer</em>, a neural network-powered system which would
        create rich, interactive renderings from thin air. Instead of creating
        assets for people, buildings, landscapes, etc, everything can be
        rendered on demand. You could potentially create virtual worlds from
        your own artwork. Or have a personalised experience unique to you.{" "}
      </p>
      <p>
        Currently I'm focusing on the graphics part, specifically the part that
        will generate 3D worlds from 2D data. It doesn't actually <em>need</em>{" "}
        to be fully 3D; all the renderer needs to do is render convincing
        changes in views, and the fact that having a 3D geometric prior helps
        with that is a coincidence.
      </p>
      <p>
        I'd love collaborators and/or funding. I have a Notion doc which I'll
        share once I separate the public and private parts, but it's roughly
        organised like so:
      </p>
      <ul>
        <li>Generative image inpainting</li>
        <li>Novel View Synthesis</li>
        <li>2.5D and 3D related estimation</li>
      </ul>
      <p>
        I might be wrong, but it does seem like we can rotate this image around
        the cloud with generative models. After all, look at StyleGAN!
      </p>
      <img
        alt="spacex launch"
        src="https://aproperpint.files.wordpress.com/2020/05/falcon051220.jpg"
      ></img>
    </div>

    <h1>Blog</h1>
    <p>
      I don't have one, but love writing about three distinct groups of things:
    </p>
    <ul>
      <li>
        <strong>Technical blog</strong>. Topics include: f-divergences (and
        GANs). Causal confusion in imitation learning. Setting up an AWS cluster
        to run RL experiments. Many things about deep neural nets which you
        would or would not like to know!
      </li>
      <li>
        <strong>Stories</strong>. Topics include: fanfic! Just random writing.
        Scenes and snippets. Most of these will be nothing, but this is what I
        produce the most of anyways. Also poems which will be intensely
        personal.
      </li>
      <li>
        <strong>Essays</strong>. Topics include: technology, the state. what
        might happen in the future. theories of rights (legal and otherwise).
        Information systems and society. history, education, and the meaning of
        life?
      </li>
    </ul>
    <p>Stay tuned!</p>

    <p>
      I'm always interested in hearing from people! Write me at tangzen09@X,
      where X=the google mail service.
    </p>
  </Layout>
)

export default SecondPage
