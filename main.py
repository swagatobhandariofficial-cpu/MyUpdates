a = [1,1,2,1,4,3,2,1,4,5,6,7,9,8,8]

d={}

for i in a:
    if i in d.keys():
        d[i]+=1
    else:
        d[i]=1
print(d)
