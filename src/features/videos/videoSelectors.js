import { createSelector } from 'reselect';

export const selectAllVideos = (state) => state.videos.videos;
export const selectWatchedVideos = (state) =>
	state.videos.videos.filter((v) => v.watched);
export const selectUnWatchedVideos = (state) =>
	state.videos.videos.filter((v) => !v.watched);

export const selectMemoizedWatchedVideos = createSelector(
	selectAllVideos,
	(allVideos) => {
		return allVideos.filter((video) => video.watched === true);
	}
);

export const selectMemoizedUnWatchedVideos = createSelector(
	selectAllVideos,
	(allVideos) => {
		return allVideos.filter((video) => video.watched === false);
	}
);

export const selectMemoizedFilteredVideos = () =>
	createSelector(
		selectAllVideos,
		(state, watchedStatus) => watchedStatus,
		(allVideos, watchedStatus) => {
			return allVideos.filter((video) => video.watched === watchedStatus);
		}
	);
