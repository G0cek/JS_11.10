// Oblicza sumę 5 liczb, a następnie wyświetli ją na ekranie (np. alertem).
// Oblicza Średnią trzech liczb, a następnie wyświetli ją na ekranie.
// Wypisuje wartość dwóch liczb. Wypisuje wynik sumy, różnicy oraz iloczynu w trzech kolejnych liniach na ekranie.
// Oblicza pierwiastek z liczby. Wynik wyświetli na ekranie.
// Oblicza pole kwadratu o długości boku wprowadzonej przez użytkownika. Wynik wyświetli na ekranie.
// Oblicza pole kola, którego promien podany będzie w czasie działania programu. Wynik wyświetli na ekranie
// Oblicza pole i obwód koła. Wynik wyświetli na ekranie.
// Wczytuje obecną cenę benzyny. Oblicza koszt przejazdu z Gdańska do Szczecina 360 km, przy założeniu, że samochód spala 8 litrów benzyny na 100 km.
// Wczytuje cenę benzyny, długość trasy oraz wartość spalania samochodu. Oblicza koszt przejazdu i wypisuje go na ekran.
// Oblicza zysk z lokaty dla dowolnej kwoty wprowadzonej przez użytkownika i wypisuje ją na ekran. Aktualna oferta lokaty wynosi 8% rocznie.
// Oblicz cenę końcową produktu z uwzględnieniem podatku VAT.
// Oblicz wiek użytkownika na podstawie roku urodzenia i obecnego roku.

// //zad.1
// alert(1+4+5+1+6);

// //zad.2
// alert((1+2+3) /3)

// //zad.3
// let a = 5
// let b = 6
// document.write(a + b, a - b, a/b);

// //zad.4
// let a = prompt("podaj liczbe: ")
// alert(Math.sqrt(a))

// //zad.5
// let bok = prompt("Podaj bok")
// alert(bok * bok)

// //zad.6
// let r = prompt("Podaj promień koła: ")
// pole = Math.PI * Math.pow(r,2)
// document.write("pole koła wynosi: " +pole)

// //zad.7
let r = prompt("Podaj promień koła: ")
pole = Math.PI * Math.pow(r,2)
obwod = 2 * Math.PI * r
document.write("pole koła wynosi: \n" +pole)
document.write("obwód koła wynosi: \n" +obwod)


// Oblicza pole i obwód koła. Wynik wyświetli na ekranie.