# age = int(input("Enter your age: "))
# name = input("Enter your name:")
# print(f"Your name is {name} & age is {age}")


# a=20
# print(a)
# a += 20
# print(a)
# a += 20
# print(a)

# print(12>20 and 10>9 or 99>11 and 564>100)

# print(not(12>20 or 10>99 or 99>111 or 564 >=100))

# print(12 < 10 or 45 == 56 or 69>70 or 15 != 13)
# print(True and bool(0))

# money=int(input("Paisa lele :"))
# if money==10 :
#     print("Chocobar lunga")
# elif money<=20:
#     print("Kitkat lunga")
# else:
#     print("Itna paisa kya karu?")


# a = int(input("enter 1st no. :"))
# b = int(input("enter 2nd no. :"))
# if a==b: 
#     print("Both are equal")
# elif a>b:
#     print(f"{a} is greater.")
# elif a<b:
#     print(f"{b} is greater.")
# else:
#     print("Wrong input")


# gen = input("What is your gender[all in caps]: ")
# if (gen=="M" or gen=="MALE" ):
#     print("Hello sir")
# elif(gen=="F" or gen=="FEMALE"):
#     print("Hello Mam")
# else:
#     print("UNDEFINED")


# num= int(input("Enter a number to check odd or even: "))
# if num % 2 != 0 :
#     print(f"{num} is an odd number")
# else :
#     print(f"{num} is an even number ")


# name= input("Enter your name: ")
# age= int(input("Enter your age[in years]: "))
# if age>=0 and age<=17 :
#     print(f"{name},you can vote after {18-age} years.")
# elif age>=18 and age<=100 :
#     print(f"{name}, You are eligible to vote.")
# else:
#     print("Invalid age.")


# year = int(input("Enter a year:"))
# if year %100 ==0 and year %400 == 0 :
#     print(f"{year} is a leap year")
# elif year %100 !=0 and year %4 ==0:
#     print(f"{year} is a leap year")
# else:
#     print(f"{year} is not a leap year")


# for i in range(1,11,1):
#     print(f"5 * {i} = {5*i}")


# n= int(input("Which table do you want? "))
# for i in range(1,11):
#     print(f"{n} * {i} = {n*i}")


# a= "SWAGATO IS STUDYING PYTHON"
# print(len(a))

# for i in range(len(a)):
#     print(f"{i} = {a[i]}")

# for i in a :
#     print(i)


# n= int(input("What number's table you want to print:"))
# for i in range(1,11,1):
#     print(f"{n} * {i} = {n*i}")

# sum=0
# n=int(input("Sum upto what terms?:"))
# for i in range(1,n+1):
#     sum =sum+i
#     print(f"{sum}")



# fact = 1
# num = int(input("Factorial upto what number?"))
# for i in range(1,num+1):
#     fact = fact * i
#     print(f"{fact}")

# even=0
# odd=0
# r= int(input("Enter range:"))
# for i in range(1,r+1):
#     if i%2==0:
#         even=even+i
#     else:
#         odd=odd+i
# print(f"Your even sum are {even}")
# print(f"Your odd sum are {odd}")



# n= int(input("Enter the number to check it's factors:"))
# for i in range(1,n+1):
#     if n%i == 0 :
#         print(i)


# sum=0
# n= int(input("Enter the number if it's perfect or not:"))
# for i in range(1,n):
#     if n%i==0:
#         sum = sum + i
# if n==sum :
#     print("This is a perfect number")
# else:
#     print("This is not a perfect number")


# count = 0
# n= int(input("Enter the number if it's prime or not:"))
# for i in range(1,n+1):
#     if n%i==0:
#         count = count + 1
# if count<=2:
#     print(f"{n} is a prime number")
# else:
#     print(f"{n } is not a prime number")


#reverse
# a = "121"
# if a==a[::-1] :
#     print("Palindrome")
# else:
#     print("Not palindrome")


# g = "P@#yn26at^&i5ve"
# chars = digits = symbol = 0
# for ch in g:
#     if ch.isdigit():
#         digits += 1
#     elif ch.isalpha():
#         chars += 1
#     else:
#         symbol += 1
# print(chars, digits, symbol)



# def add(a,b=12):
#     print(f"the sum is {a+b}")
# add(2)

# st=input("Enter the string to check palindrome or not: ")
# def pall(st):
#     rev = ""
#     for i in range(len(st)-1,-1,-1):
#         rev = rev + st[i]
#     if rev==st:
#         print("Pallindrome")
#     else :
#         print("Not Pallindrome")
# pall(st)



# a =[1,7,8,1,3,34.2,True,print()]
# print(a[6:])




#list
# l = [1,7,8,1,3,34.2,True]
# l.append("tomy")
# l.insert(1,67)
# l.extend([False,89.6])
# print(l)


# l =[1,3,5,-9,-2,44,99,-30,21,-16]
# print("Positive elements are:")
# for i in l:
#     if i>=0:
#         print(i)
# print("Negetive elements are:")
# for i in l:
#     if i<0:
#         print(i)


# add=0
# l =[1,3,5,-9,-2,44,99,-30,21,-16]
# for i in l:
#     add= add + i
# mean = add/(len(l))
# print(mean)


