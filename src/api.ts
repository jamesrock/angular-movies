import roles from './roles';

export const getRatingClass = (rating:number) => {
  if(rating===0) {return ''};
  if(rating>=7) {
    return 'high';
  }
  else if(rating>=4) {
    return 'mid';
  }
  else {
    return 'low';
  };
};

export const toTime = (time:any) => {
  const 
  h = Math.floor(time / 60),
  m = Math.floor(time % 60);
  return (h ? `${h}h ` : '') + (m ? `${m}m` : '');
};

export const media_type_name = {
  'movie': 'title',
  'person': 'name'
};

export const media_type_profile_path = {
  'tv': 'poster_path',
  'movie': 'poster_path',
  'person': 'profile_path'
};

export const media_type_credits_path = {
  'movie': 'credits',
  'tv': 'aggregate_credits'
};

export const largest_size_map = {
  'movie': 'w780',
  'person': 'h632'
};

const joinFlatRoles = (roles:any[]) => {
  return roles.map((role) => role||'Unknown').join(', ');
};

export const getRole = (type:string, person:any) => {
  // console.log(`getRole[${type}]`, person);
  switch(type) {
    case 'cast':
      return joinFlatRoles(person.characters);
    case 'crew':
      return joinFlatRoles(person.jobs);
  };
  return;
};

export const floorRating = (rating:number) => {
  return Math.floor(rating * 10) / 10;
};

const dedupe_type_map = {
  'crew': {
    'target': 'job',
    'plural': 'jobs'
  },
  'cast': {
    'target': 'character',
    'plural': 'characters'
  }
};

export const dedupe = (collection:any[], type: 'cast' | 'crew') => {
  const out:any[] = [];
  collection.forEach((item) => {
    const found = out.find((title) => title.id===item.id);
    if(found) {
      found[dedupe_type_map[type]['plural']].push(item[dedupe_type_map[type]['target']]);
    }
    else {
      out.push({[dedupe_type_map[type]['plural']]: [item[dedupe_type_map[type]['target']]], ...item});
    };
  });
  return out;
};

export const dedupeFilms = (films:any) => {
  return dedupeByProp(films, 'id');
};

export const dedupeByProp = (collection:any[], prop:string) => {
  const out:any[] = [];
  collection.forEach((item) => {
    if(!out.find((title) => title[prop]===item[prop])) {
      out.push(item);
    };
  });
  return out;
};

export const dedupeFlat = (collection:any[]) => {
  const out:any[] = [];
  collection.forEach((item) => {
    if(isMissing(out, item)) {
      out.push(item);
    };
  });
  return out;
};

const sorters = {
  'job': roles
};

export const sortByPriority = (collection:any, sorter: 'job') => {
  flagMissingSortItems(collection, sorter);
  return [...collection].sort((a, b) => {
    return sorters[sorter].indexOf(a[sorter])-sorters[sorter].indexOf(b[sorter]);
  });
};

export const getProp = (collection:any[], prop:string) => {
  return dedupeFlat(collection.map((item) => item[prop]));
};

export const addProp = (collection:any[], prop:string, value:any) => {
  return collection.map((item) => {return {...item, [prop]: value}});
};

export const addProps = (collection:any[], type:string) => {
  return collection.map((item) => {
    return {
      ...item, 
      role: getRole(type, item)
    }
  });
};

export const addSearchProps = (collection:any[]) => {
  return collection.map((item) => {
    return {
      ...item, 
      poster: item[media_type_profile_path[item.media_type]],
      name: item[media_type_name[item.media_type]]
    }
  });
};

export const sortByProp = (collection:any[], prop:string) => {
  return collection.sort((a, b) => {
    return b[prop]-a[prop];
  });
};

export const filterByMatch = (collection:any[], q:string) => {
  const reg = new RegExp(q, 'i');
  return collection.filter((item) => item[media_type_name[item.media_type]].search(reg)===0);
};

const flagMissingSortItems = (collection:any[], sorter: 'job') => {
  const logged:any[] = [];
  collection.forEach((item) => {
    if(isMissing(sorters[sorter], item[sorter]) && isMissing(logged, item[sorter])) {
      console.log(item[sorter]);
      logged.push(item[sorter]);
    };
  });
  return logged;
};

const isMissing = (collection:any[], prop:any) => {
  return collection.indexOf(prop)===-1;
};

