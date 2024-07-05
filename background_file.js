function getBackgroundList() {
    return {
        "backgrounds": [
            "Spacer",
            "Pioneer",
            "Highborn",
            "Street Crawler",
            "Warrior",
            "Searcher",
            "Wastelander",
            "Mutant",
            "Netkid",
            "Acolyte"
        ]
    };
}

function getBackgroundInfo(name) {
    switch (name) {
        case "Spacer":
            return getSpacerDetails();
        case "Pioneer":
            return getPioneerDetails();
        case "Highborn":
            return getHighbornDetails();
        case "Street Crawler":
            return getStreet_CrawlerDetails();
        case "Warrior":
            return getWarriorDetails();
        case "Searcher":
            return getSearcherDetails();
        case "Wastelander":
            return getWastelanderDetails();
        case "Mutant":
            return getMutantDetails();
        case "Netkid":
            return getNetkidDetails();
        case "Acolyte":
            return getAcolyteDetails();
    }
}

function getSpacerDetails() {
    return {
        "Background Stat Bonus": "CON",
        "Contact": "Industrial",
        "Proficiencies": [
            "acrobatics",
            "starship",
            "improvised Weapons",
            {
                "extra": 3
            }
        ],
        "Feats": [
            {
                "Name": "Starborn Cowboy (Free Feat)",
                "Info": "What self respecting spacer doesn’t have their own starship? You are the proud owner of a CL 1 starship. Follow all of the usual steps to building the ship, except that you may ignore any Contacts requirements for acquiring it. You also receive a 25% discount on all future ship upgrades and system purchases."
            },
            {
                "Name": "Hard Impact",
                "Info": "Before you learned to avoid a crash, you learned how to soften one. While piloting a vehicle or starship, you can use an action to point the strongest portion of it towards incoming damage, granting the vehicle resistance to all damage it receives until the beginning of your next turn."
            },
            {
                "Name": "Tool Jockey",
                "Info": "There’s rarely the luxury of hiring a plumber or mechanic in space, so you’ve had to learn to perform a lot of jobs yourself. You immediately gain proficiency in three tools of your choosing."
            },
            {
                "Name": "OSHA MechLift Certified",
                "Info": "Industrial mechs are often used when offloading heavy cargo, but are effective at solving a variety of problems that require brute force. You gain proficiency in land vehicles, and whenever you apply your proficiency bonus to operate a mech, you may add twice your proficiency bonus instead. You also add your proficiency bonus to damage rolls that use the mech."
            },
            {
                "Name": "Spacecraft Soulbond",
                "Info": "You know your ship better than anyone. You may designate a starship as your Trusty Vessel. Whenever the ship makes an ability check or saving throw, you may use your reaction to add your wisdom modifier to the roll. You may use this feature a number of times equal to your proficiency bonus, and regain all uses on a long rest. Also, you gain a +2 bonus to any checks you make to operate or repair the trusty vessel and its subsystems. You may only have one trusty vessel at a time, and you cannot select a new vessel until your current one is destroyed."
            },
            {
                "Name": "Jury-Rigged Repairs",
                "Info": "Sometimes, the repairs don’t need to be pretty, they just need to be quick. As an action, you can perform quick repairs on a vehicle you can touch, granting it temporary hit points equal to the roll of a number of d6s equal to your proficiency bonus. A vehicle must be below its max HP to receive these temporary hit points, the temporary hit points cannot exceed the amount of health the vehicle is missing, and it loses these temporary hit points after 10 minutes. A vehicle cannot gain temporary HP from this feat again until 24 hours have passed."
            },
        ],
    };
}

