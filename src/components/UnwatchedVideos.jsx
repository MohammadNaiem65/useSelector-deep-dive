import { useSelector } from 'react-redux';
import VideoItem from './VideoItem';
import { selectMemoizedUnWatchedVideos } from '../features/videos/videoSelectors';

export default function UnWatchedVideos() {
	const unwatchedVideos = useSelector(selectMemoizedUnWatchedVideos);

	console.log('[UnWatchedVideos] renders');

	return (
		<div>
			<ul className='divide-y divide-slate-200'>
				{unwatchedVideos.map((video) => (
					<VideoItem key={video.id} video={video} />
				))}
			</ul>
		</div>
	);
}
