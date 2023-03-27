import sys
import subprocess as sp
import os

print(os.getcwd())

for _ in range(10):
    sp.call(f'python test.py 1 2')
