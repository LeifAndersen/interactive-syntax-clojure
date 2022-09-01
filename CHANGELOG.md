# 0.1.18

* Add API options for printing (useful in papers)
* Git Auth Panel Now Shown to User

# 0.1.17

* Add (highly experimental) printing feature
* Additional work on git integration

# 0.1.16

* Add optional edit-time only field to render.
* Add second stopify-less path (still uses virtual global environment)
* Copy/Paste works in file menu

# 0.1.15

* BREAKING CHANGE: Only one call to default is now required.
* Make scripts for generating VISrShop.
* Macros in cljs.test now usable.
* Highly experimental support for runtime-only environment.

# 0.1.14

* Add codemirror (and react-codemirror2) to list of available packages.
* Add cljs.tools.reader into default provided libs.
* ViSr renderers now update when their (purely internal) reagent state changes.

# 0.1.13

* Add autocomplete
* Can get reference to state from URL.
* Fix bug causing visrs to not update their srcloc correctly.
* Can actually refer to cljs.* and clojure.* in require form.


# 0.1.12

* Begin changelog.
* Switch from putting VISrs in iframes to directly in the DOM.
* Add ability to call automatically `main` from current module.
* Option to set tabl mode
* defvisr indentation works as expected.
