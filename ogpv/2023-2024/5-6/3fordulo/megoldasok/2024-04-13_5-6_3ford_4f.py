from turtle import *
colormode(255)
mode("logo")
speed(0)
def fa1(n, h, szín):
    pencolor(50, 100 + 10*(n-1), 50)
    if n == 1:
        pensize(n)
        fd(h)
        lt(30)
        fd(0.8*h)
        pencolor("orange")
        pensize(h/4)
        fd(h/4)
        back(h/4)
        pensize(n)
        pencolor(50, 100 + 10*(n-1), 50)
        up()
        back(0.8*h)
        rt(30)
        back(h)
        down()
    if n > 1:
        pensize(n)
        fd(h)
        rt(60)
        fa1(n-2, h/2, (50, 100 + 10*(n-1), 50))
        lt(90)
        pensize(n)
        fd(h)
        lt(30)
        fa1(n-1, h/2, (50, 100 + 10*(n-1), 50))
        rt(90)
        fa1(n-1, 3*h/4, (50, 100 + 10*(n-1), 50))
        up()
        lt(60)
        back(h)
        rt(30)
        back(h)
        down()
fa1(8, 50, (50, 100, 50))
