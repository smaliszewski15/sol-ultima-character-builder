function getRacesList() {
    return {
        "races": [
            "Human",
            "Unaga",
            "Anakti",
            "Morphorm",
            "Serreket",
            "Tolgut",
            "Senalus",
            "Burakh",
            "Venali",
            "Nouranu",
            "Synthetic",
            "Sprigg",
            "Kalkiti",
            "Poriq",
            "Einheri",
            "Mozz'Wani",
            "Cruscarrans",
            "Terrans"
        ]
    };
}

function getRaceInfo(name) {
    switch (name) {
        case "Human":
            return getHumanDetails();
        case "Unaga":
            return getUnagaDetails();
        case "Anakti":
            return getAnaktiDetails();
        case "Morphorm":
            return getMorphormDetails();
        case "Serreket":
            return getSerreketDetails();
        case "Tolgut":
            return getTolgutDetails();
        case "Senalus":
            return getSenalusDetails();
        case "Burakh":
            return getBurakhDetails();
        case "Venali":
            return getVenaliDetails();
        case "Nouranu":
            return getNouranuDetails();
        case "Synthetic":
            return getSyntheticDetails();
        case "Sprigg":
            return getSpriggDetails();
        case "Kalkiti":
            return getKalkitiDetails();
        case "Poriq":
            return getPoriqDetails();
        case "Einheri":
            return getEinheriDetails();
        case "Mozz'Wani":
            return getMozzWaniDetails();
        case "Cruscarrans":
            return getCruscarransDetails();
        case "Terrans":
            return getTerranDetails();
    }
}

function getHumanDetails() {
    return {
        "Size": "Medium",
        "Speed": {
            "Walk": "30"
        },
        "Racial Stat Bonus": "CON",
        "Feats": [
            {
                "Name": "Second Wind (Free Feat)",
                "Info": "Humans possess a strong flight or fight reflex, allowing them to overcome tremendous pain in terrible situations. As a bonus action, you may immediately regain 1d8+CON hit points, and you may ignore the effects of exhaustion until the beginning of your next turn. You may use this feat a number of times equal to your wisdom modifier, and regain all uses on a long rest."
            },
            {
                "Name": "People Pleaser",
                "Info": "Humans possess a natural instinct to read social situations, and a natural desire to impress those around them. At any time, you may make an insight check against the passive deception of someone you can see. On a success, you immediately learn what course of action would earn you the respect or admiration of that person, and if you successfully perform the action, you will have advantage on the next Charisma-based ability check you make against that creature. You may use this feature once per short or long rest."
            },
            {
                "Name": "Certain Set of Skills",
                "Info": "Human brains adapt to new information quickly, allowing them to learn an assortment of skills in a short period of time. You gain proficiency in three skills of your choice."
            },
            {
                "Name": "Runner’s High",
                "Info": "A rush of adrenaline can clear the mind, making the path to success equally clear. When you use your Second Wind feat, you may also add 1d4 to any ability checks, saving throws, and attack rolls you make until the beginning of your next turn."
            },
            {
                "Name": "Bad Feeling About This",
                "Info": "Pattern recognition helps humans quickly identify a bad situation. You have advantage on initiative rolls, and cannot be surprised while you are conscious."
            },
            {
                "Name": "Beyond Your Limits",
                "Info": "When you fail an ability check or saving throw that uses your strength, constitution, or dexterity, you may choose to change the roll to a 20. When you do so, immediately gain a point of exhaustion."
            },
        ]
    };
}

function getUnagaDetails() {
    return {
        "Size": "Medium",
        "Speed": {
            "Walk": "30"
        },
        "Racial Stat Bonus": "DEX",
        "Feats": [
            {
                "Name": "Waterborne (Free Feat)",
                "Info": "Unaga cannot breathe air, and require an aquarespirator to breathe above water. However, they are accustomed to the dark depths of the sea. You can breathe underwater, and have darkvision out to 60ft. You also gain a swim speed of 30ft."
            },
            {
                "Name": "Live Wire",
                "Info": "Unaga can charge their bodies with electricity, which they can wield offensively and defensively. When you hit an enemy with a melee attack, you can deal an additional 1d4 electric damage. When an enemy hits you with a melee attack, you can spend a reaction to deal 1d4 electric damage to your attacker."
            },
            {
                "Name": "Jumpstart",
                "Info": "Unaga have learned how to use their bioelectric energy to charge electronic systems. As a bonus action, you can immediately restore an expended battery charge for yourself or an ally you can touch. While inside a ship, you can use a bonus action to immediately replenish an expended energy point. You may do this a number of times equal to your wisdom modifier, and regain all spent uses on a long rest."
            },
            {
                "Name": "Electroreception",
                "Info": "Some unaga possess a finely-tuned sense of electrical fields around them. You can detect electrical devices and living beings within 15ft of you, even if you cannot see them. Your ability to perceive electrical currents gives you a +2 to tech checks and tool checks performed on electrical devices within that range."
            },
            {
                "Name": "Slither",
                "Info": "Unaga possess slender, snake-like bodies and flexible bones, making them comfortable in tight spaces. You suffer no penalties when squeezing into spaces smaller than yourself, and you can squeeze into a space that is two sizes smaller than yourself. You also suffer no movement penalty for being prone."
            },
            {
                "Name": "Maneater",
                "Info": "Skilled unaga blend teeth and blades into a flurry of damage. Your teeth count as natural weapons, using your dexterity or strength modifier, which deal 1d6 piercing damage on a hit. You can also make a bite attack as a bonus action. When you perform a bite attack in this way, you gain a number of temporary hit points equal to the piercing damage dealt. You can perform this attack a number of times equal to your wisdom modifier, and regain all spent uses on long rest."
            },
        ]
    };
}

