export enum LogType {
	INFO,
	ERROR,
	WARN,
}

export function log(typeOfLog: LogType, ...args: any[]) {
	let logType = "INFO";

	switch (typeOfLog) {
		case LogType.ERROR:
			logType = "ERROR";
			break;
		case LogType.WARN:
			logType = "WARN";
			break;
		default:
			break;
	}

	let date = new Date(Date.now()).toISOString();
	console.log(`[${logType}][${date}] ${args}`);
}
