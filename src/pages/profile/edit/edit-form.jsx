import { Form } from 'react-router-dom';

export default function EditForm({ title, children }) {
	return (
		<Form class='bg-white rounded-lg'>
			<EditFormHeader>{title}</EditFormHeader>
			<div class='bg-[#E2E5ED] h-[1px] mb-30px'></div>
			<div class='p-5 pt-8 md:p-[30px] grid gap-8'>{children}</div>
		</Form>
	);
}

function EditFormHeader({ children }) {
	return (
		<header class='p-5 md:p-[30px]'>
			<h2 class='text-lg md:text-[22px] text-[#1F2A36] font-semibold'>
				{children}
			</h2>
		</header>
	);
}