function getAnaktiDetails() {
    return {
        "Size": "Medium",
        "Speed": {
            "Walk": "30"
        },
        "Racial Stat Bonus": "DEX",
        "Feats": [
            {
                "Name": "Void Living (Free Feat)",
                "Info": "Anakti can survive the harsh void of space. You do not need to breathe, and your exoskeleton protects you from the crushing pressure of space. You cannot digest food, and instead must eat metal to survive. In addition, anakti cannot speak, and instead can telepathically communicate with any humanoids within 60ft."
            },
            {
                "Name": "Web Weaver",
                "Info": "Anakti produce a natural silk, which contains a strong adhesive. As an action you can produce a length of silk rope. As part of that action, you can attach that rope to a surface or creature. You cannot produce more than 50ft of rope per long rest."
            },
            {
                "Name": "Quadridextrous",
                "Info": "Anakti possess 4 arms, and you are adept at using items in all of them. You have 2 additional limbs which each can carry an item or light weapon.You can use a single item in these hands as a bonus action. If you use this bonus action to make an attack with a weapon held in one of those arms, treat the attack as an off-hand weapon attack(do not add your ability modifier to the roll)."
            },
            {
                "Name": "Acid Reflux",
                "Info": "Anakti acid spit is extremely damaging to metal objects, and it doesn’t feel great on your skin either. You can spit acid as a natural ranged weapon with a range of 10ft/20ft, which deals 1d6+DEX acid damage. If the target is an object or construct made of metal, the attack deals double the damage rolled."
            },
            {
                "Name": "Rockhopper",
                "Info": "The powerful legs of the anakti allow them to leap between asteroids with speed and accuracy. Those legs continue to be effective inside gravity fields as well. Your jump distance is doubled, and you can spend a bonus action to immediately jump to a point within 15ft of you without provoking opportunity attacks."
            },
            {
                "Name": "Neural Network",
                "Info": "Telepathic bonds link anakti together, allowing them to work together with unparalleled cohesion. As an action, you can form a telepathic bond with a number of creatures within 60ft of you equal to your wisdom modifier. Any creatures linked to you can communicate with you and each other telepathically, and gain the ability to see through each other’s senses. Also, you may use a bonus action to Help any creatures bonded to you, at any range. The bond ends after 1 hour, or if a creature travels more than 1 mile from you. You may form this bond once per long rest."
            },
        ]
    };
}

function getMorphormDetails() {
    return {
        "Size": "Medium",
        "Speed": {
            "Walk": "30"
        },
        "Racial Stat Bonus": "WIS",
        "Feats": [
            {
                "Name": "Shifting Form (Free Feat)",
                "Info": "Morphorms can alter their biology on the fly to better suit their environment. You gain a number of Bio Points equal to your Wisdom modifier + your proficiency bonus. As a bonus action, you can spend these points to change your body to a different form. You can gain the benefits of only one form at a time, and you regain spent bio points on a long rest. If you have no bio points you can strain your body, changing your body as normal while taking 1d10 damage per point you would have spent. You start with the following forms:" +
                "<dl><dt>Aquatic Form</dt>" +
                "<dd>Your body grows gills and fins to better adapt to aquatic environments. You gain a swim speed of 30ft, and can breathe underwater.</dd>" +
                "\n<dt>Longstrider Form</dt>" +
                "<dd>Lengthened legs allow for rapid movement over difficult terrain. Your walk speed increases by 15ft and your movement is not affected by difficult terrain.</dd>" +
                "\n<dt>Resilient Form</dt>" +
                "<dd>A broadly defensive form that allows you to survive unexpected threats. Whenever you suffer damage, you may reduce the damage by 2 points.</dd>" +
                "\n<dt>Supersensory Form</dt>" +
                "<dd>Increased density of sensory cells allow you to perceive things that others couldn’t. Your enhanced senses give you 20ft of blindsight, and 60ft of darkvision. </dd></dl>"
                
            },
            {
                "Name": "Biopath",
                "Info": "Skilled morphorms can adapt not only their own biology, but those around them as well. You can spend an action to use the Shifting Form feature to grant another creature the benefits of a single form. The target must be an organic creature, and you must touch them to perform the action. For creatures you use this feature on, the effects last for 1 minute. If a form uses your wisdom modifier, it will apply your wisdom modifier when used on another creature. Constructs cannot be affected by this feature."
            },
            {
                "Name": "Healing Hands",
                "Info": "Morphorms can incite cellular growth to heal wounds at a touch. You may touch an organic creature and spend any number of bio points to heal their wounds. The amount healed is equal to 1d6+WIS, plus 1d6 for every additional bio point used. Constructs cannot be affected by this feature."
            },
            {
                "Name": "Doppelganger",
                "Info": "Most morphorms practice practical alterations to their forms, but some find tremendous value in aesthetic alterations as well. You can spend a bio point to change your appearance to that of another humanoid creature. You can appear to be a generic example of that race at any time, but you can touch a creature as you use this feature to replicate that creature’s appearance. This transformation is purely visual, and doesn’t affect your stats or abilities in any way, and lasts for 30 minutes. You may spend an additional bio point at any time during the transformation to extend the duration by 30 minutes."
            },
            {
                "Name": "Tactical Forms",
                "Info": "Morphorms that serve alongside mercenaries and soldiers will quickly learn how their abilities can be used in high-stakes situations. The following forms are added to your Shifting Form feature:" +
                "<dl><dt>Goliath Form</dt>" +
                "<dd>Enhanced cellular growth allows your body to grow in size and strength. Your size increases by one category, you may add your wisdom modifier to strength-based ability checks and saving throws, and you may add 1d4 damage to strength-based melee attacks.</dd>" +
                "\n<dt>Scout Form</dt>" +
                "<dd>Reduced body mass allows newly-grown wings to grant you limited flight. Your size decreases by one category and you gain a flight speed of 30ft. You can only use this flight speed within an atmosphere, and you cannot be carrying or wielding heavy armor or weapons while flying.</dd>" +
                "\n<dt>Assault Form</dt>" +
                "<dd>Ensure that you always have access to a weapon by growing your own. You grow horns, spikes, or claws which allow your unarmed attacks to do 1d6 slashing damage. Strengthened skin gives you a +1 bonus to your AC.</dd></dl>"
                
            },
            {
                "Name": "Abstract Forms",
                "Info": "Any morphorm can alter the basic architecture of their bodies but the most skilled can alter the more obtuse elements, manipulating hormones and nerves to produce forms that break the natural limitations of their bodies. The following forms are added to your Shifting Form feature:" +
                "<dl><dt>Amorphous Form</dt>" +
                "<dd>You streamline your body by completely removing your skeletal system. Your body becomes an ooze-like blob, which can change shape at will. You can squeeze into a space as small as one inch. Your limbs can stretch long distances, increasing your reach with melee weapons by 5 ft. and allowing you to pick up and interact with objects up to 15ft away from you.</dd>" +
                "\n<dt>Neuroconversion Form</dt>" +
                "<dd>Excess muscle mass is converted to neuron clusters, allowing for mental processing that rivals an AI. Add a bonus equal to your wisdom modifier to any attacks,  ability checks, or saving throws that rely on intelligence, wisdom, or charisma. Any strength-based ability checks and saving throws are reduced by the same amount.</dd>" +
                "\n<dt>Hyper Reflex Form</dt>" +
                "<dd>Activate your appendix, altered to produce large amounts of adrenaline. You may add your wisdom modifier to dexterity saving throws. Whenever you are attacked by a creature, you may use your reaction to impose disadvantage on the attack roll.</dd></dl>"
                
            },
        ]
    };
}

