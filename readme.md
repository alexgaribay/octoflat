Octoflat
======

This is a theme using [Twitter Bootstrap](http://twitter.github.io/bootstrap/) and Designmodo's [Flat UI](https://github.com/designmodo/Flat-UI) theme which can be previewed on [Designmodo's website](http://designmodo.com/flat-free/). The awesome symbol font is from [FontAwesome](http://fontawesome.io).

This theme has a live preview at [AlexGaribay.com](http://alexgaribay.com).

Please update the [Wiki page](https://github.com/alexgaribay/octoflat/wiki/Sites-Using-Octoflat) if you are using this theme.

## Installing the theme

### As a submodule ###

````
$ cd your_octopress_dir
$ git submodule add https://github.com/alexgaribay/octoflat .themes/octoflat
$ rake install['octoflat']
$ rake generate
````

### Grabbing the latest updates as a module ####

````
$ cd your_octopress_dir
$ git submodule update
````

### As a clone ###
````
$ cd your_octopress_dir
$ git clone https://github.com/alexgaribay/octoflat .themes/octoflat
$ rake install['octoflat']
$ rake generate
````

---------

### Configuring Navigation ###
Add a navigation section to your _config.yml. Doing this allows the navbar to highlight the active page. Use the following format:

````
navigation:
- text: Home
  url: /index.html
````

#### Adding New Pages ####

Create new pages by using the following command:

````
rake new_page['new_page_name.md']
````

Go back to update your _config.yml file:

````
navigation:
- text: Home
  url: /index.html
- text: New Page Title
  url: /new_page_name.html
````


#### Pull Requests Welcome ####
I need help making the theme more customizable to the end user. So any help in doing so would be greatly appreciated. Any suggestions are welcome as well!

## License ##
This theme is licensed under a MIT License - http://opensource.org/licenses/mit-license.html
