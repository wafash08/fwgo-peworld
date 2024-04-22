export default function EditForm({
	title,
	children,
	method = 'post',
	uploadFile = false,
	...props
}) {
	return (
		<form
			method={method}
			encType={
				uploadFile ? 'multipart/form-data' : 'application/x-www-form-urlencoded'
			}
			className='bg-white rounded-lg'
			{...props}
		>
			<EditFormHeader>{title}</EditFormHeader>
			<div className='bg-[#E2E5ED] h-[1px] mb-30px'></div>
			<div className='p-5 pt-8 md:p-[30px] grid gap-8'>{children}</div>
		</form>
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