function getPioneerDetails() {
    return {
        "Background Stat Bonus": "WIS",
        "Contact": "Wilderness",
        "Proficiencies": [
            {
                "choice": [
                    "survival",
                    "animal_handling"
                ]
            },
            "Land Vehicles",
            {
                "extra": 2
            }
        ],
        "Feats": [
            {
                "Name": "Use The Whole Beast (Free Feat)",
                "Info": "When hunting wildlife you make the most of every kill, integrating a creature’s hide, bones, and teeth into your equipment. You can use an action while within 5ft of a creature’s corpse to harvest it. When you do, you can choose one of the options below, gaining a consumable item based on what you choose. You can only harvest a particular corpse once, and you can harvest a number of corpses equal to your Wisdom modifier per long rest. Any unused consumables gained from this feat also expire the next time you take a long rest. Some of the options have restrictions on what kind of creature’s corpses you can harvest them from. Consumable’s effects don’t stack on a single creature, but multiple different consumables can be applied to the same creature." +
                "\n<dl><dt>Claw (Any Non-Construct that has claws):</dt>" +
                "<dd>Sharp claws that help creatures grip the terrain while moving. When a creature consumes a claw as an action, the claws are strapped to their boots or legs. When they do, they gain a +10 bonus to their movement speed and jump distances for an hour, and if the creature the claw was harvested from had a climb or burrow speed, the creature that consumes the claw will gain that speed for the same duration.</dd>" +
                "\n<dt>Tooth (Any Non-Construct that has teeth or fangs):</dt>" +
                "<dd>Teeth and fangs designed to pierce flesh. If a creature consumes a tooth, they immediately attach it to one of their melee weapons or fists. Whatever melee weapon they choose to attach it to (or your unarmed attacks if you chose your fists) gains a +1 bonus to damage rolls for an hour.</dd>" +
                "\n<dt>Bone/Exoskeleton (Any Non-Construct that has bones or an exoskeleton):</dt>" +
                "<dd>A creature’s bones, carapace, or exoskeleton, sturdy and protective. A creature that consumes the bones (or other) as an action can layer them onto their armor, granting them a +1 bonus to their AC for an hour.</dd>" +
                "\n<dt>Hide (Any Medium or larger Non-Construct that has skin or hide):</dt>" +
                "<dd>A creature’s skin, warm and typically camouflaged to its natural habitat. When a creature consumes the hide as an action, they will wear it as a cloak, which grants them advantage on stealth checks for an hour. In addition, if the creature you harvested the hide from was resistant to a particular damage type (as an intrinsic feature, not a temporary effect) the creature that wears the hide will also gain resistance to that damage type until the effect expires.</dd>" +
                "\n<dt>Venom Sac (Any Non-Construct with a poison effect that is applied by an unarmed or natural weapon attack):</dt>" +
                "<dd>An organic pouch containing venom or poison, which can easily be squeezed onto a weapon. When consumed, you can cause a melee weapon to deal whatever poison effect that the creature you harvested the venom sac from possessed. The poison remains potent for one minute when applied to a weapon. You can also apply the poison to food, using the same rules as using standard poisons.</dd>" +
                "\n<dt>Meat (Any Non-Construct):</dt>" +
                "<dd>A cut of meat, which you can flash-cook and eat. Any creature that consumes the meat gains 1d8 temporary hit points. Constructs cannot receive these temporary hit points, and they are lost on a long rest.</dd>" +
                "\n<dt>Battery Pack (Constructs Only):</dt>" +
                "<dd>While robots might not be the usual wilderness prey, harvesting them for parts can be just as important. Any creature that consumes the battery pack as an action can regain a spent battery point.</dd>" +
                "\n<dt>Trophy:</dt>" +
                "<dd>A simple trophy, a token of your success and pride. A creature can consume the trophy to gain a 1d4 bonus to a single ability check or saving throw they make within the next hour. They may add this bonus after the roll, but before the outcome is decided.</dd></dl>"
            },
            {
                "Name": "Loyal Pet",
                "Info": "You’ve earned the loyalty of an animal pet. Beasts in the system can be strange and alien; describe your pet. The beast uses a stat block you choose from the Find Familiar spell, and can be commanded using your bonus action. If you do not give it a command, it takes the dodge action. If the creature reaches 0 hit points, it rolls death saving throws like a player character and can be stabilized using either a DC15 medicine check or a DC15 animal handling check. On a long rest, you may replace your pet with a new pet that uses a different stat block, even if your original companion has died."
            },
            {
                "Name": "Harsh Environment Adaptation",
                "Info": "You’ve adapted to extreme environmental conditions. You have advantage on saving throws made against any effects caused by beasts or natural weather conditions."
            },
            {
                "Name": "Natural Explorer",
                "Info": "You have advantage on perception and stealth checks made while in a natural environment, you suffer no penalties from difficult terrain, and you gain a climbing speed of 30ft."
            },
            {
                "Name": "Natural Remedies",
                "Info": "You know how to treat a variety of ailments using herbs and plants. Once per day, you can spend 10 minutes searching the area for healing herbs. When you do, make a survival check. The check has disadvantage if you are in an artificial or urban environment, such as inside a ship or city. You gain a number of healing herbs equal to the roll divided by 10, rounded down. A creature can spend an action to consume an herb, or feed it to another creature, causing them to regain 3d4 HP and ending one negative affliction affecting them. The herbs expire after 24 hours. Constructs cannot be affected by this feature."
            },
            {
                "Name": "Poisoner",
                "Info": "You can apply poison to a weapon as a bonus action, and any poisons you use that force a creature to make a saving throw will instead use your Wisdom DC."
            },
        ],
    };
}