function getSerreketDetails() {
    return {
        "Size": "Small",
        "Speed": {
            "Walk": "30"
        },
        "Racial Stat Bonus": "DEX",
        "Feats": [
            {
                "Name": "Cave Runner (Free Feat)",
                "Info": "Serreket are well adjusted to dark and cramped environments. You have darkvision out to a range of 60ft, and suffer no penalties from squeezing into spaces smaller than yourself."
            },
            {
                "Name": "Adept Flier",
                "Info": "Serreket who train in aerial maneuvers can prove to be agile fliers. You gain a flight speed of 30ft. You cannot use this feature while carrying heavy weapons or heavy/medium armor, or while in a location which lacks an atmosphere."
            },
            {
                "Name": "Pack Tactics",
                "Info": "Serreket know that teamwork is the key to success. You have advantage on an attack roll against a creature if at least one of your allies is within 5 feet of the creature and the ally isn't incapacitated."
            },
            {
                "Name": "Warning",
                "Info": "The first thing young serreket are taught is to look out for their pack mates. When an ally you can see within 30ft of you fails a saving throw, you can use your reaction to warn them of the incoming threat, allowing them to add a d6 to the roll, potentially turning the failure into a success. You can use this feature a number of times equal to your charisma modifier. You regain all spent uses on a long rest."
            },
            {
                "Name": "Shadow Skulker",
                "Info": "Serreket are skilled at dodging detection. You can try to hide when you are lightly obscured from the creature from which you are hiding. When you are hidden from a creature and miss it with a ranged weapon attack, making the attack doesn't reveal your position."
            },
            {
                "Name": "Tinkerer",
                "Info": "Urban serreket will often have to make the most of limited resources, and that limitation can lead to the creation of many ingenious tools. You can spend 10 minutes to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 10 minutes repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. When you create a device, choose one of the following options:" +
                "\n<dl><dt>Chirper</dt>" +
                "<dd>A small speaker in a spherical casing. As an action, you can activate the device, at which point it plays either a recording you captured while creating the device, or a simple noise like birdsong or creaking metal. The sound can be heard up to 45ft away. As part of the action of activating it, you can also throw it to a point you can see within 60ft. It will continue to play the noise for up to 1 minute.</dd>" +
                "\n<dt>Flashbug</dt>" +
                "<dd>A simple drone with a small onboard light. When activated with your action, it will take flight and begin to glow faintly. It hovers directly over your shoulder, following you at all times unless you command it to move to a point you can see within 30ft of you, where it will remain until commanded to return to you. When you activate it choose one of the following: it produces 30ft of dim light or it produces 30ft of bright light and an additional 30ft of dim light.</dd>" +
                "\n<dt>Buzzwarn</dt>" +
                "<dd>A small cylinder with hooked wires attached across it. When deployed as an action, you can spread the hooked wires across a 10ft cube centered on the device. If a creature steps into the area, the device creates a loud noise which can be heard up to 300ft away. The device can be disarmed using a tech check against your intelligence DC.</dd>" +
                "\n<dt>Longclaw</dt>" +
                "<dd>A small tool worn like a glove, with several long claw-like spikes implanted on the fingers. The claws are hooked to aid in climbing, granting any creature that wears them a climb speed equal to their walk speed, provided they aren’t wearing heavy armor. The claws are also quite sharp, and can be wielded as a weapon using the same stats as a knife.</dd>" +
                "\n<dt>Improvised Tools</dt>" +
                "<dd>Improvised tools, chosen from the list of professional tools. You can only create tools that you have proficiency with.</dd></dl>"               
            },
        ]
    };
}

function getTolgutDetails() {
    return {
        "Size": "Small",
        "Speed": {
            "Walk": "15"
        },
        "Racial Stat Bonus": "DEX",
        "Feats": [
            {
                "Name": "Shell Walker (Free Feat)",
                "Info": "Tolgut are soft and vulnerable, but when they find a shell to house their bodies, they are well-protected and imposing. You cannot wear light or medium armors, but while wearing heavy armor your size becomes medium, and you gain a walking speed of 30ft. You may spend 5 minutes to construct an improvised shell armor out of junk in your environment, such as rocks and scrap metal. This armor is heavy, has an AC of 16, and reverts back to being junk when you unequip it."
            },
            {
                "Name": "Ironshell",
                "Info": "You’ve mastered the creation of armored shells. When you create an improvised shell armor, the armor has an AC of 17, and you gain a number of temporary hit points equal to 2d8+INT. You can spend 5 minutes fixing your shell to regain the temporary hit points."
            },
            {
                "Name": "Gadget Integration",
                "Info": "Tolgut often customize their shells with various devices, which they manipulate as effortlessly as a limb. As an action, you can integrate a single gadget into your body, which you can use once per turn as a bonus action.Your integrated gadget can be concealed inside your body, and can’t be removed against your will. You do not need to be in a shell to use this feature."
            },
            {
                "Name": "Vehicle Integration",
                "Info": "Tolgut can integrate themselves with the systems of a vehicle, allowing them to control it like an extension of their body. As an action, you can integrate into a vehicle’s systems. When you do so, you gain the following benefits: You may add your proficiency bonus to any checks or saving throws made using the vehicle, even if you don’t have proficiency with that vehicle type. If you already have vehicle proficiency, you can double your proficiency bonus for those rolls. You can also add your proficiency bonus to damage rolls you make using weapons mounted on the vehicle. Your movement speed is reduced to 0 until you use an action to detach from the vehicle. If the vehicle is reduced to 0 HP, you immediately detach from it."
            },
            {
                "Name": "Extra Shellular Activity",
                "Info": "Some Tolgut recognize the value of operating outside their shells. When you are not wearing armor, you gain a walk speed of 30ft, and have advantage on dexterity-based ability checks and saving throws."
            },
            {
                "Name": "Needle in a Landfill",
                "Info": "It’s difficult for Tolgut to escape detection, but many have practiced the ability to hide in plain sight. When you are wearing improvised shell armor, you may use an action to hide inside your shell. While you are hidden in this way, you appear to any observer as a pile of whatever items the shell is made of (rocks, scrap metal, etc.). If a creature chooses to search the pile, you must succeed on a stealth check contested against the searcher’s perception check. If you succeed, the searcher believes the shell is a mundane pile of objects."
            },
        ]
    };
}

