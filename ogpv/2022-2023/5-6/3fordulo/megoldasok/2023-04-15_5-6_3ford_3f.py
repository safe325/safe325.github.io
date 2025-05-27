from turtle import *
def ábra1(h):
    speed(0)
    ht()
    lt(30)
    for i in range(3):
        fd(h)
        back(h)
        rt(120)
    fd(h)
    rt(120)
    for i in range(6):
        fd(h)
        rt(60)
def háromszög(h):
    for i in range(3):
        fd(h)
        lt(120)
def ábra2(h):
    speed(0)
    ht()
    lt(90)
    for i in range(3):
        fd(h*3**0.5)
        back(h*3**0.5)
        rt(120)
    fd(h*3**0.5/2)
    lt(90)
    fd(1.5*h)
    lt(120)
    háromszög(3*h)
    lt(60)
    fd(1.5*h)
    rt(120)
    háromszög(1.5*h)
    rt(150)
    fd(h*3**0.5/2)
    lt(150)
    háromszög(3*h)
ábra2(100)