function getHighbornDetails() {
    return {
        "Background Stat Bonus": "CHA",
        "Contact": "Corporate",
        "Proficiencies": [
            {
                "choice": [
                    "persuassion",
                    "insight"
                ]
            },
            {
                "extra": 3
            }
        ],
        "Feats": [
            {
                "Name": "Well-Connected (Free Feat)",
                "Info": "Your connections allow you to source any items that require contacts you do not have. Sourcing an item that requires contacts you do not have incurs a 50% surcharge on the price of the item."
            },
            {
                "Name": "Higher Education",
                "Info": "With wealth comes the privilege of higher education. Pick two skills that you are proficient with; you gain expertise in these skills."
            },
            {
                "Name": "Socialite",
                "Info": "You’ve learned that words are an effective way of getting what you want. Once per short or long rest you can reroll a failed charisma-based ability check."
            },
            {
                "Name": "Personal Vehicle",
                "Info": "Walking is for the poor. You immediately gain access to a land vehicle of your choosing: either a hovercar or zip bike. You also gain proficiency with land vehicles if you do not already have it. The vehicle you gain is insured, and will be replaced within one week when destroyed or damaged, assuming you are in an urban environment. If you are not in an urban environment when the one week wait finishes, the vehicle will be delivered to you the next time you arrive in an urban environment."
            },
            {
                "Name": "Performer",
                "Info": "You’re no stranger to theatrics, on the stage and off. You gain proficiency with performance, or expertise if you already have it. In addition, you gain proficiency with disguise kits and can perfectly mimic the voice of anyone you have heard speak for at least 1 minute."
            },
            {
                "Name": "Culinarian",
                "Info": "You’re used to fine dining, and you’re willing to do the cooking yourself if necessary. You gain proficiency in chef’s utensils if you do not already have it. As part of a short rest, you can cook special food, provided you have ingredients (one ration) and cook's utensils on hand. You can prepare enough of this food for a number of creatures equal to 4 + your proficiency bonus. At the end of the short rest, any creature who eats the food and spends one or more Hit Dice to regain hit points regains an extra 1d8 hit points, and any creatures that gain these hit points do not need to consume additional rations to gain the benefits of the long rest. With one hour of work or when you finish a long rest, you can cook a number of treats equal to your proficiency bonus. These special treats last 8 hours after being made. A creature can use a bonus action to eat one of those treats to gain temporary hit points equal to twice your proficiency bonus. Constructs cannot be affected by this feature."
            },
        ],
    };
}

function getStreet_CrawlerDetails() {
    return {
        "Background Stat Bonus": "DEX",
        "Contact": "Criminal",
        "Proficiencies": [
            {
                "choice": [
                    "deception",
                    "sleight_of_hand",
                    "stealth"
                ]
            },
            "thieves",
            {
                "extra": 3
            }
        ],
        "Feats": [
            {
                "Name": "Thieves’ Code (Free Feat)",
                "Info": "You have connections in the criminal underground, and you know how to talk to criminals. You can always locate any major illegal services that exist in your current area, such as black market salesmen, drug dealers, smugglers, or hitmen, as long as such services exist in your current area and are currently being offered. In addition, you have learned a language of coded words and symbols, called rookscratch, used exclusively by criminal groups. You can communicate with other criminals who know this language, in both verbal and written manner, in such a way that sounds innocuous to those who don’t understand the language."
            },
            {
                "Name": "Footpad",
                "Info": "You’ve found that quick fingers can often get you out of a sticky situation. You can use your bonus action to attempt to pickpocket someone, even during combat. You can’t steal any worn clothing/armor, or any held items/weapons, but if a held weapon has the ‘Reload’ tag you can attempt to steal its magazine, forcing the wielder to use the reload action to continue attacking with the weapon if you succeed."
            },
            {
                "Name": "Cunning",
                "Info": "Survival requires thinking on your feet. You can use your bonus action to dash, disengage, hide, or use an item."
            },
            {
                "Name": "Smuggler’s Pouch",
                "Info": "You’ve learned the hard way that if someone wants you to hand over your weapons, they probably plan on shooting you. You’ve installed a smuggler’s pouch in your clothes, a small pocket designed to conceal the items within. You can conceal a single object small enough to fit in your hand within the pocket. An item within the pocket cannot be detected by any means other than a DC20 investigation check."
            },
            {
                "Name": "Masterkey",
                "Info": "Getting into places you aren’t wanted is your specialty. You add double your proficiency bonus when using thief’s tools to pick locks or break into an area, and you add a +5 bonus to your passive perception and investigation to spot traps and security systems."
            },
            {
                "Name": "Fight Dirty",
                "Info": "When it comes to fighting, you follow street rules, and that means making any opening you can. When you hit a creature with an attack on your turn, you can use your bonus action to expose a weakness, causing the next attack that hits them before the beginning of your next turn to deal an additional 1d10 damage."
            },
        ],
    };
}