function getSenalusDetails() {
    return {
        "Size": "Medium",
        "Speed": {
            "Walk": "30"
        },
        "Racial Stat Bonus": "CHA",
        "Feats": [
            {
                "Name": "Social Chameleon (Free Feat)",
                "Info": "Senalus use their color-changing skin to augment their social skills, using different colors and patterns to accentuate their speech. You gain a number of Charm points equal to half your Wisdom score + your Proficiency Bonus. Whenever you make a charisma-based ability check or saving throw, you can spend points to add a one-to-one bonus to the roll. You can add this bonus after you roll, but before the outcome is determined. You regain all spent points on a long rest. In addition, you can also hold your breath for up to one hour and gain a swim speed of 30ft."
            },
            {
                "Name": "Active Camo",
                "Info": "Senalus special forces are trained to recolor their bodies to blend in with the environment. You can attempt to hide anywhere, even if you are not obscured. If you move, you will no longer be hidden."
            },
            {
                "Name": "Frogman",
                "Info": "Flexible limbs and strong legs make Senalus skilled at tasks that require dexterity and agility. You can now add your Charm points to any dexterity-based ability checks or saving throws. In addition, you gain a climbing speed of 30ft, and can climb without using your hands thanks to the adhesive pads on your feet."
            },
            {
                "Name": "Slippery",
                "Info": "Slippery skin and adhesive hands make senalus fearsome brawlers. You have advantage on any checks made to grapple a target, or to escape a grapple."
            },
            {
                "Name": "Sonorous War Cry",
                "Info": "The strong vocal chords of the senalus make them amazing singers, and inspiring speakers. As a bonus action, you can spend any amount of your Charm points to grant any creatures you choose who are within 30ft of you and who can hear you an equivalent amount of temporary hit points. A creature loses any temp HP they received from this feature when they next take a short or long rest."
            },
            {
                "Name": "Charming",
                "Info": "You can now regain all spent Charm points on a short rest. Once you do, you cannot use this feature again until you take a long rest."
            },
        ]
    };
}

function getBurakhDetails() {
    return {
        "Size": "Medium",
        "Speed": {
            "Walk": "30"
        },
        "Racial Stat Bonus": "STR",
        "Feats": [
            {
                "Name": "Battle-Rage (Free Feat)",
                "Info": "When threatened, Burakh call upon the strength of ancestral warriors to aid them. As a bonus action, you may enter a rage. While raging, you gain resistance to all forms of damage except psychic. This rage lasts for 1 minute. You may use this feature once per long rest."
            },
            {
                "Name": "Empowering Rage",
                "Info": "A raging Burakh is an unstoppable force. While you are raging, you make all strength-based ability checks and saving throws at advantage and you may add your proficiency bonus to any damage rolls which already add your strength modifier."
            },
            {
                "Name": "Honorable Challenge",
                "Info": "In the search for glory, Burakhs will often demand a fair fight. As an action, you can challenge a creature to a duel. When you do, you may choose a creature within 30ft of you that you can see. The creature must make a wisdom saving throw against your charisma DC. On a failure, any attacks it makes against creatures other than you are made at disadvantage. The effect lasts for 1 minute, or until the target is the victim of a hostile action from a creature other than you."
            },
            {
                "Name": "Strong Build",
                "Info": "Burakhs have powerful muscles and strong skeletons which allow them to lift objects far larger than themselves. You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift. You also may attempt to grapple a creature that is up to 2 sizes larger than yourself."
            },
            {
                "Name": "Intimidating Stature",
                "Info": "Burakhs are known throughout the system for their fearsome combat skills, and their willingness to follow through on threats. You gain proficiency in intimidation, or expertise if you already have it."
            },
            {
                "Name": "Resilience",
                "Info": "Burakhs must survive threats of all types while on their pilgrimage. You may gain proficiency in two saving throws of your choosing."
            },
        ]
    };
}

function getVenaliDetails() {
    return {
        "Size": "Medium",
        "Speed": {
            "Walk": "30"
        },
        "Racial Stat Bonus": "WIS",
        "Feats": [
            {
                "Name": "Buoyant (Free Feat)",
                "Info": "You have fine control over your body’s buoyancy. You may use your reaction when falling to become more buoyant, reducing your rate of descent to 30ft per round. You are immune to fall damage while falling in this way. Also, your extra lungs grant you the ability to hold your breath for up to 30 minutes at a time."
            },
            {
                "Name": "Launch",
                "Info": "Once per short or long rest, you may spend a bonus action to channel the air in your lungs to produce tremendous thrust. When you do, you gain a flight speed of 60ft until the end of your turn."
            },
            {
                "Name": "Gale",
                "Info": "As an action, you can expel tremendous winds in a 15ft cone originating from you. Any creatures within the cone must make a strength save against your Wisdom DC. On a fail, they are knocked back 15ft away from you. If they hit a solid object, they will take 1d10 bludgeoning damage per 5 ft. traveled. If they hit a creature, the creature can make a dex save to avoid the impact. On a fail, both creatures take the impact damage."
            },
            {
                "Name": "Animal Husbandry",
                "Info": "You have an instinctive understanding of the needs of wildlife and beasts, and they have an easier time understanding yours. You can automatically understand what, if anything, a beast is trying to communicate to you, and it has an easier time understanding what you try to tell it. This does not make a beast capable of communicating complex concepts, but you could learn simple concepts, such as whether it is hungry, defending its territory, or trying to get you to follow it.."
            },
            {
                "Name": "Light Step",
                "Info": "The floaty, skip-like walk of the Venali allows them to move unhindered by terrestrial limitations. You are immune to difficult terrain, you have advantage on sound-based stealth checks, and you cannot trigger pressure-sensitive floor traps."
            },
            {
                "Name": "Sound Off",
                "Info": "Proper control of a venali’s lungs can allow them to produce a variety of sounds, including the ability to recreate common brass and woodwind instruments. You can also make people’s ears bleed. As an action, you can release an ear-splitting screech. Any creatures that can hear you within 10ft of you must make a constitution saving throw against your wisdom DC. On a failure they take 2d10 thunder damage and are deafened for 1 minute. On a successful save they receive half damage and aren’t deafened. A creature deafened by this ability can repeat the saving throw at the end of its turn. On a successful save, the creature takes half damage and suffers no additional effects. You may use this feature twice per long rest. In addition, you always count as if you have a musical instrument."
            },
        ]
    };
}

