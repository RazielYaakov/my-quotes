export const SERVER_URL = process.env.NODE_ENV === 'production' ?
    process.env.REACT_APP_SERVER_URL : 'http://localhost:5000';

export const GET_QUOTE_API = 'api/Quotes/GetQuote';
export const GET_ALL_QUOTES_DATA_API = 'api/Quotes/GetAll';
export const ADD_QUOTE_API = 'api/Quotes/AddQuote';
export const DELETE_QUOTE_API = 'api/Quotes/DeleteQuote';

export const OK_RESPONSE = 200;
export const ERROR_RESPONSE = 404;
export const EMPTY_BODY = '';


export const DANGER_COLOR = "#da3131";
export const DANGER_HOVER_COLOR = "red";
export const UPDATE_COLOR = "#2ca915";
export const UPDATE_HOVER_COLOR = "green";
export const DEFAULT_COLOR = "#474d5a";
export const DEFAULT_HOVER_COLOR = "#5b6366";
export const TRANSPARENT = "transparent";

export const VIDEO_TYPE = "וידאו";
export const ARTICLE_TYPE = "מאמר";
export const SONG_TYPE = "שיר";
export const SERIES_TYPE = "סדרה";
export const MOVIE_TYPE = "סרט";
export const PODCAST_TYPE = "פודקאסט";
export const BOOK_TYPE = "ספר";
export const SPEECH_TYPE = "נאום";
export const OTHER_TYPE = "אחר";

export const ORIGIN_TYPES = [VIDEO_TYPE, ARTICLE_TYPE, SPEECH_TYPE, SERIES_TYPE, BOOK_TYPE, MOVIE_TYPE, PODCAST_TYPE, SONG_TYPE, OTHER_TYPE];

export const FUNNY_TYPE = "מצחיק";
export const SCARY_TYPE = "מפחיד";
export const CLEVER_TYPE = "חכם";
export const INSPIRATION_TYPE = "השראה";
export const MOTIVATION_TYPE = "מוטיבציה";
export const INTERESTING_TYPE = "מעניין";
export const COMPLIMENT_TYPE = "מחמאה";

export const TAG_OPTIONS = [INSPIRATION_TYPE, CLEVER_TYPE, MOTIVATION_TYPE, COMPLIMENT_TYPE, INTERESTING_TYPE, SCARY_TYPE, FUNNY_TYPE, OTHER_TYPE];