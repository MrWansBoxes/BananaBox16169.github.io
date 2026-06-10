## Design

Our robot for the DECODE season, **Bumblebee** (ARCHEOBOT XYZ), is the fourth
iteration in a season of constant refinement — each build measurably better than
the last.

**Drivetrain.** We moved beyond our usual configuration to a belt-driven
drivetrain: two 312 RPM goBILDA motors in the back drive 104 mm GripForce mecanum
wheels up front. After discovering at the State Championship that heavier motors
left us underpowered, we stripped the robot down relentlessly — the final
drivetrain weighs just **4.1 pounds total**, which keeps us fast and lets us take
full advantage of Pedro Pathing's predictive braking. Our side plates evolved
across generations from PLA to aluminum to a custom **stainless steel** drivetrain
for a stronger, more defensive robot.

**Turret & launcher.** A rotating turret powered by a 6000 RPM motor lets us shoot
from different angles and distances. The turret carries a hood that automatically
adjusts the flight path by distance, eight goBILDA steel flywheels that hold inertia
for rapid-fire shooting, and a gate that shortens the path between artifact and
flywheel. We settled on a 30–50° launch angle to cut backspin and shoot accurately.

**Intake.** Across three generations our intake went from heavy and narrow to a
lightweight design using surgical tubing on the ends with gecko wheels in the
middle. Funnels with a sharp-then-shallow angle pull artifacts out of corners and
line up three at a time.

**Endgame & durability.** A kickstand raises the part of the robot that sits outside
the parking zone, maximizing our endgame score. Absorbent bumpers protect the
chassis and odometry after a hard collision dented an earlier build.

## Strategy

**Autonomous.** We score our 3-artifact preload, then the 9 artifacts on the field
plus more from the gate — **18+ artifacts** — before parking, all inside the
30-second window.

**TeleOp.** Depending on our alliance we run one of two plans: collect from across
the field and the human player and strafe to shoot from the far zone, or cycle
quickly through the close launching zone. In both, we use our size and strength to
play controlled defense. We favor rapid-fire shooting over spindexers, which we've
found slower and less reliable to maintain during qualifiers.

**Endgame.** In the final 20 seconds we keep scoring, then in the last 5 seconds
park half the robot inside the zone and use the kickstand for the rest.

## Programming

We program in **Java** in Android Studio, organized into reusable subsystems
(turret, intake/transfer, drivetrain) shared between our autonomous and TeleOp —
the standard architecture used across FTC. Autonomous paths run on **Pedro
Pathing**, an open-source pathing library whose predictive braking lets the robot
slow down and travel faster.

Our turret aiming math computes the distance to the goal, predicts where an artifact
will land while the robot is moving, solves for the turret angle, and looks up the
right hood angle from an interpolation table — letting us shoot accurately on the
move.

Thanks to mentor Danny Diaz and our experience with the current Control Hub, we were
selected from thousands of teams worldwide to **alpha/beta test FIRST's next-
generation control system** — the SystemCore and MotionCore, along with the A301
actuator. As we build expertise with the new system, we're sharing what we learn
across the FIRST community.
