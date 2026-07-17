a = int(input("Telll your num:"))

try:
    print(10/a)
    print("Calculation done!!!")
except Exception as err:
    print(f"Try again. Your Error is: '{err}'")
else:
    print("THere is no exception")
finally:
    print("It will run even if any exception occurs.")
