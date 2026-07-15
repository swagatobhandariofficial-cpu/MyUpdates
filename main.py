# a = [22,34,2.4,99,-45,-33,-7,39]
a = [1,2,3,5,7,9,55,67]
for i in range(len(a)-1):
    if a[i]<a[i+1] :
        continue
    else :
        print("Your List is not sorted.")
        break
else :
    print("Your List is sorted")