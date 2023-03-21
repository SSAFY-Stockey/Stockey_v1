import time
import sys
import subprocess as sp

if len(sys.argv) < 3:
    print("Usage: python test.py arg1 arg2")
else:
    arg1 = sys.argv[1]
    arg2 = sys.argv[2]

    print(f"test! {arg1} & {arg2}")

    time.sleep(3)