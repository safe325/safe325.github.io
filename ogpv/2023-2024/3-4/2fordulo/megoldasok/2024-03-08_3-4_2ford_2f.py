from turtle import *
def négyzet(a):
    speed(0)
    ht()
    for i in range(4):
        fd(a)
        lt(90)
def kapcsoló(méret, darab):
    for i in range(darab):
        négyzet(méret)
        up()
        fd(méret/10)
        lt(90)
        fd(méret/10)
        rt(90)
        down()
        négyzet(8*méret/10)
        up()
        fd(méret/20)
        lt(90)
        fd(méret/20)
        rt(90)
        down()
        négyzet(7*méret/10)
        fd(7*méret/20)
        lt(90)
        fd(7*méret/10)
        up()
        back(1.5*méret/10)
        rt(90)
        back(10*méret/60)
        dot(7*méret/60)
        fd(7*méret/20)
        dot(7*méret/60)
        home()
        fd((i+1)*méret)
        down()
kapcsoló(100,3)
