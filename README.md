# **Mailing Sample**
Projekt przygotowny specjalnie pod budowanie mailingów.

--------------------------------------------------------------------------------------------------------

## **Budowa:**
Używamy struktury MJML. Entry point to **app/**  
To jedyny plik w którym tworzymy mailing. Został on przykładowo wypełniony domyślnym mailingiem.
Ścieżka do dokumentacji: **https://mjml.io/documentation/**

--------------------------------------------------------------------------------------------------------

## **Instalacja:**
Biblioteka została dodana do pliku **package.json**.
Pozostaje zainstalować pakiety npm komendą **npm install**.

Po zainstalowaniu odpalamy komendę **gulp**.
Komenda zbuduje nam folder **web** i przebuduje pliki mailingu z folderu **app/**.

--------------------------------------------------------------------------------------------------------

**cheers**

--------------------------------------------------------------------------------------------------------

## **Aktualne problemy:**
Niestety okazuje się, że MJML ma problemy z niektórymi wersjami Node.
https://github.com/mjmlio/mjml/issues/504

Zalecam instalacje Node v.6.6.0 lub nowszej puki problem nie zostanie rozwiązany.

Dodatkowo zalecam zapoznanie się z aktualnymi ograniczeniami budowy MJML:
https://mjml.io/faq#email-clients
