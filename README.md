# blaze-styleguide-example

This is an example application taking advantage of [blaze-styleguide](https://github.com/elelay/meteor-blaze-styleguide).

## Usage

```bash
git clone --recursive https://github.com/elelay/meteor-blaze-styleguide-example.git blaze-styleguide-example
cd blaze-styleguide-example
meteor
```

open http://localhost:3000

## Code tour

A reusable component (`mybuttonR`) is defined in
[packages/example:ui/client/mybutton_r.html](https://github.com/elelay/meteor-blaze-styleguide-example/blob/master/packages/example:ui/client/mybutton_r.html).  
It's used on the application's front page.

An style-catalogue package contains the component stories.  
It shows
[mybuttonR](https://github.com/elelay/meteor-blaze-styleguide-example/blob/master/packages/style-catalogue/client/ui/mybutton_stories.js)
in different situations (enabled, disabled, with a custom class).

I've added style-catalogue to the application because it's a small one.
With a bigger application, I find it annoying to wait for the whole application to reload while I'm tweaking
a component's style, so I create a separate app only depending on style-catalogue.

## LICENSE

This project is licensed under the MIT License.  
Copyright (C) 2016 Eric Le Lay
