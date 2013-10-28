Octoflat
======

This is a theme using [Twitter Bootstrap](http://twitter.github.io/bootstrap/) and Designmodo's [Flat UI](https://github.com/designmodo/Flat-UI) theme which can be previewed on [Designmodo's website](http://designmodo.com/flat-free/). The awesome symbol font is from [FontAwesome](http://fontawesome.io).

This theme has a live preview at [AlexGaribay.com](http://alexgaribay.com).

The theme now comes in two different color schemes: a light color scheme and a dark color scheme. The dark scheme is the default.

![Dark](https://dl.dropboxusercontent.com/u/11594277/octoflat/dark.png)

![Light](https://dl.dropboxusercontent.com/u/11594277/octoflat/light.png)

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

---------

## Modifying the Color Scheme ##

The theme has two color scheme options: light and dark. The dark color scheme is the one enabled by default.

To change the color scheme *after* you've installed the theme, do the following:

````
$ cd your_octopress_dir/sass/custom/
$ vim _colors.scss
// Delete lines 3 and 18 and save
$ rake generate
````
---------

### LinkedIn Link ###

To get the LinkedIn link to work, modify your _config.yml to have this line:

````
$ linkedin_user: username
````
Your username can be found by going to your profile page. On your info card at the top of the page, theres a link to your public profile page. 
Extract out your username from the link.
www.linkedin.com/in/**username**/

---------

## License ##
This theme is licensed under a MIT License - http://opensource.org/licenses/mit-license.html
