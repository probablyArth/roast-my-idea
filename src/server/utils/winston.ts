import { createLogger, format, transports } from "winston";

const { combine, printf, timestamp } = format;
const myFormat = printf(({ level, message, label, timestamp, title }) => {
  return `\n\x1b[1m${timestamp}\x1b[0m \x1b[1m\n\x1b[36m[${level}]:\x1b[0m \x1b[34m\x1b[1m${title}\n\x1b[37m${message}\x1b[0m\n`;
});

const logger = createLogger({
  format: combine(timestamp({ format: "hh:mm:ss" }), myFormat),
  transports: [new transports.Console()],
});

export default logger;
