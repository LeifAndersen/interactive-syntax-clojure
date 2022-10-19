# 0.2.2

* Add (optional) state option to defvisr
* Additional query-args api.

# 0.2.1

* Add button to upload resource
* Upgrade ClojureScript to 1.11

# 0.2.0

* Deps can have sub-deps, user must still manually add sub-deps though.
* User can add non-js resources to deps list
* Non-JS deps must have their 'load' parameter turned off
* Sub-deps loaded dynamically from `visr_dynamic_load` function
* Download deps as a binary arraybuffer (rather than utf-8 string)
* Store downloaded deps as a binary blob (doesn't change read api)
* Add fs support in the sandbox (no permission structure added)

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
