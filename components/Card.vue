<script>
export default {
	props: ["data"],
	methods: {
		truncateText(text) {
			const maxLength = 55;
			return text.length > maxLength
				? text.substring(0, maxLength).concat("...")
				: text;
		},
		roundingInstallations(installations) {
			if (installations.length >= 8) {
				return installations.toString().substring(0, 2) + "kk";
			}
			if (installations.length >= 7) {
				return installations.toString().substring(0, 1) + "kk";
			}
			if (installations.length >= 6) {
				return installations.toString().substring(0, 3) + "k";
			}
			if (installations.length >= 5) {
				return installations.toString().substring(0, 2) + "k";
			}

			return installations;
		}
	}
};
</script>
<template>
	<div class="card">
		<div class="card__row card__row--header">
			<img
				width="80"
				height="80"
				class="card__icon"
				:src="data.icon"
				:alt="data.name"
                loading="lazy"
                v-lazy-load
			/>
			<div class="card__info">
				<h3 class="card__title">{{ truncateText(data.name) }}</h3>
				<div class="card__info-items">
					<div>
						<svg-icon
							:name="data.platform"
							width="12"
							height="14"
							fill="gray"
						/>
						<span class="card__price">{{ data.price }}</span>
					</div>
					<span>
						<svg-icon
							width="20"
							height="19"
							fill="#F8BF25"
							name="star"
						/>
						{{ data.rating }}
					</span>
					<span>
						<svg-icon
							width="12"
							height="14"
							fill="gray"
							name="geo"
						/>
						{{ data.location }}
					</span>
				</div>
			</div>
		</div>
		<div class="card__row">
			<ul class="card__props">
				<li>
					<span class="card__props-title">ASO index</span>
					<span class="card__props-value">{{ data.asoindex }}</span>
				</li>
				<li>
					<span class="card__props-title">Установок за месяц</span>
					<span class="card__props-value">
						{{ roundingInstallations(data.installations) }}
					</span>
				</li>
				<li>
					<span class="card__props-title">В категории</span>
					<span class="card__props-value">{{
						data.categoryPosition
					}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<style lang="scss">
.cards-container {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 15px;
}
.card {
	display: grid;
	grid-template-rows: 1fr 70px;
	padding: 12px;
	border-radius: 16px;
	background-color: #fff;

	&__icon {
		flex-shrink: 0;
		margin-right: 15px;
	}

	&__price {
		display: inline-block;
		padding: 3px 5px;
		font-weight: 500;
		font-size: 13px;
		letter-spacing: 0.11px;
		border: 1px solid #979898;
		border-radius: 6px;
		color: #979898;
	}

	&__title {
		// max-width: 270px;
		margin-bottom: 10px;
		font-size: 18px;
		line-height: 24px;
		font-weight: 500;
		color: #1d353d;
	}

	&__info {
		width: 100%;
		padding-right: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	&__info-items {
		display: flex;
		justify-content: space-between;
		align-items: center;

		& > * {
			display: flex;
			align-items: center;

			svg {
				margin-right: 5px;
			}
		}
	}

	&__row {
		margin-bottom: 20px;
	}

	&__row--header {
		display: flex;
	}

	&__props {
		margin: 0;
		padding: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		list-style: none;

		li {
			span {
				display: block;
				text-align: center;
			}

			&:nth-child(2) {
				padding: 0 30px;
				border-left: 1px solid #e8e8e8;
				border-right: 1px solid #e8e8e8;
			}
		}

		&-title {
			margin-bottom: 10px;
			font-size: 12px;
			font-weight: 500;
			color: #979898;
		}
		&-value {
			font-size: 26px;
			font-weight: 900;
			color: #1d353d;
		}
	}
}
</style>
