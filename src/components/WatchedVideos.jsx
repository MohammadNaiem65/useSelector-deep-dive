import { useSelector } from 'react-redux';
import VideoItem from './VideoItem';
import { selectWatchedVideos } from '../features/videos/videoSelectors';

export default function WatchedVideos() {
	const watchedVideos = useSelector(selectWatchedVideos);

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
