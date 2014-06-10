#!/usr/local/bin/python2.7

import random
from random import randint

pilotos = ['Filipe','Gaucho','Pinheiro','Muniz','Fernandes','Laine','Douglas','Heleno','Jeff','Ze','Monica']
random.shuffle(pilotos)
x=0

for p in pilotos:
#  print len(pilotos)
#  print x
  if ( len(pilotos) -x > 1):
    if ( x % 2 == 0):
      print "Piloto "+p+",",
    else:
      print "Copiloto "+p
  x=x+1
  
