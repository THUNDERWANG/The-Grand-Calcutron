module.exports = (command, message) => {
	if (command.guildOnly && message.channel.type === 'dm') {
		message.channel.send('This command can only be used in the server!');
		throw new Error('checkGuild');
	}
};
