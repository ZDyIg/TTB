print("hola mundo")

variable1 = 5
variable2 = 4
sum = (variable1+variable2)
print(sum)
print("estoy fuera de la funcion")

a=5
b=10
if(a>b):
    print("a es mayor que b")
else:
    print ("b es mayor que a")

variable=7
if (variable<=10):
    print("si, esta entre 1 y 10")
else:
    print("no, esta entre el 1 y 10")

#serie de 0-10 while
i = 1
while(i<=10):
    print(i)
    i=i+i
print("termina el ciclo")

#serie 0-10
for i in range(10):
    print(i)
print("salimos del ciclo")

#numeros pares del 0 - 100
for i in range(100):
    if(i%2==0):
     print(i)
print("se logró")

#Nombre
#nombre = input("ingresar su nombre: ")
#print("hola", nombre)

#pi *r^2


radio = float (input("ingresa tu radio: "))
parametro = (3.1416*radio)**2
print("Tu PI es: ", parametro)



