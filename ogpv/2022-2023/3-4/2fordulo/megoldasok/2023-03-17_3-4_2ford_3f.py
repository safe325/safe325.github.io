from turtle import *
from time import sleep
def négyzet(a):
    speed(0)
    ht()
    for i in range(4):
        fd(a)
        lt(90)
def tégla(a):
    speed(0)
    ht()
    for i in range(2):
        fd(1.5*a)
        lt(90)
        fd(a)
        lt(90)
def sor1(n, a):
    speed(0)
    ht()
    for i in range(n):
        tégla(a)
        fd(1.5*a)
        négyzet(a)
        fd(a)
        tégla(a)
        fd(1.5*a)
def sor2(n, a):
    speed(0)
    ht()
    for i in range(n):
        négyzet(a)
        fd(a)
        for j in range(2):
            tégla(a)
            fd(1.5*a)
def mozaik(n, m, a):
    speed(0)
    ht()
    for i in range(int(n/2)):
        sor1(m, a)
        back(2*1.5*a*m + a*m)
        lt(90)
        fd(a)
        rt(90)
        back(a/2)
        sor2(m, a)
        back(2*1.5*a*m + a*m)
        lt(90)
        fd(a)
        rt(90)
        fd(a/2)
    if n % 2 != 0:
        sor2(m, a)
négyzet(50)
sleep(1)
reset()
tégla(50)
sleep(1)
reset()
sor1(4,30)
sleep(1)
reset()
sor2(4,30)
sleep(1)
reset()
mozaik(8, 4, 20)
