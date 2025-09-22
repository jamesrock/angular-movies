## angular-movies

[angular-movies.jamesrock.me](https://angular-movies.jamesrock.me)

This repo forms part of a project where I built the same app using Svelte, Nuxt, Next, Solid and Angular — all but one of which I'd never use before — in an effort to show that picking-up frameworks isn't quite the huge deal hiring managers seem to think it is...

The app itself is nothing overly fancy — just a basic film discovery site covering all the essentials one would expect such as search (actor/director/title), categories, filmographies, cast & crew. I took a classic ‘less is more’ approach with regards to the UI. It’s certainly not the most impressive thing you’ll ever see — but it is a perfectly functional single-page app fetching data from a live API, which is very much the bread and butter of modern front-end development.

All five repos can be found here on GitHub:

[github.com/svelte-movies](https://github.com/jamesrock/svelte-movies)  
[github.com/nuxt-movies](https://github.com/jamesrock/nuxt-movies)  
[github.com/nextjs-movies](https://github.com/jamesrock/nextjs-movies)  
[github.com/solid-movies](https://github.com/jamesrock/solid-movies)  
[github.com/angular-movies](https://github.com/jamesrock/angular-movies)  

### Project Summary

After having witnessed Google products become more and more convoluted over the years, I was inclined to believe it wouldn’t be much fun to work with — and I wasn’t wrong! It took 2 days to get the app up and running, most of which was spent Googling even the most basic of concepts, since their official docs provide very little in the way of examples — or indeed any useful information whatsoever. I had to resort to YouTube and other sites to become familiar with concepts such as ‘directives’, ‘services’, ‘inputs’, ‘signals’ and general component structure. There were no major stumbling blocks as such, although I’m not a huge fan of TypeScript, and it seems Angular corners you into using it. That aside, perhaps my biggest gripe was having to perform all data transformations on the script side, since it’s not possible to run inline js directly from a template as per other frameworks covered here — that and the lack of file-based routing, and the pesky 404 ‘not found’ refresh issue which requires either server config or the use of hash URLs — something which every other framework manages without. Overall, I’m not impressed.