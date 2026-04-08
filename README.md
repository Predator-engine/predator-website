🐺 Predator Chess Engine — Technical Overview & Full Feature Documentation
Predator is a modern, high‑performance UCI chess engine designed for players, analysts, correspondence competitors, and engine developers who demand cutting‑edge search technology, adaptive strategic behavior, and uncompromising tactical strength.
Built on a deeply optimized alpha‑beta core and enhanced with NNUE evaluation, Predator delivers a uniquely dynamic playing style while maintaining long‑term positional stability.

This document provides a complete overview of Predator’s architecture, subsystems, learning modules, opening preparation tools, tablebase integration, and advanced configuration options.

⚡ 1. Hybrid Search Architecture
Predator uses a highly optimized alpha‑beta framework with a full suite of selective search techniques:

Selective Pruning & Reductions
LMR (Late Move Reductions) — reduces depth for low‑priority moves

LMP (Late Move Pruning) — prunes weak moves early

ProbCut — probabilistic forward pruning for high‑confidence cutoffs

Razoring — shallow tactical pruning

Futility Pruning — eliminates moves unlikely to improve evaluation

Null‑Move Pruning + Verification — aggressive pruning with safety checks

Move Ordering Heuristics
History heuristics

Continuation history

Capture history

Killer moves

Countermoves

Deep quiet‑move heuristics

Parallel Search
Predator scales efficiently across multiple threads, with optimized split points and thread synchronization.

🧠 2. NNUE Evaluation + Classical Heuristics
Predator integrates a modern NNUE (Efficiently Updatable Neural Network) evaluation pipeline with classical positional terms:

NNUE Components
Neural pattern recognition

Incremental feature updates

High‑precision evaluation of complex structures

Classical Components
Mobility

King safety

Pawn structure

Space and tension

Material scaling

Dynamic Correction Layers
Predator applies adaptive correction terms based on:

phase of the game

material balance

king exposure

structural imbalances

WDL Scaling
Evaluation is converted into Win/Draw/Loss probabilities for improved decision‑making.

💎 3. Shashin Crystal Model — Adaptive Playing Style
Predator dynamically adjusts its strategic profile using heuristics inspired by Shashin’s theory of chess styles.

Modes
Tal Mode — sharp, tactical, sacrificial play

Petrosian Mode — prophylactic, defensive, risk‑controlled play

Capablanca Mode — clean, positional clarity and long‑term planning

Fortress Mode — detection and maintenance of fortress structures

Real‑Time Adaptation
Predator analyzes:

king safety

pawn structure

piece activity

tension and complexity

material distribution

…and adjusts its risk profile accordingly.

📚 4. FenBook — Position‑Based Opening System
Predator includes a custom opening book engine based on FEN positions, not move sequences.

Key Features
Direct probing from FEN

“Best move” or “Wide move” selection

Diagnostic output for training

Seamless integration with UCI search

Works independently of CTG/BIN books

FenBook allows Predator to operate with flexible, position‑driven opening preparation.

🎓 5. Predator Staw — Self‑Cleaning Experience Book
Predator includes a unique self‑learning, self‑cleaning experience book, unlike anything in Stockfish or other engines.

What Predator Staw Does
Records moves, evaluations, and outcomes

Strengthens successful lines

Weakens or removes poor lines

Integrates NNUE evaluations

Integrates Syzygy TB results

Integrates FenBook data

Avoids repeating losing variations

Learns from long‑term patterns

Self‑Cleaning System
Predator automatically removes:

statistically weak moves

TB‑losing moves

NNUE‑refuted moves

unstable or low‑depth lines

Configurable Options
Experience Book Moves — number of moves stored per position

Experience Book Min Depth — minimum depth required to record a move

Concurrent Experience — multi‑threaded learning

Clean Predator — automatic pruning of weak lines

This system gives Predator a living, evolving opening and middlegame memory.

🧬 6. Correspondence Mode
Predator includes a dedicated Correspondence Mode for ICCF, LSS, and deep analysis.

Behavior in Correspondence Mode
Reduced pruning (safer search)

Increased depth and stability

More TB probing

More accurate static evaluation

Avoidance of risky tactical lines

Preference for long‑term strategic plans

Predator becomes a “strategic professor” rather than a “tactical assassin.”

♟️ 7. Syzygy Tablebase Integration
Predator fully supports Syzygy WDL + DTZ tablebases.

Options
SyzygyProbeDepth — depth at which TB probing begins

SyzygyProbeLimit — maximum number of pieces for TB use

SyzygyUseDTZ — precise distance‑to‑zeroing evaluation

SyzygyUseWDL — fast win/draw/loss probing

Syzygy50MoveRule — respects the 50‑move rule

TB‑Aware Search
Predator:

avoids TB‑losing lines

prefers TB‑winning continuations

avoids 50‑move‑rule traps

recognizes fortress positions

reduces pruning near TB ranges

This ensures perfect endgame play.

🛠️ 8. UCI Options & Customization
Predator exposes a wide range of UCI options:

Search & Performance
Threads

Hash

Move Overhead

Minimum Thinking Time

MultiPV

Skill Level / Elo Limiting

Opening Preparation
UseBook

CTG/BIN book support

FenBook configuration

Learning
Predator Staw (Experience Book)

Clean Predator

Read‑only learning

Persisted learning

NNUE
Network selection

Small/large network modes

Endgame
Syzygy TB configuration

Correspondence Mode

🎮 9. Playing Style
Predator plays like a calculated attacker:

sharp tactical vision

strong king‑hunting instincts

deep positional understanding

excellent endgame technique

adaptive risk management

The engine shifts between aggression, prophylaxis, and clarity depending on the structure.

📦 10. Open‑Source & Actively Developed
Predator is released as open‑source software for:

engine tournaments

research

analysis

development

experimentation

Executables and source code are available in the repository.

If you want, I can now:

format this as a GitHub‑ready README.md

add badges, sections, tables, or logos

create a short version and long version

prepare a website‑optimized version for your Predator page

Just tell me which format you want next.
