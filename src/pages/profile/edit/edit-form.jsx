import { Form } from 'react-router-dom';

export default function EditForm({
	title,
	children,
	method = 'post',
	uploadFile = false,
}) {
	return (
		<Form
			method={method}
			encType={
				uploadFile ? 'multipart/form-data' : 'application/x-www-form-urlencoded'
			}
			className='bg-white rounded-lg'
		>
			<EditFormHeader>{title}</EditFormHeader>
			<div className='bg-[#E2E5ED] h-[1px] mb-30px'></div>
			<div className='p-5 pt-8 md:p-[30px] grid gap-8'>{children}</div>
		</Form>
	);
}

function EditFormHeader({ children }) {
	return (
		<header className='p-5 md:p-[30px]'>
			<h2 className='text-lg md:text-[22px] text-[#1F2A36] font-semibold'>
				{children}
			</h2>
		</header>
	);
}
