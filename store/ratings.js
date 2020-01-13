import apps from '~/static/apps.json';

const options = ['4,0', "3,0", "2,0"]
const defaultValue = 'Выбрать'

const _ratingAdapt = value => {
    if (typeof value === 'string') {
        let rating = value.split('');
        rating.splice(1, 1, '.');
        parseFloat(rating.join(''));
    }
    return value;
}

export const state = () => ({
    apps: [],
    games: [],
    appsOptions: [...options],
    gameOptions: [...options],
    appsValue: defaultValue,
    gameValue: defaultValue,
    filteredApps: [],
    filteredGames: []
})

export const getters = {
    apps: state => state.apps.applications,
    games: state => state.games.applications,
    appsOptions: state => state.appsOptions,
    gameOptions: state => state.gameOptions,
    appsValue: state => state.appsValue,
    gameValue: state => state.gameValue,
    filteredApps: state => state.filteredApps,
    filteredGames: state => state.filteredGames
}

export const actions = {
    async getApps({ commit }) {
        commit('updateData', apps)
    }
}

export const mutations = {
    updateData: (state, apps) => {
        state.apps = apps.tinkoff
        state.games = apps.games
    },
    updateAppsValue(state, value) {
        if (state.appsValue === null) {
            state.appsValue = value;
        }
        state.appsValue = value;
    },
    updateGamesValue(state, value) {
        if (state.gameValue === null) {
            state.gameValue = value;
        }
        state.gameValue = value;
    },
    filteredAppsByPlatform(state, evt) {
        if (evt.target.dataset.filter === 'all') {
            state.filteredApps.length = 0;
            state.appsValue = defaultValue;
        }
        state.filteredApps = state.apps.applications.filter(it => it.platform === evt.target.dataset.filter);
    },
    filteredGamesByPlatform(state, evt) {
        if (evt.target.dataset.filter === 'all') {
            state.filteredGames.length = 0;
            state.appsValue = defaultValue;
        }
        state.filteredGames = state.games.applications.filter(it => it.platform === evt.target.dataset.filter);
    },
    filteredAppsByRating(state) {
        state.filteredApps = state.apps.applications.filter(it => {
            return _ratingAdapt(it.rating) >= _ratingAdapt(state.appsValue);
        });
    },
    filteredGamesByRating(state) {
        state.filteredGames = state.games.applications.filter(it => {
            return _ratingAdapt(it.rating) >= _ratingAdapt(state.gameValue);
        });
    }
}
