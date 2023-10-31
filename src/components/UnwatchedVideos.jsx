import { useSelector } from 'react-redux';
import VideoItem from './VideoItem';

export default function UnWatchedVideos() {
	const unwatchedVideos = useSelector((state) =>
		state.videos.videos.filter((v) => !v.watched)
	);

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
