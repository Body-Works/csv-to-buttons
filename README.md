<img src="https://body-works.pl/wp-content/themes/body-works/assets/img/logo-body-works.png" alt="Body Works">

# csv-to-buttons

> Compiled version of this tool can be found here [here](https://body-works.pl/csv-to-buttons/).

Takes text copied from Google Sheets and outputs button markup.

Example of copied text:

```
BW(EL)04.2	https://body-works.pl/wp-content/uploads/2022/03/BWEL04.2_BIEGACZ_2_STAN.3ds	https://body-works.pl/wp-content/uploads/2022/03/BWEL04.2_BIEGACZ_2_STAN.dwg	https://body-works.pl/wp-content/uploads/2022/03/BWEL04.2_BIEGACZ_2_STAN.max	https://body-works.pl/wp-content/uploads/2022/03/BWEL04.2_BIEGACZ_2_STAN.pdf	https://body-works.pl/wp-content/uploads/2022/03/BWEL04.2_BIEGACZ_2_STAN.skp																	
```

## Format 

Columns:

* Model 
* URL to 3ds
* URL do dwg
* URL to max
* URL to pdf
* URL to skp

## Installation & usage

This tool was built using create react app. So:

```
npm install
npm run start
```