function getNouranuDetails() {
    return {
        "Size": "Medium",
        "Speed": {
            "Walk": "30"
        },
        "Racial Stat Bonus": "STR",
        "Feats": [
            {
                "Name": "Quillback (Free Feat)",
                "Info": "Nouranu are covered in sharp quills, which can either be flared in an aggressive position, or retracted in a defensive position. As a bonus action, you can switch between sharp stance and blunt stance. In sharp stance, your quills are flared, and can be used as natural weapons, causing your unarmed attacks to deal 1d4 piercing damage. While in this form, you may also use your reaction upon being hit by a melee attacker within5 ft. of you to immediately make an unarmed attack against them. In blunt stance, your quills are pulled back, forming a crude shell that protects your vitals, granting +1 AC."
            },
            {
                "Name": "Venom Sting",
                "Info": "Some nouranu develop venomous quills which poison and debilitate their enemies. While in sharp stance, your unarmed attacks deal an additional 1d4 poison damage. While in blunt stance, you have resistance to poison damage."
            },
            {
                "Name": "Dune Worm",
                "Info": "While the nouranu no longer blend in with the yellow sands of Triniset, their ability to hide and burrow through the earth remains valuable. You gain a burrow speed of 15ft, and tremorsense of 10ft. You may only use this burrow speed to dig through loose earth or sand."
            },
            {
                "Name": "Needler",
                "Info": "Nouranu quills can detach from the skin and fly a short distance to their target. As an action, you may pick a point within 30ft of you. All creatures within 10ft of the point you select must make a dexterity saving throw against your wisdom DC. On a fail, they take damage equal to the damage of one of your unarmed attacks * 3, or half as much on a success. You may use this feature three times per long rest."
            },
            {
                "Name": "Heatstroke",
                "Info": "Nouranu are well adapted to dealing with intense heat. While in sharp form, you may add a bonus to any damage rolls that deal radiant or fire damage equal to your wisdom modifier. In blunt form, you are resistant to fire and radiant damage."
            },
            {
                "Name": "Striking Appearance",
                "Info": "Nouranu can flex their quills to intimidate their foes. You gain proficiency in intimidation, or expertise if you already have it from another source."
            },
        ]
    };
}

function getSyntheticDetails() {
    return {
        "Size": "Medium",
        "Speed": {
            "Walk": "30"
        },
        "Racial Stat Bonus": "INT",
        "Feats": [
            {
                "Name": "Machine Form (Free Feat)",
                "Info": "Your robotic body causes your creature type to be ‘construct’, instead of ‘humanoid’. You do not require food, air, or sleep. You can survive in the vacuum of space and are immune to effects that would require you to inhale a gas. Whenever you take a long rest, instead of sleeping, you remain in a low-power recharging state which lasts 4 hours, during which time you remain conscious but immobile. You are immune to poison damage, and the poisoned condition. You also do not benefit from any healing sources that an organic creature would. Instead, any creature (including yourself) can use their action to make a DC15 mechanical tool’s check to repair your body, allowing you to immediately spend one of your hit dice to heal the amount rolled + CON. In addition to all that bullshit, you may choose a body frame from the list below, a general description of your robotic body that affects your stats and capabilities." +
                        "\n<dt>Bipedal Frame</dt>" +
                        "<dd>A humanoid robotic frame, modified for a particular specialization. You start with a single piece of cybertech installed in your body.</dd>" +
                        "\n<dt>Hoverdrone Frame</dt>" +
                        "<dd>A small flying frame designed to scout areas or perform tasks in tight spaces. Your size becomes small, you gain a 30ft fly(hover) speed, and your walk speed becomes 5 ft. In addition, your max HP is reduced by 1, and when you level up, you subtract 1 from the amount of max HP you gain (minimum of 1). You do not have legs, and cannot benefit from cybertech that requires legs.</dd>" +
                        "\n<dt>Industrial Frame</dt>" +
                        "<dd>A stout and sturdy frame that navigates using wheels or treads, usually employed in industrial or maintenance roles. Your size can be small or medium, you choose when selecting this race. You gain a +1 bonus to your AC, proficiency in a tool of your choosing, and a +3 bonus to your maximum battery. However, your walk speed becomes 20ft, and you cannot jump.</dd></dl>"
            },
            {
                "Name": "Modular Frame",
                "Info": "Your body was designed to receive on-the-fly modifications. The maximum number of cybertech modifications you can have increases by 2, and you can install or uninstall a piece cybertech from your body over the course of 1 minute, without needing to use tools or make a roll."
            },
            {
                "Name": "Self-Repair Module",
                "Info": "Integrated repair tools allow you to maintain your body. Whenever you take damage, you can use your reaction to spend one of your hit dice and heal an amount of HP equal to the amount rolled + CON. You can also use this feature to heal yourself using your bonus action on your turn."
            },
            {
                "Name": "Armored Chassis",
                "Info": "When you are not wearing any armor, your AC is equal to 12 + DEX. When you put on armor, you can integrate it into your body. When you do, it becomes impossible to remove that armor against your will and you gain a +1 bonus to your AC."
            },
            {
                "Name": "High-Definition Scanner Array",
                "Info": "As a bonus action, you can activate enhanced sensors. When you do, you gain 60ft of blindsight for 1 minute, and gain a +1 bonus to perception and investigation checks for the duration. You can use this feature a number of times equal to half your proficiency bonus per long rest. In addition, your robotic mind records everything you see and hear. You can replay the recordings in your head, or upload them to a computer to be displayed to others."
            },
            {
                "Name": "Reliable Programming",
                "Info": "Your programming allows you to perform tasks with mechanical reliability. Whenever you roll a skill check that adds your proficiency bonus, you may treat a roll of 9 or less on the die as a 10."
            },
        ]
    };
}

