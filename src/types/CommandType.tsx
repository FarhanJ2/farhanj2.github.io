export type CMDType = {
	cmd: string;
	Component: () => JSX.Element;
	time: string;
};