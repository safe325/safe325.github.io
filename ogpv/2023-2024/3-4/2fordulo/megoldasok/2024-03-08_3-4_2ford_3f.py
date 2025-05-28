from turtle import *
def négyzet(h, szín):
    speed(0)
    ht()
    pensize(3)
    fillcolor(szín)
    begin_fill()
    for i in range(4):
        fd(h)
        lt(90)
    end_fill()
def hármas(h):
    négyzet(h, "yellow")
    fd(h)
    négyzet(h/2, "purple")
    lt(90)
    fd(h)
    lt(90)
    fd(h)
    négyzet(h/2, "purple")
    rt(180)
def mintázat(n, h):
    for i in range(n):
        hármas(h)
        back(h/2)
mintázat(5, 50)
