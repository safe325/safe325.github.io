from turtle import *
mode("logo")
speed(0)
#ht()
def alapelem(a):
    rt(120)
    fd(2*a)
    rt(120)
    fd(a)
    rt(60)
    fd(a)
    lt(60)
    fd(a)
    rt(60)
    fd(a)
    rt(120)
    fd(2*a)
    lt(60)
def sor(n, a):
    for i in range(n):
        alapelem(a)
        up()
        rt(120)
        fd(3*a)
        rt(60)
        fd(a)
        down()
sor(3, 30)
    
