from turtle import *
def hatszög(h):
    fillcolor("lime")
    begin_fill()
    for i in range(6):
        fd(h)
        lt(60)
    end_fill()
    fillcolor("black")
def rombusz(h):
    lt(60)
    fillcolor("aqua")
    begin_fill()
    for i in range(2):
        fd(h)
        lt(60)
        fd(h)
        lt(120)
    end_fill()
    rt(60)
    fillcolor("black")
def háromszög(h):
    fillcolor("yellow")
    begin_fill()
    for i in range(3):
        fd(h)
        lt(120)
    end_fill()
    fillcolor("black")
def ábra(h):
    speed(0)
    ht()
    fillcolor("red")
    begin_fill()
    for i in range(2):
        fd(3*h)
        rt(60)
        for j in range(2):
            fd(h)
            rt(60)
    end_fill()
    for i in range(2):
        rombusz(h)
        háromszög(h)
        fd(h)
        hatszög(h)
        fd(h)
        háromszög(h)
        fd(h)
        rombusz(h)
        for j in range(2):
            rt(60)
            hatszög(h)
            fd(h)
        rt(60)
    fillcolor("black")
ábra(40)
