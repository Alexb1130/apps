<script>
import Multiselect from "vue-multiselect";
import FilterEl from "~/components/FilterEl";
import Card from "~/components/Card";
import { mapGetters, mapMutations } from "vuex";
export default {
	components: {
		Multiselect,
		FilterEl,
		Card
	},
	computed: mapGetters({
		appsOptions: "ratings/appsOptions",
		appsValue: "ratings/appsValue",
        apps: "ratings/apps",
        filteredApps: "ratings/filteredApps"
	}),
	methods: {
		...mapMutations({
			updateValue: "ratings/updateAppsValue",
            filteredAppsByPlatform: "ratings/filteredAppsByPlatform",
            filteredAppsByRating: "ratings/filteredAppsByRating"
        }),
        onInput(state) {
            this.updateValue(state)
            this.filteredAppsByRating(state)
        }
	}
};
</script>
<template>
	<div>
		<FilterEl :onFilter="filteredAppsByPlatform">
			<multiselect
				@input="onInput"
				:searchable="false"
				selectLabel=""
				deselectLabel=""
				selectedLabel=""
				placeholder=""
				tagPosition="bottom"
				v-model="appsValue"
				:options="appsOptions"
			>
				<template slot="option" slot-scope="props">
					от {{ props.option }}
					<svg-icon
						width="15"
						height="14"
						fill="#F8BF25"
						name="star"
					/>
				</template>
			</multiselect>
		</FilterEl>
        <div v-if="filteredApps.length" class="cards-container">
            <Card
				v-for="card in filteredApps"
				:key="card.categoryPosition"
				:data="card"
			/>
        </div>
		<div v-else class="cards-container">
			<Card
				v-for="card in apps"
				:key="card.categoryPosition"
				:data="card"
			/>
		</div>
	</div>
</template>
