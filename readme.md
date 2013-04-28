Octoflat
======

This is a theme using [Twitter Bootstrap]("http://twitter.github.io/bootstrap/") and Designmodo's [Flat UI]("https://github.com/designmodo/Flat-UI") theme which can be previewed on [Designmodo's website]("http://designmodo.com/flat-free/").

This theme has a live preview at [AlexGaribay.com](http://alexgaribay.com).

Please update the [Wiki page](https://github.com/alexgaribay/octoflat/wiki/Sites-Using-Octoflat) if you are using this theme.

## Installing the theme

### As a submodule ###

````
$ cd your_octopress_dir
$ git submodule add https://github.com/alexgaribay/octoflat .themes/octoflat
$ git submodule update --init
$ rake install['octoflat']
$ rake generate
````

### Grabbing the latest updates as a module ####

````
$ cd your_octopress_dir
$ git submodule update
# regenerate, make changes, etc...
````

### As a clone ###
````
$ cd your_octopress_dir
$ git clone https://github.com/alexgaribay/octoflat .themes/octoflat
$ rake install['octoflat']
$ rake generate
````


## Please help contribute ##
This is my first theme and there is a lot of code that isn't necessary. I'll need some help cleaning up the code and making the theme more customizable.

## License ##
This theme is licensed under a MIT License - http://opensource.org/licenses/mit-license.html