function getSpriggDetails() {
    return {
        "Size": "Medium",
        "Speed": {
            "Walk": "30"
        },
        "Racial Stat Bonus": "WIS",
        "Feats": [
            {
                "Name": "Solar Powered (Free Feat)",
                "Info": "Being plants, Spriggs derive most of their essential nutrients from sunlight and minerals in the soil. If you are in a well-lit natural area, you do not need to consume rations when performing a long rest. You also can consume a ration as normal, something you can choose to do during a long rest regardless of whether or not you have access to the aforementioned conditions. Whenever you choose to eat rations during a long rest, your body processes the organic matter into a potent fertilizer, which grants you a number of temporary hit points equal to your proficiency bonus plus WIS."
            },
            {
                "Name": "Fruit of the Harvest",
                "Info": "The fertilizer your body produces is far more potent, becoming a universal formula for cell growth. Whenever you take a long rest in which you consume a ration, you can forgo the temporary hit points to instead acquire a number of doses of healing formula equal to your WIS. This can manifest as sweet sap or fruit that your body grows with the cell growth booster within it. You or another creature can use an action to either consume a dose or administer a dose to another creature they can touch. When a creature consumes a dose, they immediately regain an amount of lost hit points equal to 1d6 + your WIS. When you hit 5th level, the healing of the formula increases to 2d6 + WIS. This feature has no effect on constructs, and the doses you produce lose their healing properties after 24 hours."
            },
            {
                "Name": "Grasping Vines",
                "Info": "You can grow grasping vines from your limbs, which greatly increase your reach. For all purposes, your reach extends by 5 ft., including for determining the reach of melee attacks and distances at which you can interact with objects. In addition, you have advantage on checks made to grapple or shove an enemy."
            },
            {
                "Name": "Greenspeak",
                "Info": "You are fluent in greenspeak, a language of chemicals and pheromones used by plants to transfer information between themselves. You can use this feat to “speak” with plants that are near you. The information you can glean from such a conversation is limited by the senses and intelligence of the plant you speak with. For example, a blade of grass could only communicate simple concepts, like whether or not it has recently been stepped on and how heavy of a creature stepped on it. Conversely, more alien or animal-like plants could give you more detailed information, such as local geography or creatures. If a plant has an Intelligence score of 4 or higher, it can be convinced to perform simple tasks, limited by the physical capabilities of the plant, using Persuasion, Animal Handling, or Intimidation, as appropriate."
            },
            {
                "Name": "Earthbind",
                "Info": "As an action, you can send vines and roots to restrain your enemies. When you do, you can choose a point you can see within 60 feet of you that isn’t obstructed by full cover. All creatures within a 10 ft cube centered on that point must make a Strength saving throw against your Wisdom DC, and are restrained by vines and roots on a failure. Any flying or airborne creatures who fail the save are immediately dragged to the ground, taking fall damage accordingly. A creature restrained by the vines can repeat the save at the end of each of their turns to end the escape the vines, or the vines can be destroyed (AC12, HP 15, vulnerable to fire damage) to free the creature."
            },
            {
                "Name": "Ironbark",
                "Info": "Your bark grows hard and strong, when cared for. Whenever you would gain temporary hit points from the Solar Powered feature, you may add your proficiency bonus twice, instead of once, to the amount of temp HP you gain. You can recover this temp HP at any time by using your action to consume a ration."
            },
        ]
    };
}

function getKalkitiDetails() {
    return {
        "Size": "Medium",
        "Speed": {
            "Walk": "30"
        },
        "Racial Stat Bonus": "DEX",
        "Feats": [
            {
                "Name": "Got Claws (Free Feat)",
                "Info": "Kalkiti are known for their razor-sharp claws, which they can use to great effect in combat and exploration. Your unarmed strikes now deal 1d4 slashing damage, and you have a climbing speed of 30ft. In addition, you gain 60ft of darkvision."
            },
            {
                "Name": "Catlike Agility",
                "Info": "Kalkiti have a natural instinct for gymnastics and midair maneuvers. You gain proficiency in Acrobatics, and whenever you fall, the distance is reduced by 40ft when determining the amount of falling damage you receive."
            },
            {
                "Name": "Nose for Danger",
                "Info": "Kalkiti noses have a high density of olfactory receptors, giving them an extraordinarily strong sense of smell. Your supernaturally strong sense of smell grants you advantage on scent-based perception checks and allows you to easily identify most common scents. If you have proficiency in science, you can also identify chemicals by scent alone using a Science check, such as by checking a meal for poison. If you have a sample of a creature’s scent, such as an article of clothing, you can use your Survival skill to track that creature using scent alone."
            },
            {
                "Name": "Softpaw",
                "Info": "Kalkiti evolved from ambush predators, and are accordingly skilled at moving quietly. You gain proficiency in Stealth, and have advantage on any stealth checks you make to move quietly. In addition, you can squeeze into a space that is up to two sizes smaller than yourself."
            },
            {
                "Name": "Pounce",
                "Info": "As an action, you can send vines and roots to restrain your enemies. When you do, you can choose a point you can see within 60 feet of you that isn’t obstructed by full cover. All creatures within a 10 ft cube centered on that point must make a Strength saving throw against your Wisdom DC, and are restrained by vines and roots on a failure. Any flying or airborne creatures who fail the save are immediately dragged to the ground, taking fall damage accordingly. A creature restrained by the vines can repeat the save at the end of each of their turns to end the escape the vines, or the vines can be destroyed (AC12, HP 15, vulnerable to fire damage) to free the creature."
            },
            {
                "Name": "Feline Mobility",
                "Info": "Powerful sprinters, Kalkiti can move far faster than other races. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can't use it again until you move 0 feet on one of your turns."
            },
        ]
    };
}

function getPoriqDetails() {
    return {
        "Size": "Small",
        "Speed": {
            "Walk": "20"
        },
        "Racial Stat Bonus": "CON",
        "Feats": [
            {
                "Name": "Shellback (Free Feat)",
                "Info": "Poriq’s shells offer them protection and mobility while curled up. As a bonus action, you can curl up into your shell. When you do so, your movement speed increases to 40ft, and your AC gains a +2 bonus. However, while in your shell you cannot perform any actions except Dodge, Dash, or Disengage. You can exit your shell as a bonus action, losing both the benefits and penalties of the shell when you do so. In addition to your shell, you also gain darkvision of 60ft."
            },
            {
                "Name": "Striker",
                "Info": "Your shell is covered in sharp spikes, spikes which are quite painful when someone touches them with their face at high velocity. You may now take the Attack action while inside your shell, but may only make unarmed strikes when you do. If you are in your shell, your unarmed strikes deal 1d4 piercing damage, and if you move at least 15ft in a straight line before making an unarmed attack, the attack will deal an extra 1d4 damage if it hits. Also, whenever you are thrown by a creature while in your shell, you’ll deal your unarmed damage on impact."
            },
            {
                "Name": "Spot Weakness",
                "Info": "Poriq have a keen eye for structural weaknesses. As a bonus action, you can attempt to identify a weak point in the armor of a creature, vehicle, or object you can see within 90ft of you. Whenever you hit the marked target with an attack, the attack deals an extra 1d6 damage and ignores any resistances the creature normally has. If a creature you can see, and who can hear you, hits the marked target with an attack, you can use your reaction to call out the weakness, granting the attack the aforementioned bonuses. Only one creature can be marked in this way at a time, and the mark ends on its own after 10 minutes."
            },
            {
                "Name": "Advanced Engineering",
                "Info": "The brains of Poriq are hardwired for engineering. You immediately gain proficiency in 2 tools, chosen from the following list: weaponsmith’s tools, armorer’s tools, scavenger’s tools, splicer’s tools, mechanical tools, demolitions tools, and stoneworker’s tools. Whenever you make a tool check to which you add your proficiency bonus, you may add twice your proficiency bonus instead."
            },
            {
                "Name": "Stonewal",
                "Info": "Poriq have a deeply ingrained duck-and-cover instinct, which often saves them from hazards. Whenever you are forced to make a Dexterity saving throw to resist an effect that deals damage on a failure, or half as much on a success, you can use your reaction to immediately curl into your shell form, taking half damage on a failure and no damage on a success. You can also use this feature as a reaction whenever a creature hits you with an attack. When you do, the bonus AC is immediately applied to the triggering attack, potentially causing it to miss. You can use this feature a number of times equal to your WIS per short or long rest."
            },
            {
                "Name": "Deep Diver",
                "Info": "Poriq are well adapted to digging, and often don’t require tools to clear large amounts of soil in a short amount of time. As an action, you can dig through a 5 ft. cube of loose soil or sand, leaving an empty space behind. You can use this action multiple times to create pits, trenches, or tunnels. You also gain a burrow speed of 15ft, which you can use to burrow through loose soil or sand. You cannot use either of the effects of this feature to pass through solid rock or metal."
            },
        ]
    };
}

