from turtle import *
mode("logo")
def háromszög(h):
    color("red")
    fd(h)
    rt(180-45)
    fd(2**0.5*h/2)
    rt(90)
    fd(2**0.5*h/2)
    rt(135)
def alapelem(h):
    for i in range(2):
        háromszög(h)
        rt(45)
        fd(2**0.5*h)
        rt(135)
def sor(n, h):
    speed(0)
    ht()
    for i in range(n):
        alapelem(h)
        up()
        rt(90)
        fd(h)
        lt(90)
        down()
    up()
    lt(90)
    fd(n*h)
    rt(90)
    down()
def mozaik(n, sdb, odb, h):
    speed(0)
    for i in range(sdb):
        for j in range(odb):
            start = position()
            m = n
            while m >= 1:
                sor(m, h)
                up()
                fd(h)
                rt(90)
                fd(h)
                lt(90)
                down()
                m -= 2 # m = m-2
            up()
            goto(start)
            rt(90)
            fd(n*h)
            lt(90)
            down()
        up()
        lt(90)
        fd(odb*n*h)
        rt(90)
        fd(n*h)
        down()
mozaik(3, 3, 4, 30)
