s1 = {1,2,3,4,5}
s2 = {3,5,6,7,8}

uni = s1.union(s2) # uni = s1|s2
print(uni)

inter = s1.intersection(s2) # inter = s1 & s2
print(inter)

sym_diffe = s1.symmetric_difference(s2) # sym_diffe = s1 ^ s2
print(sym_diffe)

diff = s1.difference(s2) # diff = s1 - s2
print(diff)

s1 -=s2
print(s1)