function getEinheriDetails() {
    return {
        "Size": "Medium",
        "Speed": {
            "Walk": "30"
        },
        "Racial Stat Bonus": "WIS",
        "Feats": [
            {
                "Name": "Crystal Diet (Free Feat)",
                "Info": "You do not need to eat. Instead, you must consume anifract to survive (see the narcotics list for more details ). Whenever you perform a long rest without consuming anifract, you take a point of exhaustion. However, you automatically succeed on the saving throw against the secondary effects of anifract. Once per week, while you are in an urban environment in Senal space, you can receive a ration of 5 doses of anifract for free."
            },
            {
                "Name": "Crystal Mind",
                "Info": "Heavy exposure to anifract can give some einheri a deeper connection to the psychic well of knowledge. While under the effects of anifract, whenever you make an ability check with a skill you gained proficiency in from taking anifract, you may add a 1d4 bonus to the roll."
            },
            {
                "Name": "Crystal Body",
                "Info": "Zealots of the Hegemony have learned to achieve a balance with the crystal growths that cover their bodies, and now so have you. Your maximum health decreases by an amount equal to twice your level and whenever you level up, the maximum health you gain is decreased by 2 (To a minimum of 1). In exchange, the crystal growths that cover your body grant you resistance to all forms of physical damage and radiant damage."
            },
            {
                "Name": "Crystal Shogun",
                "Info": "Einheri warriors spend long periods of time in meditation, drawing knowledge of combat, tactics, and warfare from the well of knowledge in the anima fractals. While under the primary effects of anifract, you may use your Wisdom modifier instead of Strength or Dexterity for attack and damage rolls with weapons you are proficient with, and you can add half your proficiency bonus, rounded down, to any damage rolls with weapons you are proficient with."
            },
            {
                "Name": "Well of Knowledge",
                "Info": "Large amounts of time spent in communion with anifract can allow Einheri to draw a wider amount of wisdom from their connection with anima fractals, granting them approximate knowledge of many things. While under the primary effects of anifract, if you make a skill check with a skill you are not proficient in, you can add half your proficiency bonus."
            },
            {
                "Name": "Chemical Connoisseur",
                "Info": "The bodies of Einheri are resilient to the ill effects of many narcotics and poisons, not just anifract. Whenever you have to make a constitution saving throw against poisons or narcotics you roll with advantage."
            },
        ]
    };
}

function getMozzWaniDetails() {
    return {
        "Size": "Medium",
        "Speed": {
            "Walk": "25",
            "Climb": "25"
        },
        "Racial Stat Bonus": "INT",
        "Feats": [
            {
                "Name": "Of Two Minds (Free Feat)",
                "Info": "The twin minds of a Mozz’Wani allow them to split their focus onto multiple tasks at once. You can take an additional bonus action each turn."
            },
            {
                "Name": "Mind Over Matter",
                "Info": "Some Mozz’Wani can experience an imbalance within their minds, with either the bug brain or fungal brain exerting more control. In the former case, this leads to greater reflexes and motor control at the cost of higher order mental processing and vice versa in the latter case. Choose one of the following options when taking this feat:" +
                "<dl><dt>Bug Brain:</dt>" +
                "<dd>+2 to your Strength and Dexterity scores, -2 to your Intelligence and Wisdom Scores. The natural maximums for these scores are increased or decreased by the same amount.<dd>" +
                "\n<dt>Fungus Brain:</dt>" +
                "<dd>+2 to your Intelligence and Wisdom scores, -2 to your Strength and Dexterity Scores. The natural maximums for these scores are increased or decreased by the same amount.<dd></dl>"
            },
            {
                "Name": "Warding Spores",
                "Info": "While the Mozz’Wani have evolved to live with their fungal spores, they can be quite toxic to other living beings. Whenever a creature moves within 10ft of you, or starts their turn there, you can use your reaction to force that creature to make a Constitution saving throw against your Wisdom DC, taking 1d4 necrotic damage on a failure. A creature can only take this damage once per turn. The damage increases to 2d4 when you reach level 5 and to 3d4 at level 10. In addition, you are resistant to necrotic damage."
            },
            {
                "Name": "Necrofungus",
                "Info": "While considered taboo by many Mozz’Wani, The Gift can be given to any dead body with an intact nervous system, creating a short-lived and barely alive zombie that can be controlled as an extension of its creator’s body. As an action, you can raise the corpse of a creature that died in the last minute. You cannot target a construct. When you do, the creature comes back to life with half of its maximum hit points restored. You control its actions on your turn. The creature remains undead for 10 minutes before dying again. After a particular corpse has been resurrected by this ability, it can never be resurrected again."
            },
            {
                "Name": "Inscrutable Mind",
                "Info": "Large amounts of time spent in communion with anifract can allow Einheri to draw a wider amount of wisdom from their connection with anima fractals, granting them approximate knowledge of many things. While under the primary effects of anifract, if you make a skill check with a skill you are not proficient in, you can add half your proficiency bonus."
            },
            {
                "Name": "Chemical Connoisseur",
                "Info": "The minds of the Mozz’Wani are complex and unintuitive in their constructions, stretching core neural connections across their body, making them difficult to tamper with. You have advantage on INT, WIS, and CHA saving throws."
            },
        ]
    };
}

