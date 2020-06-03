---
title: Elixir
date: 2020-04-26
author: Zen
---

let's learn elixir, shall we?

Day 1
Scouting out Elixir in Action
by the time we reach the end, we'll be veritable experts in this language! Is it worth it? maybe, but we'll definitely find out.

reading this reminds me of the preface for BASIC in Hidden Figures..

the book focuses on concurrent programming. so hmm

Fascination with faraway lands and travel for pleasure were relatively new phenomena in the late eighteenth century, and collections such as this one were popular, introduc- ing both the tourist as well as the armchair traveler to the inhabitants of other coun- tries. The diversity of the drawings in Jeffreys’ volumes speaks vividly of the uniqueness and individuality of the world’s nations some 200 years ago.

Unless a system is responsive and reliable, it will eventually fail to fulfill its purpose. Therefore, when building server-side systems, it’s essential to make the system constantly available. This is the intended purpose of Erlang.

Man, *Erlang processes* are the bomb

**Chapter 2**

Elixir greets you!
```
Erlang/OTP 22 [erts-10.7.1] [source] [64-bit] [smp:4:4] [ds:4:4:10] [async-threads:1] [hipe] [dtrace]

Interactive Elixir (1.10.3) - press Ctrl+C to exit (type h() ENTER for help)
iex(1)>
```

WHOA COOL
```
iex(4)> Enum.map([1,2,3], fn x -> x*2 end)
[2, 4, 6]
iex(5)> Enum.sum([1,2,3])
6
iex(6)> map=%{1=>1,2=>2}
%{1 => 1, 2 => 2}
iex(7)> Enum.map(map, fn{k,v}->{k,v*2} end)
[{1, 2}, {2, 4}]
```

OMG~~
```
defmodule Geometry do
    def rectangle_area(a,b) do
        a*b
    end
end
```
And it works!!! Wow

```
iex(1)> Geometry.rectangle_area(4,5)
20
```