function getWarriorDetails() {
    return {
        "Background Stat Bonus": "STR",
        "Contact": "Military",
        "Proficiencies": [
            {
                "choice": [
                    "athletics",
                    "intimidation"
                ]
            },
            {
                "extra": 2
            }
        ],
        "Feats": [
            {
                "Name": "Squad Tactics (Free Feat)",
                "Info": "Combat requires staying alert and coordinated with your teammates. You can give the help action to any creature that can hear you within 60 ft of you, and you can perform the help action as a bonus action. In addition, you gain a +3 bonus to your passive perception and initiative rolls."
            },
            {
                "Name": "Arms Training",
                "Info": "You’ve spent a long time ensuring that you can be a lethal combatant with any gear provided  to you. You are proficient in all weapons."
            },
            {
                "Name": "Combat Analysis",
                "Info": "Most battles are won before the first shot is fired. As a bonus action in combat, you may make an insight check against the passive deception of a creature you can see within 60ft of you. On a success, you learn: the creature’s current HP and AC. Additionally, you may ask a single question about the creature’s combat abilities, which the DM must answer honestly. You may use this feature a number of times equal to your wisdom modifier and regain all uses on a long rest."
            },
            {
                "Name": "Armored Combatant",
                "Info": "You prefer to put an inch or two of steel between yourself and those around you. You are proficient in all armor types, and gain a +1 bonus to AC while wearing armor."
            },
            {
                "Name": "Solidarity",
                "Info": "You rely on the strength of your allies to excel. Whenever you fail an ability check, saving throw, or attack roll, you can add a bonus equal to the number of allied creatures you can see within 30 ft of you, up to a maximum of +5. You can use this feature once per short or long rest."
            },
            {
                "Name": "Stoic",
                "Info": "In every war, the first battle is in the mind. You are immune to the frightened and charmed conditions. Allies within 10ft of you can add your proficiency bonus to saving throws made to resist those conditions."
            },
        ],
    };
}

function getSearcherDetails() {
    return {
        "Background Stat Bonus": "INT",
        "Contact": "Scientific",
        "Proficiencies": [
            {
                "choice": [
                    "science",
                    "acrobatics",
                    "survival"
                ]
            },
            "Starship",
            {
                "extra": 3
            }
        ],
        "Feats": [
            {
                "Name": "Shared Knowledge (Free Feat)",
                "Info": "You’ve picked up a lot of useful information over the years, and you’re more than happy to share it. You can spend one minute instructing any number of creatures you choose within 30ft of you about a skill or tool you are proficient in. Any creatures that you chose who remained within range for the full duration (and who were not already proficient in the skill or tool chosen) can now add their proficiency bonus to any skill or tool checks of the chosen type in the next hour. A creature can only benefit from this feature once per long rest."
            },
            {
                "Name": "Improvisation",
                "Info": "Whenever you perform an ability check you are not proficient in, you may add half your proficiency bonus, rounded down."
            },
            {
                "Name": "Quick Refresher",
                "Info": "You can use a bonus action to give a single creature who can hear you the benefits of your Shared Knowledge Feat albeit with the reduced duration of 1 minute. In addition, whenever a creature receives the benefits of your Shared Knowledge feat you gain a 1d4 bonus to any rolls of the chosen skill or tool checks for the duration, having refreshed your own memory by reciting your knowledge."
            },
            {
                "Name": "Intense Study",
                "Info": "When you succeed in a skill check to examine or recall information about an object, you may, in addition to the information you already learn, may ask one question about the object to the DM, who must answer honestly. The answer may be limited by various circumstances, such as damage to an artifact."
            },
            {
                "Name": "Friends in Far Places",
                "Info": "Immediately gain a Contacts bonus you don’t already have. Whenever you make a Charisma ability check or saving throw against members of a group you have Contacts with, you may add 1d6 to the roll."
            },
            {
                "Name": "Duck and Cover",
                "Info": "You have advantage on dexterity saving throws against effects you can see, such as traps, gadgets, or grenades."
            },
        ],
    };
}

