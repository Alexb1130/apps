<script>
import Multiselect from "vue-multiselect";
import FilterEl from "~/components/FilterEl";
import Card from "~/components/Card"
import { mapGetters, mapMutations } from "vuex";
export default {
	components: {
		Multiselect,
        FilterEl,
        Card
	},
	computed: mapGetters({
		gameOptions: "ratings/gameOptions",
        gameValue: "ratings/gameValue",
        games: "ratings/games",
        filteredGames: "ratings/filteredGames"
	}),
	methods: {
		...mapMutations({
			updateValue: "ratings/updateGamesValue",
            filteredGamesByPlatform: "ratings/filteredGamesByPlatform",
            filteredGamesByRating: "ratings/filteredGamesByRating"
        }),
        onInput(state) {
            this.updateValue(state)
            this.filteredGamesByRating(state)
        }
	}
};
</script>
<template>
	<div>
		<FilterEl :onFilter="filteredGamesByPlatform">
			<multiselect
				@input="onInput"
				:searchable="false"
				selectLabel=""
				deselectLabel=""
				selectedLabel=""
				placeholder=""
				tagPosition="bottom"
				v-model="gameValue"
				:options="gameOptions"
			>
				<template slot="option" slot-scope="props">
					от {{ props.option }}
                    <svg-icon width="15" height="14" fill="#F8BF25" name="star" />
				</template>
			</multiselect>
		</FilterEl>
        <div v-if="filteredGames.length" class="cards-container">
            <Card
				v-for="card in filteredGames"
				:key="card.categoryPosition"
				:data="card"
			/>
        </div>
		<div v-else class="cards-container">
			<Card
				v-for="card in games"
				:key="card.categoryPosition"
				:data="card"
			/>
		</div>
	</div>
</template>
