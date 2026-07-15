a = [22,34,2.4,99,-45,-33,-7]
largst = a[0]
index = 0
for i in range(len(a)):
    if a[i] > largst :
        largst = a[i]
        index=i

print(f"largest={largst} , Index = {index}")
