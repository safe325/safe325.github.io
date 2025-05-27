from turtle import *
def téglalap(a, b):
    speed(0)
    ht()
    for i in range(2):
        fd(a)
        lt(90)
        fd(b)
        lt(90)
def kulcs(méret):
    téglalap(2*méret/3/8, 2*méret/3)
    lt(90)
    fd(2*méret/3)
    rt(90)
    back(4*méret/24)
    téglalap(5*méret/12, 4*méret/12)
    up()
    fd(méret/12)
    lt(90)
    fd(méret/12)
    rt(90)
    down()
    téglalap(3*méret/12, 2*méret/12)
    up()
    home()
    fd(méret/12)
    down()
def kulcs1(méret):
    kulcs(méret)
    téglalap(2.5*méret/12, 2*méret/12)
def kulcs2(méret):
    kulcs1(méret)
    fd(2.5*méret/12)
    lt(90)
    fd(2*méret/36)
    pencolor("white")
    fd(méret/18)
    pencolor("black")
    for i in range(3):
        lt(90)
        fd(méret/18)
kulcs1(300)
    