function getWastelanderDetails() {
    return {
        "Background Stat Bonus": "CON",
        "Contact": "Wasteland",
        "Proficiencies": [
            {
                "choice": [
                    "intimidation",
                    "survival"
                ]
            },
            "Land Vehicles",
            "Improvised Weapons",
            {
                "extra": 2
            }
        ],
        "Feats": [
            {
                "Name": "Scrapsmith (Free Feat)",
                "Info": "Reduce, reuse, recycle. In the wastelands, you need to make the most of whatever you can get your hands on. You’ve become an expert at salvaging scrap metal and using it to build cheap homemade alternatives to many forged products. You have access to a new resource, called Scrap. At the end of a long rest, your Scrap is set to an amount equal to your proficiency bonus + your INT modifier. As an action, you can spend scrap points to assemble temporary items that last for 10 minutes, before they fall apart and become useless. You can also dismantle items you find as an action to gain additional scrap points. You can consult the table below to determine the requirements for constructing/dismantling things. Any items that require Contacts: Wasteland cost half as many scrap points to build."
            },
            {
                "Name": "Mad Bomber",
                "Info": "You never bring a knife to a bomb fight. You can now construct and scrap grenades as part of your Scrapsmith feat. Building a grenade costs 4 Scrap and deconstructing one yields 2."
            },
            {
                "Name": "Automechanic",
                "Info": "In the wastes, a vehicle can be your transport, your home, and your fortress. Usually it needs some work to be all three. You can construct vehicle upgrades using your scrapsmith feat. Doing so costs 10 Scrap, and requires that you spend 3 turns working on the chosen vehicle to perform the upgrade. The upgrade is automatically removed at the end of the 10 minute time period."
            },
            {
                "Name": "Road Warrior",
                "Info": "Sometimes, ending a car chase requires dramatic maneuvers. You can use your bonus action to pilot a vehicle or starship and you don’t have to make an athletics check to unsafely ride a vehicle (this does not include getting shoved off a vehicle by another creature or obstacle)."
            },
            {
                "Name": "Riot",
                "Info": "You know how to spur people into action. Violent, bloody action. As an action, you shout out, motivating any creatures of your choosing that can hear you within 20ft of you to move up to half their movement speed without taking opportunity attacks. You can use this feature once per short or long rest."
            },
            {
                "Name": "Fearmonger",
                "Info": "You know that fear is a weapon as strong as any gun. As a bonus action, you can make an intimidation check. A creature you choose who can see you must then make a Wisdom saving throw against a DC set by your intimidation check, becoming frightened for 1 minute on a failure. The target creature can repeat the saving throw at the end of their turns to end the effect early and whenever the target creature succeeds the save, they will become immune to this feature for an hour. Also, when you hit a frightened enemy with an attack, you deal an extra 1d4 damage."
            },
        ],
    };
}

