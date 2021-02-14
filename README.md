# Crasouel
this **Pure Javascript** Crasouel
and **Scss** for stylesheet

##### Basic Code:
```html
<div class="Crasouel__main" data-crasouel-sm-grouping="1" data-crasouel-md-grouping="2" data-crasouel-lg-grouping="3" data-crasouel-xl-grouping="4" data-crasouel-xxl-grouping="5">
  <div class="Crasouel__item"></div>
  <div class="Crasouel__item"></div>
  <div class="Crasouel__item"></div>
  <div class="Crasouel__item"></div>
</div>
```

So , this crasouel is responsive:
  * Attr `data-crasouel-sm-grouping` for size less than **567**
  * Attr `data-crasouel-md-grouping` for size less than **768** and more than **567**
  * Attr `data-crasouel-lg-grouping` for size less than **992** and more than **768**
  * Attr `data-crasouel-xl-grouping` for size less than **1200** and more than **992**
  * Attr `data-crasouel-xll-grouping` for size more than **1200**
 
# Where is AutoPlay ?

#### you can use **autoplay** in this way:
attr `data-crasouel-autoplay` for autoplay

##### Example:
`data-crasouel-autoplay="true"` and default equal to `false `
