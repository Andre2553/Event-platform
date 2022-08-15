import { CheckCircle, Lock } from 'phosphor-react'
import {isPast,format} from 'date-fns'
import { Link, useParams } from 'react-router-dom';
interface LessonProps {
	title: string;
	slug: string;
	availableAt: Date;
	type: 'live' | 'class';
}
export function Lesson(props: LessonProps) {
	const {slug} = useParams<{slug: string}>();

	const isLessoAvailable = isPast(props.availableAt);
	const availableDateFormatted = format(props.availableAt,"EEEE' - 'd'th 'MMMM'");

	const isActiveLesson = slug == props.slug;

	return (
		<Link to={`/event/lesson/${props.slug}`} className="group">
			<span className="tex-gray-300">
				{availableDateFormatted}
			</span>
			<div className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${isActiveLesson ? 'bg-green-500': ''}`}>
				<header className="flex items-center justify-between">
					{isLessoAvailable ? (
						<span className="text-sm text-blue-500 flex items-center gap-2 font-medium">
							<CheckCircle size={20} />
							Available
						</span>
					) : (
						<span className="text-sm text-blue-500 flex items-center gap-2 font-medium">
							<Lock size={20} />
							Soon Available
						</span>
					)}

					<span className="text-xs rounded px-2 py-[0.125rem]  text-white border border-green-300 font-bold">
						{props.type === 'live' ? 'Live' : 'Class'}
					</span>
				</header>
				<strong className={` mt-5 block ${isActiveLesson ? 'text-white': 'text-gray-200'}`}>
					{props.title}
				</strong>
			</div>
		</Link>
	);
}