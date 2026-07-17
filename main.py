age = int(input("Enter your age:"))
try:
    if age<10 or age >18 :
        raise ValueError("Criteria Does not  match!!!")
    else:
        print("Welcome to the club")
except Exception as err:
    print(f"Unfortunetly an error has occured: {err}")
finally:
    print("Program ran")
