<script>
export default {
	props: ["onFilter"]
};
</script>
<template>
	<form class="filter">
		<div class="filter__platforms">
			<p class="filter__title">Фильтр</p>
			<div class="filter__platforms-items">
				<div class="filter__all">
					<input
						data-filter="all"
                        @input="onFilter"
						checked
						type="radio"
						name="os"
						id="filter-all"
					/>
					<label for="filter-all">Все</label>
				</div>
				<div class="filter__ios">
					<input
						data-filter="apple"
						@input="onFilter"
						type="radio"
						name="os"
						id="filter-ios"
					/>
					<label for="filter-ios">
						<svg-icon width="15" height="19" name="apple" />
					</label>
				</div>
				<div class="filter__android">
					<input
						data-filter="android"
                        @input="onFilter"
						type="radio"
						name="os"
						id="filter-android"
					/>
					<label for="filter-android">
						<svg-icon width="17" height="21" name="android" />
					</label>
				</div>
			</div>
		</div>
		<div class="filter__rating">
			<p class="filter__title">Рейтинг</p>
			<slot></slot>
		</div>
	</form>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
.multiselect {
	width: 200px;
	min-height: 34px;

	&--active {
		.multiselect__tags {
			box-shadow: 0px 3px 15px #00000029;
		}
	}

	&__select::before {
		position: absolute;
		width: 10px;
		height: 6px;
		top: 50%;
		right: 15px;
		margin-top: 0;
		transform: translateY(-50%);
		background: url("~assets/sprite/svg/arrow-down-1.svg") center no-repeat;
		background-size: cover;
		border: 0;
		opacity: 0.4;
	}

	&__content-wrapper {
		top: 100%;
		background: #f1f1f5;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		box-shadow: 0px 3px 15px #00000029;
	}

	&__tags {
		min-height: 34px;
		border: 0;
		border-radius: 10px;
		background: #f1f1f5;
	}

	&__single,
	&__input {
		color: #979898;
		background: #f1f1f5;
	}

	&__option--highlight {
		background-color: #3469f2;
	}

	&__option--selected.multiselect__option--highlight {
		background-color: #3469f2;
	}
}

.filter {
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 20px;
	padding: 15px 25px;
	border-radius: 0px 16px 16px 16px;
	background-color: #fff;

	&__title {
		margin-bottom: 15px;
		font-weight: 500;
		color: #1d353d;
	}

	&__platforms-items {
		display: flex;
		align-items: center;
		// margin-right: 15px;

		input {
			appearance: none;

			&:checked + label {
				color: #fff;
				background: #3469f2;

				svg {
					fill: #fff;
				}
			}
		}

		label {
			width: 54px;
			height: 34px;
			margin-right: 20px;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			border-radius: 10px;
			color: gray;
			background: #f1f1f5;
			font-weight: 500;
			transition: all 0.15s;
			cursor: pointer;
			svg {
				fill: gray;
			}
		}
	}
}
</style>
