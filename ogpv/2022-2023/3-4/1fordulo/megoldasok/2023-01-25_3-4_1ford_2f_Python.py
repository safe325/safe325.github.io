from turtle import *
from time import sleep
def tégla(szél, mag):
    for i in range(2):
        fd(szél)
        lt(90)
        fd(mag)
        lt(90)
def beállít():
    speed(0)
    ht()
    pencolor("brown")
    pensize(3)
def egyik(mag, szél, táv):
    beállít()
    for i in range(2):
        for j in [szél, mag]:
            tégla(táv, táv)
            up()
            fd(j)
            lt(90)
            down()
    fd(táv)
    lt(90)
    fd(táv)
    rt(90)
    tégla(szél - 2*táv, mag - 2*táv)
    back(táv)
    rt(90)
    fd(táv)
    lt(90)
def másik(mag, szél, táv):
    beállít()
    for i in range(2):
        for j in [szél, mag]:
            fd(j)
            lt(90)
            fd(táv)
            rt(90)
            fd(táv)
            lt(90)
def ajtó(mag, szél, táv):
    egyik(mag, szél, táv)
    up()
    fd(2*táv)
    down()
    másik(mag - 4*táv, szél - 4*táv, 2*táv)
egyik(200, 150, 10)
sleep(1)
reset()
másik(160, 110, 20)
sleep(1)
reset()
ajtó(200, 150, 10)
