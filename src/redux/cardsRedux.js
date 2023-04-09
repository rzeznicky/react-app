import shortid from 'shortid';
import strCointains from '../utils/strContains';

// selectors
export const getFavoriteCards = state => state.cards.filter(card => card.isFavorite);
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strCointains(card.title, searchString));

// actions
const ADD_CARD = 'app/cards/ADD_CARD';
const TOGGLE_CARD_FAVORITE = 'app/cards/TOGGLE_CARD_FAVORITE';

// action creators
export const addCard = payload => ({ type: ADD_CARD, payload });
export const toggleCardFavorite = payload => ({ type: TOGGLE_CARD_FAVORITE, payload });

const cardsReducer = (statePart = [], action) => {
    switch(action.type) {
      case ADD_CARD:
        return [...statePart, { ...action.payload, id: shortid() }];
      case TOGGLE_CARD_FAVORITE:
        return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
      default:
        return statePart;
    }
  }

  export default cardsReducer;