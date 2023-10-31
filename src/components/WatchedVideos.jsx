import { useSelector } from 'react-redux';
import VideoItem from './VideoItem';
import { selectMemoizedWatchedVideos } from '../features/videos/videoSelectors';

export default function WatchedVideos() {
	const watchedVideos = useSelector(selectMemoizedWatchedVideos);

	console.log('[WatchedVideos] renders');

	return (
		<div>
			<ul className='divide-y divide-slate-200'>
				{watchedVideos.map((video) => (
					<VideoItem key={video.id} video={video} />
				))}
			</ul>
		</div>
	);
}