function getMutantDetails() {
    return {
        "Background Stat Bonus": "WIS",
        "Contact": "Mutant",
        "Proficiencies": [
            {
                "extra": 1
            }
        ],
        "Feats": [
            {
                "Name": "Basic Mutation (Free Feat)",
                "Info": "Your body is unusual, mutant. You may choose a single biomod. This biomod is permanently installed into your character and doesn’t cost money or take up a slot. Whenever you install a biomod, you may select an additional skill proficiency. Whenever you uninstall a biomod, you must select one of your proficiencies to be removed. This includes the biomod provided by this feat."
            },
            {
                "Name": "Necrophage",
                "Info": "Your body has new hungers, strong hungers. You can spend both your action and bonus action on the same turn to consume the corpse of a non-Construct creature that is size small or larger. When you do, all attacks against you have advantage until the beginning or your next turn, as you are focused on consuming the corpse, but you immediately gain the benefits of a short rest. You can use this feature once per long rest."
            },
            {
                "Name": "Biodiversity",
                "Info": "Your body’s capacity for mutations expands. You gain two extra body modification slots, which can only be used for biomods."
            },
            {
                "Name": "Shapeshifter",
                "Info": "You can transform between your monstrous mutant form and a more innocuous form. You no longer gain the effects of any of your monstrous mutations (any mutations that apply an effect that requires you to consume more rations during a long rest will still apply that effect, but none of their other effects) while in your normal form; instead, you now resemble a normal member of your chosen race and can easily blend in with normal society, taking no penalties from your monstrous biomods. As a bonus action, you can transform into your mutant form, which grants you all of the benefits of all of your biomods, as well as a number of temporary hit points equal to your level plus your CON modifier, which are lost when the transformation reverts. The transformation will last up to an hour, or until you transform back as an action, and can be performed once per short or long rest."
            },
            {
                "Name": "Freakshow",
                "Info": "You wear your mutations with pride. For every monstrous biomod you have, you may add a +1 bonus to Intimidation and Athletics checks. If you have the Shapeshifter feat, you only gain these benefits while in your mutant form."
            },
            {
                "Name": "Xenosympathy",
                "Info": "You are sometimes more beast than man, and creatures of the system recognize that. Whenever a beast or mutant attempts to attack you, it must make a Wisdom saving throw against your Wisdom DC. On a failure, it must choose a different target for the attack, if possible. A creature with an Intelligence higher than 6 automatically passes. Once a creature passes the save, it becomes immune to this feat for 1 hour."
            },
        ],
    };
}

function getNetkidDetails() {
    return {
        "Background Stat Bonus": "INT",
        "Contact": "Net",
        "Proficiencies": [
            "technology",
            {
                "extra": 4
            }
        ],
        "Feats": [
            {
                "Name": "Brainshield (Free Feat)",
                "Info": "You know some tricks to stay safe when using a neural interface. You gain a pool of HP equal to 4 times your Intelligence modifier. Whenever you take damage from cybercombat, the damage is subtracted from this HP pool before your actual HP or Temporary HP. The HP pool is fully replenished whenever you take a long rest."
            },
            {
                "Name": "Extra Slots",
                "Info": "Custom modifications allow you to bring more hardware to cybercombat. Any personal computer you own has an additional slot to install a burn card and an additional slot to install a neural interface or phylactery."
            },
            {
                "Name": "Datamind",
                "Info": "You’ve dug through enough information infrastructure to know how to make the most of the data you research. The bonus to skill or tool checks that you gain from searching the starnet with a netphone or personal computer is increased to +2, and any proficiency you gain from the skill chip cybertech is instead upgraded to an expertise."
            },
            {
                "Name": "Safe Cyber",
                "Info": "Extended use of neural interfaces has allowed your body to adapt to cybernetic implant controllers. You gain two additional body modification slots that can only be used to install cybertech."
            },
            {
                "Name": "Master Illusionist",
                "Info": "You’ve explored more simulated realities than you can count, and now you’ve got a discerning eye for holograms and 3D simulations. You can add a +2 bonus to perception and investigation checks to discern holograms from reality. In addition, any time you deploy a gadget that produces a hologram, such as the holoprojector or the holomask, the produced hologram can be one size larger, can produce sounds of your choosing, and can operate outside of your direct line of sight (as long as it remains in range) using tiny hologram-projecting drones. If you attempt to reproduce the voice of a particular creature, you must acquire a 1-minute recording of its voice to synthesize the speech patterns."
            },
            {
                "Name": "Brainbunker",
                "Info": "Your mental preparations have kept your neurons safe from undue tampering. Whenever you take psychic damage, you can choose to allow that damage to be dealt to the HP pool provided by the Brainshield feat instead. If the damage reduces the pool to zero, any remaining damage is dealt to your HP. In addition, while you have more than 0 HP in the pool, you have advantage on saving throws against being frightened or charmed."
            },
        ],
    };
}

