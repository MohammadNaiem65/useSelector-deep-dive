import { useSelector } from 'react-redux';
import VideoItem from './VideoItem';
import { selectUnWatchedVideos } from '../features/videos/videoSelectors';

export default function UnWatchedVideos() {
	const unwatchedVideos = useSelector(selectUnWatchedVideos);

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
