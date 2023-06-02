<p align="center">
  <a href="#">
    <img src="https://skillicons.dev/icons?i=react,redux,twitter,git,github,js,css,laravel,mysql,postman" />
  </a>
</p>

<h4 align="center"> npm run wazoo </h4>


### step 1 => Clone project with command: 
    git clone "https://github.com/MANOTM/Twitter.git"

### step 2  => cd tp project with command: 
    cd twitter

### step 3 => Install node_module with command: 
    npm i

### step 4 => start server with command :tada: : 
    npm run wazoo

### step 5 => close the laptop and go to spleep :
    npm close laptop and sleep

### Reminde, need Backend Api first and start xamp server !!!!

command : for install all packages with one command `npm i` 

if didn't work use this command `npm i react-router-dom react-icon axios js-cookie`   

ilaaaaaa ma5dmtoch dir kola w7da rasha o copie w7da b w7da || w7da bw7da machi w7da f w7da :bulb:
```
npm i react-router-dom
npm i react-icon
npm i axios
npm i js-cookie
```
If none of this works for you, I recommend you to go back and check the steps again
or go to pull backend again + fresh migration


for support call @elonMask :money_with_wings::money_with_wings::money_with_wings:

for notification use `CallToast('hello')` in your sotuation maybe you need button VIEW fiha, so add second paramétre `CallToast('hello,'/home')` add the path will added automaticly to view button :)

for Set title page use `SetTitle('Home')` and import it from 
useStateContext => const { SetTitle } = useStateContext();
`SetTitle('Home')` => Home / Wazoo
`SetTitle()` => pathname / Wazoo
`SetTitle(null,true)` => Wazoo

if you looking for footer Components [Terms of Service, Privacy Policy...] go to 
==> Components/PolicyLinks <==

function `isArabic('content')` return true | false for checking if is any arabic words or not !!!
import from useStateContexte


### go to backend and check this

first of all go to public in backend and delete images folder and run php artisan storage:link

line 25 ===> return $this->error( $validate->errors() , 'Verify inputs' , 200);
line 53 ===> Storage::putFileAs("public/images/{$pseudo}/pp",$img,$pp);
line 55 ===> 'pp' => asset("images/{$pseudo}/pp/".$pp) ,
line 61 ===> Storage::putFileAs("public/images/{$pseudo}/cover",$img,$cover);
line 63 ===> 'cover' => asset("images/{$pseudo}/cover/".$cover) , 
