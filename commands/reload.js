exports.run = (client, message, args) => {
  console.log(args);
  if(!args[0] || args.size < 1) {return message.reply("Must provide a command name to reload.");}
  // the path is relative to the *current folder*, so just ./filename.js
  delete require.cache[require.resolve(`./${args[0]}.js`)];
  console.log(`The command ${args[0]} has been reloaded`);
};