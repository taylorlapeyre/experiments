#### Angular + Rails

This application shows how to combine [Angular.js][ng] and [Rails][rails] into one integrated application.

**Rails** uses angular for displaying the site's content and for navigation.

**Angular** uses rails for its asset pipeline and as an api endpoint for the data that it displays.

#### Points of Interest

- Angular controllers live in `app/assets/javascripts/angular/controllers`
- Angular templates (views) live in `public/templates`
- Angular routes live in `app/assets/javascripts/main.coffee`
- Rails api endpoints live in `app/controllers/api`

[ng]: http://angularjs.org/
[rails]: http://rubyonrails.org/