export const genres:any = {};

const setGenres = (data:any[]) => {
  data.forEach((genre) => {
    genres[genre.id] = genre.name;
  });
  console.log(genres);
};

setGenres([
  {
    "id": 28,
    "name": "Action"
  },
  {
    "id": 12,
    "name": "Adventure"
  },
  {
    "id": 16,
    "name": "Animation"
  },
  {
    "id": 35,
    "name": "Comedy"
  },
  {
    "id": 80,
    "name": "Crime"
  },
  {
    "id": 99,
    "name": "Documentary"
  },
  {
    "id": 18,
    "name": "Drama"
  },
  {
    "id": 10751,
    "name": "Family"
  },
  {
    "id": 14,
    "name": "Fantasy"
  },
  {
    "id": 36,
    "name": "History"
  },
  {
    "id": 27,
    "name": "Horror"
  },
  {
    "id": 10402,
    "name": "Music"
  },
  {
    "id": 9648,
    "name": "Mystery"
  },
  {
    "id": 10749,
    "name": "Romance"
  },
  {
    "id": 878,
    "name": "Science Fiction"
  },
  {
    "id": 10770,
    "name": "TV Movie"
  },
  {
    "id": 53,
    "name": "Thriller"
  },
  {
    "id": 10752,
    "name": "War"
  },
  {
    "id": 37,
    "name": "Western"
  }
]);

export const api = {
  base: 'https://api.themoviedb.org/3',
  mediaBase: 'https://image.tmdb.org/t/p',
  fetch_options: {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTcwMzdlNzI5ZWZlMTVmN2RiMzg0MTgyZDk5NjY3YiIsIm5iZiI6MTc1NzE1ODcxNC44OTkwMDAyLCJzdWIiOiI2OGJjMWQzYTUzODUwMTQ1MWI0ZTVhMDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.pdeAI0b67FCNnGHd7BFdpjphJQIJN1cfJ07Kkq8lznI'
    }
  },
  getCreditsPath: function(id:string):string {
    return `${this.base}/movie/${id}/credits`;
  },
  getCategoryPath: function(id:string, page:string = '1'):string {
    return `${this.base}/discover/movie?with_genres=${id}&page=${page}&region=GB&sort_by=popularity.desc&with_release_type=2%7C3`
  },
  getComingSoonPath: function(page:string = '1'):string {
    return `${this.base}/movie/upcoming?page=${page}&region=GB`;
  },
  getFilmographyPath: function(id:string):string {
    return `${this.base}/person/${id}/movie_credits`;
  },
  getNowPlayingPath: function(page:string = '1'):string {
    return `${this.base}/movie/now_playing?page=${page}&region=GB`;
  },
  getRecommendationsPath: function(id:string, page:string = '1'):string {
    return `${this.base}/movie/${id}/recommendations?page=${page}&region=GB`;
  },
  getFilmPath: function(id:string):string {
    return `${this.base}/movie/${id}`;
  },
  getPersonPath: function(id:string):string {
    return `${this.base}/person/${id}`;
  },
  getGenresPath: function():string {
    return `${this.base}/genre/movie/list`;
  },
  getFilmsPath: function(type:string, page:number, id:string):string {
    // console.log('getFilms', this);
    switch(type) {
      case 'recs':
        return `${this.base}/movie/${id}/recommendations?page=${page}&region=GB`;
      case 'genre':
        return `${this.base}/discover/movie?with_genres=${id}&page=${page}&region=GB&sort_by=popularity.desc&with_release_type=2%7C3`;
      case 'playing':
        return `${this.base}/movie/now_playing?page=${page}&region=GB`;
      case 'coming':
        return `${this.base}/movie/upcoming?page=${page}&region=GB`;
    };
    return '';
  },
  getPosterPath: function(path:string, size:string) {
    return path ? (this.mediaBase + `/${size}` + path) : null;
  }
};

export type person = {
  id?: string;
  profile_path?: string;
  name?: string;
  role?: string;
  profile_path_size?: string;
  biography?: string;
};

export type genre = {
  name?: string;
  id?: string;
};

export type film = {
  id?: string,
  title?: string,
  overview?: string,
  poster_path?: string,
  genres?: genre[],
  duration?: string,
  ratingClass?: string,
  rating?: string
  role?: string;
};

