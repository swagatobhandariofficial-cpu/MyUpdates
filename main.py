a = [22,34,2.4,99,-45,-33,-7,39]
largst = a[0]
secLargst = a[0]
for i in range(len(a)):
    if a[i] > largst :
        secLargst = largst
        largst = a[i]
    elif a[i]> secLargst:
        secLargst = a[i]


print(f"largest={largst} , Second Largest is = {secLargst} ")
