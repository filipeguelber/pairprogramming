#!/usr/local/bin/python2.7

import random
from random import randint

pilotos = ['Filipe','Gaucho','Pinheiro','Muniz','Fernandes']
random.shuffle(pilotos)
x=0
for p in pilotos:
  
  pilotos.pop(x)
  cp = randint(0,len(pilotos)-1)
  print "Piloto:"+p+", Copiloto:"+pilotos[cp]
  pilotos.pop(cp)
  if (len(pilotos) < 2):
    next
  x=x+1
  