function getAcolyteDetails() {
    return {
        "Background Stat Bonus": "WIS",
        "Contact": "Religion",
        "Proficiencies": [
            "Religion",
            {
                "extra": 3
            }
        ],
        "Feats": [
            {
                "Name": "Ceremonies (Free Feat)",
                "Info": "You can perform ceremonies that prepare yourself and your flock for the trials ahead of you. Whenever you take a long rest, you can choose one of the options below. A creature can only gain the benefits of a single ceremony at a time." +
                "<dl><dt>Bonding Ceremony:</dt>" +
                "<dd>You link two willing creatures, either in matrimony or as brothers-in-arms. For the next 24 hours, the two creatures gain a +2 bonus to their AC while they are within 20ft of each other.</dd>" +
                "\n<dt>Meditation:</dt>" +
                "<dd>You spend some time in contemplation or prayer, gaining a better understanding of yourself. Select a saving throw. For the next 24 hours, you gain a +2 bonus to all saving throws of that type. You can also choose a number of creatures equal to your Wisdom modifier who are willing to join you, who receive a +1 bonus to the same saving throw for the duration.</dd>" +
                "\n<dt>Feast:</dt>" +
                "<dd>You spread hope in a celebration of excess. You, and any creatures who choose to join you must consume an additional ration of food. Those who do gain a number of temporary hit points equal to your Wisdom modifier and advantage on Wisdom-based saving throws for the next 24 hours. A creature that cannot eat cannot gain the benefits of this ceremony.</dd></dl>"
            },
            {
                "Name": "Preacher",
                "Info": "People respect your wisdom, and are entranced by your oratory skills. Whenever you would make a charisma-based ability check, you can use your wisdom modifier in place of your charisma modifier. You also have advantage on any such checks that are targeted against creatures who share your faith/spiritual beliefs."
            },
            {
                "Name": "Occult Rituals",
                "Info": "You gain access to new options for whenever you use the Ceremonies feat." +
                "<dl><dt>Divination:</dt>" +
                "<dd>You look for signs of the future, and pray it turns out in your favor. When you finish a long rest, roll two d20s and record the numbers rolled. You can replace any attack roll, saving throw, or ability check made by you or a creature that you can see with one of these foretelling rolls. You must choose to do so before the roll, and you can replace a roll in this way only once per turn. Each foretelling roll can be used only once. When you finish a long rest, you lose any unused foretelling rolls.</dd>" +
                "\n<dt>Scarification:</dt>" +
                "<dd>Ritual self-harm, used to steel oneself from evil and exorcize sin. When you finish the long rest over which this ritual was performed, you or a willing creature of your choosing takes an amount of damage equal to twice their level, which cannot be reduced in any way. The target creature then can select a single damage type which they will then be resistant to for 24 hours.</dd>" +
                "\n<dt>Zealous Chants:</dt>" +
                "<dd>Chants and war-songs that inspire the listeners to righteous violence. When you perform this ceremony, a number of creatures you choose, up to your Wisdom modifier, gain a bonus of 10ft to their movement speed and deal an additional +1 damage whenever they hit a creature with an attack.</dd></dl>"
            },
            {
                "Name": "Excommunication",
                "Info": "As a bonus action, you can declare a creature an enemy of your faith. When you do, you must select a creature that can hear you within 90ft of you. It must make a Wisdom Saving Throw against your Wisdom DC. On a failure, for the next minute all attacks against the chosen creature are made at advantage, and deal an extra 1 damage on a hit. The creature can reattempt the saving throw at the end of its turn to end the effects early. You can use this feature 3 times per long rest, and only one creature can be the target of your excommunication at one time."
            },
            {
                "Name": "Holy Implements",
                "Info": "You have tools and gadgets that you wield to serve your faith. Gadgets use your Wisdom modifier wherever you would normally use your Intelligence modifier, and your maximum battery is likewise determined by your Wisdom instead of Intelligence."
            },
            {
                "Name": "Leap of Faith",
                "Info": "Sometimes, you must trust your faith will be rewarded. Before making an ability check, attack roll, or saving throw, you can choose to take a leap of faith. Doing so replaces the roll you would have made with a flat 1d20 roll with no modifiers. On an 11 or higher, you may resolve the original roll as if you had rolled a critical success, otherwise the original roll becomes a critical failure. You may use this feature a number of times equal to your Wisdom modifier per long rest."
            },
        ],
    };
}