# l =[1,3,5,-9,-2,44,99,-30,21,-16]
# largest = l[0]
# secondlargest = l[0]
# idx=0
# for i in range(len(l)) :
#     if l[i] >= largest:
#         largest = l[i]
#         idx = i
# print(largest,idx)
# for i in range(len(l)):
#     if l[i] < secondlargest :
#         secondlargest= l[i]
#         idx = i
# print(secondlargest,idx)


# l =[1,3,5,-9,-2,44,99,-30,21,-16]
# l=[-1,1,2,3,4,99]
# for i in range(len(l)-1):
#     if l[i] < l[i+1]:
#         continue
#     else :
#         print("List is not sorted")
#         break
# else:
#     print("Sorted List")



# tuple 
# t = (2,3,4,5,99,0,98,11,23,99,98,98)
# index=t.index(2)
# count = t.count(98)
# print(index,count)



#----------------------------------------------

#1 
# n1 = int(input("Enter 1st num:"))
# n2 = int(input("Enter 2nd num:"))
# if n1>=n2:
#     print(f"{n1}")
# else :
#     print(f"{n2}")


#2
# y=eval(input("Enter years in this format [y,y,y,y]: "))
# for i in y:
#     if i%100==0 and i%400==0 :
#         print(f"{i} leap year")
#     elif i%100 !=0 and i%4==0:
#         print(f"{i} leap year")
#     else :
#         print(f"{i} Not leap year")


#3
# for i in range(3):
#     print("Helllllo")


#4
# rev = int(input("Enter starting range:"))
# for i in range(rev,0,-1):
#     print(f"{i}")

#5
# n=int(input("Table of which no :"))
# for i in range(1,11,1) :
#     print(f"{n} * {i}== {n*i}")


#6
# sum = 0
# n=int(input("range:"))
# for i in range(1,n+1,1):
#     sum=i+sum
# print(sum)


#7
# mul=1
# n=int(input("range:"))
# for i in range(1,n+1,1):
#     mul=i*mul
#     print(mul)


#8
# odd=0
# even=0
# n=int(input("range:"))
# for i in range(0,n+1,1):
#     if i%2==0 :
#         even= i+ even 
#     elif i%2==1 :
#         odd = i + odd
# print(f"Total even is:{even} , total odd {odd}"  )


#9
# n=int(input("range:"))
# for i in range(1,n+1,1):
#     if n%i == 0 :
#         print(f"{n} factors are {i}")


#10
# sum=0
# n=int(input("range:"))
# for i in range(1,n,1):
#     if n%i==0:
#         sum=i+sum
# if sum==n :
#     print(f"{n} is a perfect number")
# else:
#     print(f"{n} is not a perfect number")


#11
# count= 0
# n=int(input("Enter the no:"))
# for i in range(1,n+1):
#     if n%i == 0:
#         count= 1+count
# if count<=2 :
#     print(f"{n} is a Prime number")
# else:
#     print(f"{n} is not prime")


#12
# g = "P@#yn26at^&i5ve"
# char=di=sym=0
# for ch in g:
#     if ch.isalpha():
#         char= char+1
#     elif ch.isdigit():
#         di=di+1
#     else:
#         sym=sym+1
# print(char,di,sym)



# while loop
#13
# a=1
# while a <=20 :
#     print(f"{a}")
#     a =a+1

# 14
# a = int(input("Enter a number to reverse:"))
# rev = 0
# while a>0:
#     rev= rev*10 + a%10
#     a =  a//10
# print(rev)


#15
# a = int (input("Enter a num to check palindrome or not:"))
# copy = a
# rev=0
# while a>0:
#     rev = rev*10 + a%10 
#     a = a//10
# if rev==copy:
#     print(f"{copy} is a palindrome")
# else:
#     print(f"{copy} is not a palindrome")


#16
# import random
# num = random.randint(1,10)
# attempts=0

# while attempts<3:
#     guess = int(input("enter num:"))
    
#     if guess==num:
#         print(f"{num} was right guess")
#         break
#     else :
#         print("Wrong Guess. Try again")
#         attempts+=1
#         if attempts ==3 :
#             print("Used all 3 attemps already")
#             print(f"The right number was: {num}")


#functions
#17
# def sum(a,b):
#     print(f'{a+b}')
# sum(5,10)
# sum(6,11)


# 18
# def heloo(name, age):
#     print(f"{name} hello, age is {age}")
# heloo(age= 222, name='Swagato')


# 19 palindrome string using funct
# def pallindrome (st):
#     rev=""
#     for i in range(len(st)-1,-1,-1):
#         rev = rev + st[i]
#     if rev == st:
#         print("pall")
#     else:
#         print("not pall")
# pallindrome("tot")


# 20
# def hello():
#     return "swagato"
# print(hello())


# 21
# a =[221,19,22,56,9,3.5,True]
# for i in range(len(a)):
#     print(a[i])

# 22
a =[221,19,22,56,9,3.5,True]
a.append(2)
print(a)
a.insert(2,555)
print(a)
a.extend([10,11,12])
print(a)
a.remove(221)
print(a)
