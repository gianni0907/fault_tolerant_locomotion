# Learning Fault-Tolerant Locomotion with Adaptive Gait Timing

This repository contains videos and a demonstration [website](https://gianni0907.github.io/fault_tolerant_locomotion) for a project on fault-tolerant quadruped locomotion under actuator power loss.

## Overview

This project presents a deep Reinforcement Learning approach that enables legged robots to reorganize coordination and gait timing after hardware failures. The method employs an asymmetric actor-critic architecture, in which the critic has access to privileged information during training while the actor learns to reconstruct a corresponding latent representation from proprioceptive observations. The approach targets larger quadrupeds, where increased mass and tighter actuation limits make the aggressive, high-frequency compensation strategies seen on smaller platforms infeasible.

## Key Features

- **Asymmetric Actor-Critic**: Privileged information available to the critic during training, with the actor reconstructing a latent representation from a history of proprioceptive observations
- **Latent-Alignment Loss**: An auxiliary objective encouraging consistency between actor and critic representations
- **Adaptive Gait Timing**: The action space is augmented with a learnable gait frequency parameter, adapting to terrain variations and actuator degradation without predefined faulty-leg strategies
- **Real Platform**: Validated in high-fidelity simulation on uneven terrain and in real-world experiments on flat ground using the 68 kg KYON quadruped robot

## Contents

- `index.html` - Interactive demonstration website showcasing the research
- `videos/` - Simulation and experimental videos of the quadruped locomoting under joint failure
- `images/` - Architecture diagrams and visual assets
- `script.js` - JavaScript for the demonstration website
- `styles.css` - Styling for the demonstration website

## Demonstrations

The repository includes:
- **MuJoCo Simulations**: Videos of the KYON robot, with and without its upper limbs, climbing stairs and handling upper-body payload under joint failure conditions
- **Real-world Experiments**: Zero-shot sim-to-real transfer of the learned policy on the hardware
- **Full Project Video**: A comprehensive overview available on YouTube

## Authors

Giovanbattista Gravina, Luca Rossini, Carlo Rizzardo, Arturo Laurenzi, Nikos Tsagarakis

Research conducted at the [Humanoids and Human Centered Mechatronics (HHCM) Lab](https://hhcm.iit.it/), Italian Institute of Technology (IIT).

## License

© 2025 Giovanbattista Gravina - All rights reserved.