function getCruscarransDetails() {
    return {
        "Size": "Medium",
        "Speed": {
            "Walk": "30",
        },
        "Racial Stat Bonus": "CON",
        "Feats": [
            {
                "Name": "Biodiversity (Free Feat)",
                "Info": "Cruscarrans come in many sizes and shapes. Select one of the options below. In addition to the chosen effects, you have the ability to breathe underwater, but not air. You require an aquarespirator to breathe outside water." +
                "<dl><dt>Broad Frame</dt>" +
                "<dd>Broad Cruscarrans have four legs, two arms, and large smooth shells that cover their back and head. You cannot wear armor, but you can add a bonus equal to your CON to your AC.<dd>" +
                "\n<dt>Slender Frame</dt>" +
                "<dd>Slender Cruscarrans have a humanoid body, with two arms and two legs. Their bodies are covered in smaller sloped shells with flexible joints that make them more dexterous than most other subspecies, without sacrificing much durability. You gain proficiency in DEX saving throws. If you already have proficiency, you gain a different saving throw proficiency of your choosing.<dd>" +
                "\n<dt>Scuttler Frame</dt>" +
                "<dd>Scuttler Cruscarrans have a semihumanoid body, with a humanoid upper half and a lower half that consists of 4-6 thin legs. Their many limbs allow them to move quickly across any terrain. You gain a 10ft bonus to your movement speed and are unaffected by difficult terrain.<dd></dl>"
            },
            {
                "Name": "Crustacean Shell",
                "Info": "Pick one of the options below:" +
                "<dl><dt>Chitinid</dt>" +
                "<dd>Your shell is thick and rough. You gain a +1 bonus to your AC at all times.<dd>" +
                "\n<dt>Softshell</dt>" +
                "<dd>A softer, flexible shell allows for a greater freedom of movement and heals more easily than harder, chitinous shells. Whenever you are healed, you restore the maximum possible number of hit points.<dd>" +
                "\n<dt>Pearlskin</dt>" +
                "<dd>A glossy shell covered in naturally growing mother-of-pearl. Whenever you make a Charisma ability check, you may grant yourself advantage on the roll. You must choose to do so before you roll. You may do so a number of times equal to your proficiency bonus per long rest.<dd></dl>"
            },
            {
                "Name": "Presence",
                "Info": "Pick one of the options below:" +
                "<dl><dt>Warding Presence</dt>" +
                "<dd>Your presence bolsters your allies. Any allies within 10ft of you can add your charisma modifier as a bonus to any saving throws they make.<dd>" +
                "\n<dt>Domineering Presence</dt>" +
                "<dd>Your terrifying figure strikes fear into the hearts of your enemies. Whenever you or an ally within 10ft of you is targeted by an attack, you can use your reaction to force the attacker to make a wisdom saving throw against your charisma DC. On a failure, it becomes frightened until the beginning of its next turn. This occurs BEFORE the attack is rolled, and the effects of the frightened condition apply to the attack. You may do this a number of times equal to your charisma modifier per short or long rest.<dd></dl>"
            },
            {
                "Name": "Get a Grip",
                "Info": "Pick one of the options below:" +
                "<dl><dt>Lockclaws</dt>" +
                "<dd>Your hands are heavy, clunky pincers. Your unarmed damage increases by one die step and you have advantage on attempts to grapple or maintain a grapple against other creatures. Whenever you damage a creature you have grappled, they take an additional 1d4 damage.<dd>" +
                "\n<dt>Pistol Grips</dt>" +
                "<dd>Spring-like musculature allows your hands to move in short bursts, faster than the eye can see. You have advantage on sleight of hand checks to obscure what your hands are doing, such as pickpocketing, and, once per turn, when you make an unarmed attack or an attack with a light melee weapon, you can make an additional attack. With that unarmed or melee weapon.<dd>" +
                "\n<dt>Manipulators</dt>" +
                "<dd>Your delicate manipulator arms move quickly and with finesse, allowing for precise usage of specialized tools. Whenever you make a tool check, you can add your wisdom modifier as a bonus to the roll.<dd></dl>"
            },
            {
                "Name": "Brotherhood",
                "Info": "You are closely bonded to the people around you. Whenever you finish a long rest, you can designate a number of creatures you can see equal to your proficiency bonus + your charisma modifier. All of the chosen creatures gain temporary hit points equal to 2 * your charisma modifier. Whenever you grant the help action to one of the chosen creatures, they gain a 1d4 bonus to their next roll after the one you helped them with. These effects last until the next long rest."
            },
            {
                "Name": "Shrimp Colors",
                "Info": "You can see many shades of light that aren’t on the normal visible spectrum, including a few that aren’t distorted by standard invisibility fields. You can see invisible objects and creatures as if they weren’t invisible and you have advantage on perception checks to detect hidden things by sight."
            },
        ]
    };
}

function getTerranDetails() {
    return {
        "Size": "Medium",
        "Speed": {
            "Walk": "30",
        },
        "Racial Stat Bonus": "CON",
        "Feats": [
            {
                "Name": "Genetic Stability (Free Feat)",
                "Info": "Life in nuclear winter has left Terrans with a unique trait: self-repairing DNA that cannot be easily manipulated. You have 60ft of darkvision and are immune to the effects of radiation, but you cannot install biomods, as your body rejects and corrects the changes too quickly. On the bright side, their DNA is flexible to internal changes, allowing Terrans to adapt to harsh conditions well. You gain a variation of the Environmental Hazard Adaptation biomod which doesn’t take up one of your body modification slots and doesn’t count as a biomod for any feats that would be affected by the number of biomods you have taken. Whenever you finish a long rest, you can select a different damage type to gain resistance to from the EHA biomod."
            },
            {
                "Name": "Natural Athlete",
                "Info": "Terrans are naturally gifted as athletes, thanks to centuries spent adapting to life at sea. Your jump distances increase by 10ft, you only need to spend 5ft of movement to get up from prone, you can hold your breath for up to an hour, and you gain climb and swim speeds equal to your walk speed."
            },
            {
                "Name": "Watcher’s Rest",
                "Info": "Long months sailing permanently changed the way Terrans sleep. Instead of falling unconscious, they enter a hibernation-like trance in which they remain fully conscious of their surroundings. You can complete a long rest in only 4 hours, during which time you remain conscious of your surroundings but cannot perform any type of strenuous activity. You can also complete a short rest in only 1 minute. You can still be rendered unconscious by other means such as chemical tranquilizers, which many Terrans use recreationally to experience dreams."
            },
            {
                "Name": "Well Traveled",
                "Info": "The nomadic lifestyle of Terrans allows them to see many places, meet many people, and pick up a variety of skills. You may select a background Contacts bonus you don’t already have, as well as 2 skill or tool proficiencies."
            },
            {
                "Name": "Reflexive Resilience",
                "Info": "Whenever you take damage from one of the damage types affected by the Genetic Stability feat, you can use your reaction to change your resistant damage type provided by the feat to the triggering damage type. When you do, the newly chosen damage type cannot be changed until you take another long rest."
            },
            {
                "Name": "Evasive Footwork",
                "Info": "Terrans are agile and difficult to pin down in a fight. Whenever you are attacked, you can use your reaction to attempt to dodge the attack, adding a +3 bonus to your AC for the duration of the triggering attack. After the attack either hits or misses, you may move up to 15ft without triggering opportunity attacks. You may use this feature a number of times equal to your proficiency bonus per short or long rest."
            },
        ]
    };
}