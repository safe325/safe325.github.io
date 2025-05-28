from turtle import *
def rombusz(h, szög):
    speed(0)
    ht()
    pensize(2)
    for i in range(2):
        fd(h)
        lt(szög)
        fd(h)
        lt(180-szög)
    pensize(1)
    for i in range(2):
        fd(h/4)
        lt(szög)
        fd(h)
        rt(szög)
        fd(h/4)
        rt(180-szög)
        fd(h)
        lt(180-szög)
def alap(h):
    for i in range(2):
        rombusz(h, 120)
        rombusz(h, 60)
        lt(60)
        fd(h)
        lt(60)
        fd(h)
        lt(60)
def sor(n, h):
    for i in range(n):
        alap(h)
        up()
        fd(3*h)
        down()
    up()
    back(3*n*h)
    down()
def parketta(n, m, h):
    for i in range(m):
        sor(n, h)
        lt(120)
        fd(h)
        rt(60)
        fd(h)
        rt(60)
parketta(4, 1, 30)
