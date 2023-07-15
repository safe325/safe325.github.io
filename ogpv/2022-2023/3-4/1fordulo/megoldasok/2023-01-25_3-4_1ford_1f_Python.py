from turtle import *
from time import sleep
def kulcs(méret): # a kulcs feje és szára
    pensize(10)
    lt(90)
    fd(2*méret/3) # a "méret" a kulcs magassága, annak kétharmada a szára
    rt(90)
    for i in range(2):
        fd(0.2*méret) # a fej szélessége 0.4-méret, ez annak a fele
        lt(90)
        fd(méret/3) # a fej magassága méret/3
        lt(90)
        fd(0.2*méret)
    rt(90)
    fd(2*méret/3)
    lt(90)
def kulcs1(méret):
    speed(0)
    ht()
    kulcs(méret)
    fd(0.2*méret) # a bástya szélessége 0.2*méret
    lt(90)
    fd(méret/7) # a bástya magassága méret/7
    lt(90)
    fd(0.2*méret)
def kulcs2(méret):
    speed(0)
    ht()
    kulcs(méret)
    pensize(6)
    fd(0.2*méret)
    lt(90)
    fd(méret/21) # a bástya magasságának a harmada méret/21
    lt(90)
    fd(méret/21)
    rt(90)
    fd(méret/21)
    rt(90)
    fd(méret/21)
    lt(90)
    fd(méret/21)
    lt(90)
    fd(0.2*méret)
kulcs1(300)
sleep(1)
reset()
kulcs2(300)
