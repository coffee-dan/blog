---
author: me
favicon: ⇆
title: Christmas Eve and Day
permalink: /decadv/25
---

Christmas daze

(i didn't have time to write on the 24th but i did work)

During the spare time between parties and gift exchanges and food I started working on a bare bones peer-to-peer tic-tac-toe game. It is highly instructive and I feel has already saved me a whole lot of time. I discovered:

It is important to send messages in such a way that the other player can detect that they were sent out of order (tagging with auto-incremented ids and storing id of last process message)

Both parties must send and receive messages. I wrote a bit of code before realizing that client-server wont work for turn based games. The server needs to send a message to the client informing them of their moves.

The non-initiating player must pick the opposing "team" for tic-tac-toe (this applies to chess as well).

Excited to keep working on this!
