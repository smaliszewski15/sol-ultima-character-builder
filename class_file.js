function getClassList() {
    return {
        "classes": [
            "Ace",
            "Juggernaut",
            "Infiltrator",
            "Commandant",
            "Techspert",
            "Corsair",
            "Warden",
            "Doc",
            "Psyko",
            "Siren",
            "Warsmith",
            "Symbiote",
            "Botsmith",
        ]
    };
}

function getClassInfo(name) {
    switch (name) {
        case "Ace":
            return getAceDetails();
        case "Juggernaut":
            return getJuggernautDetails();
        case "Infiltrator":
            return getInfiltratorDetails();
        case "Commandant":
            return getCommandantDetails();
        case "Techspert":
            return getTechspertDetails();
        case "Corsair":
            return getCorsairDetails();
        case "Warden":
            return getWardenDetails();
        case "Doc":
            return getDocDetails();
        case "Psyko":
            return getPsykoDetails();
        case "Siren":
            return getSirenDetails();
        case "Warsmith":
            return getWarsmithDetails();
        case "Symbiote":
            return getSymbioteDetails();
        case "Botsmith":
            return getBotsmithDetails();
    }
}

function getAceDetails() {
    return {
        "Class Stat Bonus": "DEX",
        "Hit Die": "1d8",
        "Proficiencies": [
            "Light Weapons",
            "Light Armor",
            "Starship"
        ],
        "Saving Throws": [
            "Dexterity",
            "Charisma"
        ],
        "Feats": [
            {
                "Name": "Moxie (Free Feat)",
                "Info": "A torso shot may be the most straightforward to take someone down, but a little creativity can go a long way. You gain a number of Moxie Points equal to your proficiency bonus. You regain all spent points on a short or  long rest. Before you roll an attack with a light weapon, you may spend a point to add one of the following effects to the attack:" +
                "<dl><dt>Disarm:</dt>" +
                "<dd>If the attack hits, the target creature is forced to drop an object of your choosing. The object moves 15 ft directly away from you. This attack deals no damage.</dd>" +
                "\n<dt>Hobble:</dt>" +
                "<dd>If the attack hits, the target creature’s speed is reduced to 0 until the end of its next turn. The attack deals half as much damage as normal.</dd>" +
                "\n<dt>Warning Shot:</dt>" +
                "<dd>If the attack hits, the target is frightened of you until the end of its next turn. The attack deals no damage.</dd>" +
                "\n<dt>Blind:</dt>" +
                "<dd>If the attack hits, the target creature is blinded for until the end of its next turn. This attack deals no damage.</dd></dl>"
            },
            {
                "Name": "Deadeye",
                "Info": "Whenever you make an attack, you score a critical hit on a 19 or 20."
            },
            {
                "Name": "Evasive",
                "Info": "When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail."
            },
            {
                "Name": "Quickdraw",
                "Info": "Whenever you roll initiative, you may immediately draw a weapon, make a single attack, and move up to 10ft, in any order."
            },
            {
                "Name": "Long-Distance Interaction",
                "Info": "You can use a weapon to perform simple actions from afar. You may make a ranged attack with a light weapon against an object within range. On a hit, instead of dealing damage you can perform an object interaction. The interaction must be simple, such as pressing a button, pushing a lever, or detonating an explosive. If the interaction requires more precise or complex interactions, such as operating a complex console, or driving a vehicle, the action automatically fails."
            },
            {
                "Name": "Aggressive Gunslinging",
                "Info": "The following trickshots are added to the Moxie feat:" +
                "<dl><dt>Shred</dt>" +
                "<dd>If the attack hits, the target takes an extra 1d4 damage from any subsequent attacks that deal slashing, piercing, or bludgeoning damage until the start of your next turn. This attack deals half damage." +
                "\n<dt>Flourish</dt>" +
                "<dd>Immediately after the attack you may reload the weapon you attacked with for free.</dd>" +
                "\n<dt>Hamper</dt>" +
                "<dd>If the attack hits, the target deals half as much damage with attacks that use STR or DEX until the end of their next turn. This attack deals half damage.</dd>" +
                "\n<dt>Overwatch</dt>" +
                "<dd>When you choose this option you do not make an attack against the target. Instead, if the target makes an attack before the beginning of your turn, and they are still a valid target, you can make a single attack against them. If it hits, their attack automatically misses. This option doesn’t consume a moxie point if you do not take the subsequent attack. You can target as many creatures, or the same as many times, as you have attacks on your turn, and can only make one overwatch shot per attack used.</dd></dl>"
            },
        ],
        "Elite Feats": [
            {
                "Name": "Ocelot",
                "Info": "When you land a ranged attack with a light weapon against a target, you may choose to spend a moxie point ricochet the shot to another target within 20ft of the original target. Subtract 5 from the original attack roll and use that as the attack roll against the new target. If the original attack was a natural 20, the ricochet attack must still hit the new target’s AC to succeed. This can be repeated as many times as you would like, subtracting an additional 5 for every additional target. Additional ricochets in the same chain do not cost additional moxie. Your maximum moxie increases by 3."            },
            {
                "Name": "Fan the Hammer",
                "Info": "When you take the attack action on your turn, you can spend a point of Moxie to take the attack action again. You may only do so once per turn."
            },
        ]
    };
}

function getJuggernautDetails() {
    return {
        "Class Stat Bonus": "CON",
        "Hit Die": "1d12",
        "Proficiencies": [
            "Light Melee Weapons",
            "Medium Weapons",
            "Heavy Weapons",
            "Ship Weapons"
        ],
        "Saving Throws": [
            "Strength",
            "Constitutions"
        ],
        "Feats": [
            {
                "Name": "Hardy (Free Feat)",
                "Info": "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points."
            },
            {
                "Name": "Strength of Heart",
                "Info": "Whenever you roll an ability check, saving throw, or damage roll that uses your strength modifier, you can choose to add a bonus to the roll equal to your constitution modifier. This feature can be used a number of times equal to your proficiency bonus per long rest."
            },
            {
                "Name": "Earnest",
                "Info": "You’re very bad at lying, but this makes those around you much more willing to believe you when you make a promise or a threat. You roll all persuasion and intimidation rolls at advantage, but all deception checks are made at disadvantage."
            },
            {
                "Name": "Superheavy Munitions",
                "Info": "You can ignore the ‘mounted’ tag on weapons you wield."
            },
            {
                "Name": "Heavy Toss",
                "Info": "As an action, you can throw an object or creature that is your size or smaller to a space up to 20ft away. If you throw a creature, and that creature is unwilling, you must make a contested grapple check against the creature. If the target space is empty, the creature lands there safely. If the space contains an object or a creature, you make a STR-based attack against that object\creature, dealing 1d8+STR damage to both the target and the thrown creature on a success. Hit or miss, the thrown creature will then land on an empty space within 5 ft. of the target. You can use this feature a number of times equal to your proficiency bonus per long rest."
            },
            {
                "Name": "Bludgeoner",
                "Info": "When you take the attack action on your turn, you can choose to roll all of your melee attacks this turn at advantage. If you use this feature, all attacks against you will be at advantage until the start of your next turn."
            },
        ],
        "Elite Feats": [
            {
                "Name": "Cyber Hulk",
                "Info": "Your resilient physiology allows for the installation of far more cybertech than a normal body could survive. The maximum number of cybertech augmentations you can install is increased by 3, and you gain a bonus to all saving throws equal to one-third the number of augments you currently have installed (rounded down).",
            },
            {
                "Name": "Berserker",
                "Info": "Whenever you take damage from a creature, you can use your reaction to channel your spite against them. When you do, you may add half of the triggering damage to your next attack with a strength-based weapon against the triggering creature. You may use this feature a number of times equal to your proficiency bonus per long rest."
            },
        ]
    };
}

function getInfiltratorDetails() {
    return {
        "Class Stat Bonus": "DEX",
        "Hit Die": "1d8",
        "Proficiencies": [
            "Light Weapons",
            "Medium Weapons",
            "Stealth",
            "Thief's Tools"
        ],
        "Saving Throws": [
            "Dexterity",
            "Intelligence"
        ],
        "Feats": [
            {
                "Name": "Precision Strike (Free Feat)",
                "Info": "Whenever you make an attack against a creature with a light or medium weapon, if the total roll is 5 points or higher than the target AC, you may roll an additional amount of d6s equal to your proficiency bonus when determining the damage the attack deals."
            },
            {
                "Name": "Uncanny Dodge",
                "Info": "When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you."
            },
            {
                "Name": "Elusive Combatant",
                "Info": "During your turn, if you make an attack with a melee weapon against a creature, that creature can't make opportunity attacks against you for the rest of your turn. In addition, you may use an action to add the Silent tag to a ranged weapon you are holding. The weapon loses the silent tag when you use this feature to modify another weapon."
            },
            {
                "Name": "Sharpshooter",
                "Info": "You ignore the penalties of attacking a creature who is behind partial cover, and you do not suffer disadvantage from attacking a creature who is in the outer range bracket of your weapon."
            },
            {
                "Name": "Gadget Ambush",
                "Info": "When you target a surprised creature with a gadget, that creature has disadvantage on the saving throw. If the gadget inflicts damage, they receive the maximum possible damage."
            },
            {
                "Name": "Assassinate",
                "Info": "When you hit an enemy that has not yet taken a turn in initiative, or if they are stunned or restrained, the attack is a guaranteed critical hit."
            },
        ],
        "Elite Feats": [
            {
                "Name": "Street Samurai",
                "Info": "You know how to strike when your opponent is vulnerable. You may add an extra 2d6 damage whenever you hit an enemy with an attack that has advantage on the attack roll.",
            },
            {
                "Name": "Be Efficient",
                "Info": "On your turn, when you make an attack with a ranged weapon with which you are proficient, you can choose to make a piercing attack. When you do, draw a line that is as long as the weapon’s effective range (1st range limit) and originates from you. Roll a single attack roll, which is used against every creature in that line. Roll damage for the weapon once, and apply the damage to all targets who are hit by the attack. If any of the attacks trigger a precision strike, all creatures hit will suffer your precision strike damage. This attack ignores all cover, including full cover, but does not penetrate through the outer hull of ships or stations. You can use this feature a number of times equal to half your proficiency bonus (rounded down) per long rest."
            },
        ]
    };
}

function getCommandantDetails() {
    return {
        "Class Stat Bonus": "CHA",
        "Hit Die": "1d10",
        "Proficiencies": [
            "Light Weapons",
            "Medium Weapons",
            "Ship Weapons",
            "Light Armor",
            "Medium Armor",
            "Heavy Armor"
        ],
        "Saving Throws": [
            "Wisdom",
            "Charisma"
        ],
        "Feats": [
            {
                "Name": "Leadership (Free Feat)",
                "Info": "As a bonus action, you can grant an ally who can hear you a 1d6 inspiration die, which they can add to any ability check, saving throw, or attack roll in the next 10 minutes. The recipient can choose to add the 1d6 after the d20 has already been rolled. You can use this feature a number of times equal to your charisma modifier and regain all spent uses on a long rest."
            },
            {
                "Name": "Inspiring Speech",
                "Info": "Whenever you Make an attack roll, you may double your proficiency bonus for the roll. If you do, the damage roll will deal 2 less damage."
            },
            {
                "Name": "Center of Mass",
                "Info": "Whenever you Make an attack roll, you may double your proficiency bonus for the roll. If you do, the damage roll will deal 2 less damage."
            },
            {
                "Name": "Coordinated Attack",
                "Info": "When you take the attack action, you can spend one of your attacks and a single use of your Leadership feat to instead command an ally you can see within 30ft of you to attack. That ally can immediately use their reaction to make a single attack, adding your Leadership die to the damage."
            },
            {
                "Name": "Zealot",
                "Info": "You gain a number of additional charges of your leadership feature equal to your proficiency bonus, and whenever you take damage, you can spend your reaction and a use of leadership to reduce the damage by 1d6 + CHA."
            },
            {
                "Name": "Lead From The Front",
                "Info": "Whenever you make an ability check, attack roll, saving throw, or damage roll, you may immediately use your reaction and a use of your leadership feature to grant yourself a bonus to the roll equal to one roll of your leadership die."
            },
        ],
        "Elite Feats": [
            {
                "Name": "Advanced Coordination",
                "Info": "Whenever you give an ally a leadership die, they can use their reaction to move up to their movement speed without taking opportunity attacks. Your leadership die increases from 1d6 to 1d8 and any creature that spends one of your inspiration dice immediately gains a number of temporary hit points equal to the amount rolled.",
            },
            {
                "Name": "Double Tap",
                "Info": "Whenever you take the attack action on your turn, you may make an additional attack."
            },
        ]
    };
}

function getTechspertDetails() {
    return {
        "Class Stat Bonus": "INT",
        "Hit Die": "1d6",
        "Proficiencies": [
            "Light Weapons",
            "Light Armor",
            "Tech",
            "Tech Tools"
        ],
        "Saving Throws": [
            "Wisdom",
            "Intelligence"
        ],
        "Feats": [
            {
                "Name": "High-Capacity Batteries (Free Feat)",
                "Info": "Custom batteries allow you to use gadgets more often and to greater effect. Your personal battery can now hold a number of charges equal to twice your intelligence modifier."
            },
            {
                "Name": "Jolter",
                "Info": "You’ve concealed some shocking surprises in your gadgets. On your turn, as a bonus action, you can choose to electrify any creatures of your choosing that are currently under the effects of one of your gadgets. When you do, every creature you choose immediately receives an amount of lightning damage equal to your intelligence modifier. You can use this feature a number of times equal to your proficiency bonus per long rest."
            },
            {
                "Name": "Devious Devices",
                "Info": "Whenever you use a gadget which forces a creature to make a saving throw against your intelligence DC, you may force a single creature affected by the device to make the roll at disadvantage. You can use this feature a number of times equal to your proficiency bonus, and regain all uses on a long rest."
            },
            {
                "Name": "Drone Maestro",
                "Info": "Whenever you would command a drone that you created using one of your gadgets, you may command an additional drone for free."
            },
            {
                "Name": "Improvised Emergency Device",
                "Info": "Once per long rest, you can spend an action to cobble together an improvised gadget. This can be any of the gadgets in the item list. It is irreparably damaged after a single use (or if the device has a listed duration, at the end of that duration)."
            },
            {
                "Name": "Elite Engineer",
                "Info": "You gain expertise in the tech skill, and once per long rest you may reroll a failed tech check."
            },
        ],
        "Elite Feats": [
            {
                "Name": "Eco Batteries",
                "Info": "Whenever you take a short rest, you regain an amount of battery points equal to your INT. You can only regain battery in this way once per long rest. In addition, your maximum battery is increased by an amount equal half to your level, rounded up."
            },
            {
                "Name": "Proxy",
                "Info": "Whenever you use a gadget against a creature, you leave a bit of your tech attached to them. As an action, you can look through the senses of a creature who is currently under the effects of one of your gadgets. When you do, you become blind and deaf. This effect lasts until you end it as a free action or until the creature is no longer under the effects of one of your gadgets. When you deploy a gadget, you may use a willing creature who is under the effects of one of your gadgets as the source. When you do, the gadget uses your stats for any rolls or saving throws, and you must be able to see the targets of any gadgets you deploy, and any gadgets that require subsequent actions will require you to spend the required actions. You can also use either of the effects of this feat using a summoned utility drone you control. In addition, whenever the effects of a gadget you deployed on a friendly creature ends, you can spend your reaction to immediately redeploy the gadget, targeting the same creature as the original deployment, regardless of range or line of sight limitations."
            },
        ]
    };
}

function getCorsairDetails() {
    return {
        "Class Stat Bonus": "DEX",
        "Hit Die": "1d10",
        "Proficiencies": [
            "Light Weapons",
            "Medium Weapons",
            "Ship Weapons",
            "Light Armor",
            "Medium Armor"
        ],
        "Saving Throws": [
            "Wisdom",
            "Dexterity"
        ],
        "Feats": [
            {
                "Name": "Parry (Free Feat)",
                "Info": "When a hostile creature makes an attack against you, you can use your reaction to add +2 to your AC for that attack. You must be wielding a weapon to use this feature."
            },
            {
                "Name": "Bladedancer",
                "Info": "You can take the dodge, dash, or disengage action as a bonus action on your turn. You can use this feature a number of times equal to your proficiency bonus and regain all spent uses on a long rest."
            },
            {
                "Name": "Cutter",
                "Info": "When you use the attack action on your turn, you can make an additional attack with a melee weapon you are holding. If you are not holding a melee weapon, you may make an unarmed attack instead. If the melee weapon is in your off-hand, this attack does not count as an offhand attack."
            },
            {
                "Name": "Ambidextrous",
                "Info": "Whenever you make an off-hand attack, you may add the appropriate ability modifier to the damage roll. You do not need a free hand to reload a weapon with the reload property you are proficient with."
            },
            {
                "Name": "Audacious Evasion",
                "Info": "Upon using your Parry feature, you can also add your dexterity modifier to your AC. You may use this feature twice per short or long rest."
            },
            {
                "Name": "Meat Shot",
                "Info": "When you hit a creature within 5 ft. of you with a ranged attack, you can add a bonus of 3 damage to the roll."
            },
        ],
        "Elite Feats": [
            {
                "Name": "Raider",
                "Info": "As a bonus action, you may throw a grenade. You do not need a free hand to do so."
            },
            {
                "Name": "Duelist",
                "Info": "You may add your charisma modifier to your initiative. You may also add your charisma modifier to any damage roll, on the condition that you are within5 ft. of the target creature and there are no other creatures within5 ft. of you or the target creature. Enemies also have disadvantage on opportunity attacks against you."
            },
        ]
    };
}

function getWardenDetails() {
    return {
        "Class Stat Bonus": "DEX",
        "Hit Die": "1d10",
        "Proficiencies": [
            "Light Weapons",
            "Medium Weapons",
            "Heavy Weapons",
            "Ship Weapons",
            "Light Armor",
            "Medium Armor",
            "Heavy Armor",
            "Intimidation"
        ],
        "Saving Throws": [
            "Strength",
            "Charisma"
        ],
        "Feats": [
            {
                "Name": "Protector (Free Feat)",
                "Info": "When you or an ally within 5 ft. of you is hit by an attack, you can use your reaction to reduce the incoming damage by 1d10+CON. You may use this feature a number of times equal to your proficiency bonus, and regain all spent uses on a long rest."
            },
            {
                "Name": "Stabilized",
                "Info": "You may wield and reload a medium weapon with only one hand, but only if your other hand is wielding a shield."
            },
            {
                "Name": "Roar",
                "Info": "As an action, you may let out a mighty roar, striking fear into the hearts of your enemies. Any hostile creatures you choose within 20ft of you must make a wisdom saving throw against your charisma DC. On a failure, they are frightened by you until the end of their next turn. If the creature passes, they are immune to the effects of this feat for 1 hour. This feature has no effect on creatures that cannot hear you. You may use this feature twice per long rest."
            },
            {
                "Name": "Takedown",
                "Info": "You do not need a free hand to grapple a target. You can use your action to try to pin a creature grappled by you. To do so, make another grapple check. If you succeed, the creature is restrained until the grapple ends."
            },
            {
                "Name": "Retribution",
                "Info": "When a creature hits you with an attack, you may use your reaction to immediately make an attack against that creature."
            },
            {
                "Name": "Phalanx",
                "Info": " If you are wielding a shield, you may act as cover for nearby allies. If an ally within5 ft. you is attacked by a hostile creature, and you are standing between your ally and the creature, you may add the AC bonus of your shield to their AC for the attack."
            },
        ],
        "Elite Feats": [
            {
                "Name": "Ironclad",
                "Info": "When you are wearing heavy armor, any damage you take is reduced by 3. Whenever you use your protector feat, you may choose to redirect the incoming damage onto yourself, in addition to the normal effects."
            },
            {
                "Name": "Aegis",
                "Info": "If you aren't incapacitated, you can add your shield's AC bonus to any Dexterity saving throw you make against a gadget or other harmful effect that targets you, and if you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you can use your reaction to take no damage if you succeed on the saving throw, interposing your shield between yourself and the source of the effect."
            },
        ]
    };
}

function getDocDetails() {
    return {
        "Class Stat Bonus": "INT",
        "Hit Die": "1d6",
        "Proficiencies": [
            "Light Weapons",
            "Light Armor",
            "Medicine or Science"
        ],
        "Saving Throws": [
            "Intelligence",
            "Wisdom"
        ],
        "Feats": [
            {
                "Name": "Designer Drugs (Free Feat)",
                "Info": "You are accustomed to synthesizing powerful drugs to augment your and your allies’ abilities. Whenever you take a long rest, you may synthesize a number of drugs equal to your intelligence modifier + 1 (minimum of 1). You also gain a medical applicator, which allows you to administer one of these drugs as an action to an organic creature you can touch within 5 ft. of you. If the target is unwilling, it must make a constitution saving throw against your intelligence DC to resist the effect. Constructs cannot be affected by this feature. The creature can repeat the saving throw at the end of each of its turns. A dose of drugs becomes inert after 24 hours, and cannot be used. When you use this feature to create new designer drugs, you may choose from the following list:" +
                "\n<dl><dt>Biostim" +
                "<dd>The patient regains a number of hit points equal to the roll of a number of d6s equal to half your level rounded up(minimum of 1).</dd>" +
                "\n<dtSteelskin" +
                "<dd>The patient gains a +2 bonus to AC for 10 minutes.</dd>" +
                "\n<dtCleareye" +
                "<dd>The patient can roll a d4 and add the number rolled to every attack roll and saving throw they make for the next minute.</dd>" +
                "\n<dtBurnout" +
                "<dd>The patient becomes sluggish and uncoordinated, subtracting 1d4 from all attack rolls and saving throws for 1 minute.</dd>" +
                "\n<dtTranq" +
                "<dd>Roll 4d6 + your level. If the patient has fewer hit points than the amount rolled, it falls unconscious for 30 minutes or until it takes damage. If the patient is unstable, they do not roll death saving throws until this drug wears off.</dd>" +
                "\n<dtDetoxitol" +
                "<dd>The patient has advantage on saving throws against poisons and resistance to poison damage for 1 hour.</dd></dl>"
            },
            {
                "Name": "First Aid",
                "Info": "As an action, you may attempt to suture and bandage a creature’s wounds. Choose a willing creature within 5 ft. of you and roll a DC 15 medicine check. On a success, the creature regains 2d8+INT hit points. A creature can only receive healing from this feat once per long rest. Constructs cannot be affected by this feature. If the roll is 25 or higher, or you roll a natural 20, the total healing is doubled."
            },
            {
                "Name": "Dart Gun",
                "Info": "You upgrade your medical applicator to a long-range dart gun. You can use this gun to apply drugs to any creature you can see within 60ft of you."
            },
            {
                "Name": "Rare Formulas",
                "Info": "You’ve improved your repertoire of synthesized drugs to include stronger drugs, some of which are illegal because of their dangerous properties. Once per long rest you can spend a use of your Designer Drugs feature to produce a single dose of a narcotic of your choosing. This dose becomes inert if it isn’t used before the next time you take a long rest."
            },
            {
                "Name": "Custom Formulas",
                "Info": "Whenever you apply one of the drugs from your Designer Drugs feat, you can spend an additional use of the feat to apply a second drug to the same target. Your total number of uses for the Designer Drugs feat increases by an amount equal to your proficiency bonus."
            },
            {
                "Name": "Vital Organs",
                "Info": "Whenever you make an attack on your turn, you can use your medical knowledge to aim for a vital organ or weak point on the target’s body. Take a -5 penalty to the attack roll, but if the attack hits it will do an additional 10 points of damage."
            },
        ],
        "Elite Feats": [
            {
                "Name": "Chemtrooper",
                "Info": "Your injector becomes an auto injector, a worn device designed to inject yourself with combat-enhancing drugs. You no longer need a hand to hold and use your injector, you can use your injector as a bonus action as long as you are the target, and you can be under the effects of up to two different drugs at the same time. You can also use the autoinjector to consume a narcotic as a bonus action."
            },
            {
                "Name": "Physician",
                "Info": "Whenever you roll dice to determine how many hit points you restore to a creature, you may roll an additional die and add it to the total. In addition, you gain the ability to revive a creature that has died. When you do, you must touch the body of a creature that has been dead no longer than 1 minute and use your action to resuscitate them. The creature immediately comes back to life with 1 hit point. This ability does not regenerate missing limbs or organs, so if a creature is missing a necessary body part or organ (their head for example) the resuscitation automatically fails. You can use this ability once per long rest."
            },
        ]
    };
}

function getPsykoDetails() {
    return {
        "Class Stat Bonus": "WIS",
        "Hit Die": "1d8",
        "Proficiencies": [
            "Light Weapons",
            "Light Armor",
        ],
        "Saving Throws": [
            "Charisma",
            "Wisdom"
        ],
        "Feats": [
            {
                "Name": "Mindfreak (Free Feat)",
                "Info": "You gain a number of Psyko points equal to twice your proficiency bonus. As an action, you can spend these points to cast Psychic Powers. Some abilities may require intense mental concentration; you can only have one concentration power active at a time and you will need to make a concentration saving throw whenever you take damage or else the power ends early. Psychic Powers that require a saving throw will use your Wisdom DC. Also, you can communicate telepathically with any creatures you can see within 30ft of you." +
                "\n<dl><dt>Mind Lash (1 Point)</dt>" +
                "<dd>You lash out at a nearby enemy with psychic energy. When you do, make an attack roll using WIS + Proficiency against a creature you can see within 60ft. If it hits, the attack deals 1d10+WIS psychic damage and the creature cannot take reactions until the end of its next turn.</dd>" +
                "\n<dt>Mass Seizure (2 Points, Concentration)</dt>" +
                "<dd>Pick up to 3 creatures you can see within 60ft of you. Each creature you select must make a wisdom saving throw, and on a failure they suffer a 1d4 penalty to all attack rolls and saving throws for one minute.</dd>" +
                "\n<dt>Ping (1 Point, Concentration)</dt>" +
                "<dd>You detect the psychic energy of creatures around you. You can sense the location of any living creatures within 30ft of you. This effect extends through walls and lasts for 10 minutes. While this effect is active, you can target any creatures you sense with your psychic powers, even if they are invisible or behind full cover.</dd>" +
                "\n<dt>Burnout</dt>" +
                "<dd>The patient becomes sluggish and uncoordinated, subtracting 1d4 from all attack rolls and saving throws for 1 minute.</dd></dl>"
            },
            {
                "Name": "Empath",
                "Info": "You gain the following Psychic Powers:" +
                "\n<dl><dt>Fear Pulse (2 Points, Concentration)</dt>" +
                "<dd>Prey upon the fears of those around you. Pick any number of creatures you can see within 20ft of you. Any creatures targeted must make a charisma saving throw. On a failure, they are frightened of you. The effect ends after one minute, or if the creature uses its action to successfully repeat the saving throw. Creatures have advantage on the saving throw if they can no longer see you.</dd>" +
                "\n<dt>Serotonin (2 Points, Concentration)</dt>" +
                "<dd>You soothe the minds of those around you. Select a point within 40ft. Any creatures you choose within a 10ft square centered on that point are cured of the charmed and frightened conditions. In addition, any creatures you choose in the area must make a charisma saving throw; on a failure, they are charmed by you for 1 minute. The effect ends early if they witness hostile action against them or their allies, and when the effect ends they will know you manipulated their mind.</dd></dl>"
            },
            {
                "Name": "Brainstorm",
                "Info": "Whenever you take a short rest, you regain 2 psyko points. Whenever you cast a psyko power, you can cast Mind Lash for free as a bonus action."
            },
            {
                "Name": "Mental Fortress",
                "Info": "You gain the following Psychic Powers:" +
                "\n<dl><dt>Focus (2 Points, Concentration)</dt>" +
                "<dd>You can filter out the distractions of the mind to provide unparalleled focus. Up to three creatures you choose within 30ft of you gains a 1d4 bonus to attack rolls, ability checks, and saving throws for 1 minute.</dd>" +
                "\n<dt>Parasite (2 Points, Concentration)</dt>" +
                "<dd>You leave a mental parasite in the mind of an enemy, tearing apart their psyche. Choose a creature you can see within 40ft of you. That creature must make a wisdom saving throw. On a failure, the creature takes 1d8 psychic damage. The creature repeats the saving throw at the start of each of its turns. The effect ends after 1 minute, or when the creature makes a successful saving throw.</dd></dl>"
            },
            {
                "Name": "Mind Meld",
                "Info": "You gain the following Psychic Powers:" +
                "\n<dl><dt>Focus (2 Points, Concentration)</dt>" +
                "<dd>You can filter out the distractions of the mind to provide unparalleled focus. Up to three creatures you choose within 30ft of you gains a 1d4 bonus to attack rolls, ability checks, and saving throws for 1 minute.</dd>" +
                "\n<dt>Parasite (2 Points, Concentration)</dt>" +
                "<dd>You leave a mental parasite in the mind of an enemy, tearing apart their psyche. Choose a creature you can see within 40ft of you. That creature must make a wisdom saving throw. On a failure, the creature takes 1d8 psychic damage. The creature repeats the saving throw at the start of each of its turns. The effect ends after 1 minute, or when the creature makes a successful saving throw.</dd></dl>"
            },
            {
                "Name": "Neurosmith",
                "Info": "You gain the following psychic powers:" +
                "\n<dl><dt>Lobotomy (3 Points)</dt>" +
                "<dd>ear apart the target’s mind. Pick a creature you can see within 60ft of you. It must make a wisdom saving throw. On a failure, it takes 3d10 psychic damage and all ability checks and saving throws at disadvantage until the end of its next turn. On a success, it takes half as much damage and suffers no additional effects." +
                "\n<dt>Psychotherapy (1 Point)</dt>" +
                "<dd>You heal the wounds of a creature you can see within 30ft of you. The target creature regains 1d6+WIS hit points."
            },
        ],
        "Elite Feats": [
            {
                "Name": "Memetimancer",
                "Info": "Your telepathy range increases to 120ft. You have mastered the art of reading and altering memories, gaining the following new powers:" +
                "\n<dl><dt>Probe (2 Points, Concentration)" +
                "<dd>You invade the memories of a creature within 5 ft. of you. The target creature must make a wisdom saving throw. On a failure, you can view the memories a creature has made in the last hour. The creature has disadvantage on the saving throw if it is unconscious. On each of your turns you can use your action to deepen your search. When you do, the target creature repeats the saving throw, and on a failure the span of memories you have access to is multiplied by 10 (1 hour to 10 hours, 10 hours to 100, etc.). The psychic power ends early if the creature passes the saving throw or if the target creature is ever moved more than 5 ft. away from you.</dd>" +
                "\n<dt>Edit (2 Points)" +
                "<dd>You alter the memories of a creature you can see within 10ft of you. The target creature must make a wisdom saving throw, and on a failure you can alter the creature’s memories of any events within the last minute. If you are concentrating on the probe power, you can also alter any memories you can currently witness using the power, so long as the memories you edit can fit into a single one minute span.</dd>" +
                "\n<dt>Message (1 Point)" +
                "<dd>You can send a telepathic message to a creature that you’ve seen before. The target creature can be any distance away from you, and the message can be no longer than 25 words in length. Upon receiving the message, the target can respond using the same rules.</dd></dl>"
            },
            {
                "Name": "Dominator",
                "Info": "You gain the following Psychic Powers:" +
                "\ndt>Manipulation (1 Point)</dt>" +
                "<dd>You speak a one-word command to a creature you can see within 30ft. The target must succeed on a Charisma saving throw or follow the command on its next turn. The spell has no effect if your command is directly harmful to it, or if the target creature is immune to being charmed. You can cast this power at a higher cost, adding an additional target for each additional point.</dd>" +
                "\ndt>Domination (3 Points, Concentration)</dt>" +
                "<dd>You seize control of the mind of a creature you can see within 30ft. The target must succeed on a Charisma saving throw. On a failure, the target is charmed, and while charmed in this way they will obey any verbal (or telepathic) commands you give them. The effect lasts 1 minute, but the target creature can repeat the saving throw at the end of each of their turns, or whenever it takes damage, to end the effect early. If you give the target creature a command that would be harmful to itself, it can immediately reroll the saving throw at advantage to attempt to end the effect, before following the command.</dd></dl>"
            },
        ]
    };
}

function getSirenDetails() {
    return {
        "Class Stat Bonus": "CHA",
        "Hit Die": "1d6",
        "Proficiencies": [
            "Light Weapons",
            "Light Armor",
            "Medium Armor",
            "Performance"
        ],
        "Saving Throws": [
            "Dexterity",
            "Charisma"
        ],
        "Feats": [
            {
                "Name": "Inspiring Performance (Free Feat)",
                "Info": "As a bonus action on your turn, you can play a musical instrument to create a 10ft radius aura centered on yourself. Any allied creatures who can hear you within this aura gain a +2 bonus to ability checks, attack rolls, and saving throws. This aura lasts until the beginning of your next turn."
            },
            {
                "Name": "Bass Boosted",
                "Info": "You may use an action instead of a bonus action to activate your Inspiring Performance feature. If you do, the radius of your aura increases by5 ft. and any hostile creatures of your choosing within the aura must make a CON save against your Charisma DC, taking 2d4 thunder damage on a failed save. If your instrument of choice requires both your hands to play, the damage increases to 2d6. You cannot activate Soothe and Bass Boosted with the same action."
            },
            {
                "Name": "Soothe",
                "Info": "You may use an action instead of a bonus action to activate your Inspiring Performance feature. When you do, the radius of your aura increases by 5 ft., and any creatures of your choosing within the aura gain additional benefits. Affected creatures gain 1d4 temporary HP and have advantage on saving throws against the charmed and frightened condition while within the aura. If you are using an instrument that requires two hands, the temporary HP increases to 1d6. You cannot activate Soothe and Bass Boosted with the same action."
            },
            {
                "Name": "Incite",
                "Info": "Sharp chords incite violence in those that hear it. As an action, you can choose a creature you can see within 60ft that can hear you. The creature must make a CHA saving throw against your Charisma DC. On a failure, it is filled with rage, and must immediately use its reaction to attack the nearest creature it can see. If there are no targets within range, it can move up to its movement to make the attack. A creature that is immune to being charmed is immune to this feature. You may use this feature four times per long rest. You must be playing an instrument to use this feature."
            },
            {
                "Name": "Panic!",
                "Info": "A deep sound that sows fear and unease into those that hear it. As an action, you can produce a 15ft cone originating from yourself. All creatures within that cone must make a WIS saving throw against your Charisma DC. On a failure, the creature is frightened of you for 1 minute. The creature can repeat the saving throw at the end of each of its turns to end the effect early. You may use this feature twice per long rest. You must be playing an instrument to use this feature."
            },
            {
                "Name": "Serenade",
                "Info": "A targeted performance, for a very special fan. When you use this feature choose one of the following two options. Enthrall: target a creature you can see within 30ft of you. The target must make a CHA saving throw against your Charisma DC. On a failure, it is charmed for 1 hour, or until it witnesses hostile actions against it or its allies. Heartbreaker: target a creature you can see within 30ft of you. The creature must make a WIS saving throw against your Charisma DC. On a failure, the target suffers 3d8 psychic damage, or half as much on a success. You may use this feature up to 4 times per long rest.  You must be playing an instrument to use this feature."
            },
        ],
        "Elite Feats": [
            {
                "Name": "Tchaikovsky Technique",
                "Info": "Any ranged weapon with which you are proficient, and does not have the silent tag, counts as a musical instrument for you. Whenever you use your action to use your Inspiring Performance, you may make a single attack with a ranged weapon you are proficient with. If you do not have a feat that allows you to use Inspiring Performance as an action, you can now."
            },
            {
                "Name": "Infectious Groove",
                "Info": "Your music puts a skip in your allies’ step, granting them +10 movement speed and +1 AC whenever they would gain the benefits of your Inspiring Performance feat."
            },
        ]
    };
}

function getWarsmithDetails() {
    return {
        "Class Stat Bonus": "INT",
        "Hit Die": "1d8",
        "Proficiencies": [
            "Light Weapons",
            "Medium Weapons",
            "Heavy Weapons",
            "Light Armor",
            "Medium Armor",
            "Weaponsmithing Tools",
            "Armorer's Tools"
        ],
        "Saving Throws": [
            "Strength",
            "Intelligence"
        ],
        "Feats": [
            {
                "Name": "Custom Modifications (Free Feat)",
                "Info": "You can customize your weapons and armor to grant you and your allies a tactical advantage. You gain proficiency in weaponsmithing tools and armorer’s tools. While you have weaponsmithing tools or armorer’s tools in your possession, you can spend a long rest modifying a weapon or piece of armor. When you modify a weapon, you may either add a +1 bonus to the weapon’s attack and damage rolls (to a maximum of +3), or add or remove a single weapon tag on the weapon (you cannot add or remove the ‘Auto’ or ‘Reload’ tags). If you pick a piece of armor, you can either add a +1 bonus to the AC the armor provides (up to a maximum of +3), or allow the armor to grant the wearer resistance to one type of damage, choosing from acid, cold, lightning, fire, thunder, or radiant damage. A single weapon or armor can only benefit from one modification at a time, and you can only have a number of active modifications equal to your proficiency bonus at one time. If you exceed the maximum number of modifications, another modification of your choice which you created will become inactive. If you die, all of your modifications become inactive."
            },
            {
                "Name": "Smart Weapons",
                "Info": "Advanced targeting robotics, heat-seeking gyrojets, or any number of other upgrades allow your weapons to be used with little training or skill. Whenever a creature makes an attack with a weapon that has been modified by you, they can choose to use their intelligence modifier for the attack and damage rolls instead of dexterity or strength."
            },
            {
                "Name": "Specialized Ammo",
                "Info": "When you modify a weapon, you can allow the weapon to deal any damage type of your choosing (except for psychic). If the weapon has the reload property, you can change the damage type of the bonus damage as part of the reload action. If it does not, you may instead change the damage type during a short or long rest."
            },
            {
                "Name": "Cyberarmor",
                "Info": "You may now add up to two modifications to any weapon or armor."
            },
            {
                "Name": "Extensive Modifications",
                "Info": "A deep sound that sows fear and unease into those that hear it. As an action, you can produce a 15ft cone originating from yourself. All creatures within that cone must make a WIS saving throw against your Charisma DC. On a failure, the creature is frightened of you for 1 minute. The creature can repeat the saving throw at the end of each of its turns to end the effect early. You may use this feature twice per long rest. You must be playing an instrument to use this feature."
            },
            {
                "Name": "Overload",
                "Info": "As a bonus action you can overload a weapon’s electronic systems to deal extra damage. The next attack made with that weapon will deal twice the damage rolled. When that attack is made, or at the beginning of your next turn, the weapon is disabled. If the weapon’s next attack is a natural one, it will explode, forcing any creatures within 5 ft. to make a dexterity saving throw. On a failure they take twice the rolled damage of the weapon, or half as much on a success. The weapon will also become damaged, requiring one minute and a DC15 Weaponsmith’s tools check to repair. You can only use this feature on weapons that have the Electrical tag."
            },
        ],
        "Elite Feats": [
            {
                "Name": "This is My Weapon",
                "Info": "You may select a single weapon you own to be your signature weapon. This weapon can receive 2 additional modifications. During a short or long rest you can designate a new weapon as your signature weapon and when you do, your previous signature weapon will have all of its modifications disabled."
            },
            {
                "Name": "Masterwork Armor",
                "Info": "Most armor has a special property that comes along with it. What if there was more than one property per armor? You can combine two pieces of armor together to gain the benefits of both armors. The AC of the resulting armor is the average of both armors, rounded down. The resulting type of armor is the heavier armor. You cannot combine light and heavy armor together. The two armors cannot be the same armor. You cannot do this again with the resulting armor, and are limited to one armor of this type. If you choose to do this with a pair of armor, your current one will be unmerged."
            },
        ]
    };
}

function getSymbioteDetails() {
    return {
        "Class Stat Bonus": "WIS",
        "Hit Die": "1d8",
        "Proficiencies": [
            "Light Weapons",
            "Medium Weapons",
            "Light Armor",
            "Animal Handling"
        ],
        "Saving Throws": [
            "Strength",
            "Intelligence"
        ],
        "Feats": [
            {
                "Name": "Loyal Companion (Free Feat)",
                "Info": "You’ve earned the loyalty of an animal companion. Beasts in the system can be strange and alien; describe your companion. The beast uses a primal companion stat block you choose from the revised ranger beastmaster, and can be commanded using your bonus action. If you do not give it a command, it takes the dodge action. The creature cannot wield weapons or wear armor, but it can wear an aero rig. If the creature reaches 0 hit points, it rolls death saving throws like a player character and can be stabilized using either a DC15 medicine check or a DC15 animal handling check. On a long rest, you may replace your companion with a new companion that uses a different primal companion stat block, even if your original companion has died. You can also install a single piece of cybertech or a biomod into the body of your animal companion. Your animal companion cannot install cybertech that requires a limb that the animal doesn’t have, for example a dog cannot receive an ARM cybertech. If you lose the animal companion, their cybertech is lost with them, but if you replace an augmented animal companion with a different one during a long rest you may, on a subsequent long rest, regain the animal companion with its installed cybertech using the aforementioned replacement rules."
            },
            {
                "Name": "Rescue Training",
                "Info": "Your animal companion is now equipped with a belt of bottles filled with a concoction of healing herbs and potent alcohol. Whenever you command your animal companion using your bonus action, you can command it to administer one of these to a creature within5 ft., including itself. The target creature regains a number of hit points equal to 1d6 + your wisdom modifier. You can use this feature a number of times equal to your proficiency bonus per long rest. This feature has no effect on constructs."
            },
            {
                "Name": "Attack Hound",
                "Info": "Whenever you would make an attack, you can forgo the attack to instead allow your animal companion to make an attack."
            },
            {
                "Name": "Large Beast Training",
                "Info": "If your animal companion is either a “beast of the land” or “beast of the sea”, its size increases to large. If it is a “beast of the sky”, it will instead become medium. While you are riding a beast as a mount, you also gain the following benefits: when a creature makes an attack roll against your mount, you can use your reaction to redirect the attack to yourself. Whenever your mount is forced to roll a dexterity saving throw against an effect that would deal damage on a failed save or half as much on a success, it will instead take half the damage on a failed save and no damage on a success. Also, its Strength Score increases by +4 and its Constitution Score increases by +2."
            },
            {
                "Name": "Advanced Training",
                "Info": "A more concise set of signals allows you to command your animal companion as a free action on your turn, instead of a bonus action."
            },
            {
                "Name": "Tag-Team",
                "Info": "When your animal companion successfully hits a creature with an attack, that creature becomes marked, and will take an extra 1d4 damage from the next attack that hits it from a creature other than your animal companion."
            },
        ],
        "Elite Feats": [
            {
                "Name": "Megafauna",
                "Info": "As an action, you can cause your animal companion to grow in size. When you do, the companion’s size increases by one category, it gains 25 temporary HP, and all of its attacks deal an extra 1d4 damage. These benefits last for 30 minutes, or until you end the effect early, and you can use this feature once per short or long rest."
            },
            {
                "Name": "Support Animal",
                "Info": "Whenever a creature within5 ft. of your animal companion is targeted by an attack or forced to make a saving throw, your companion can use its reaction to impose disadvantage on the attack roll or advantage on the saving throw accordingly. Whenever your animal companion hits a creature with an attack, the next attack against the target creature from a creature other than your companion will have advantage."
            },
        ]
    };
}

function getBotsmithDetails() {
    return {
        "Class Stat Bonus": "INT",
        "Hit Die": "1d6",
        "Proficiencies": [
            "Light Weapons",
            "Light Armor",
            "Mechanical Tools"
        ],
        "Saving Throws": [
            "Charisma",
            "Intelligence"
        ],
        "Feats": [
            {
                "Name": "Mechanist (Free Feat)",
                "Info": "As an action, while you have access to your Mechanical Tools, you can construct a robot companion and deploy it in an empty space you can see within 30 ft of you. As a bonus action, or as part of the action spent deploying the robot, you can command the robot to use its movement and action as you see fit. If you don’t give a robot a command, it will follow you and take the dodge action. The robots you make have a limited charge time, and will deactivate and self-destruct after 10 minutes, leaving no valuable scrap. You can only have one robot active at a time, and attempting to deploy a new robot while another is active will cause the previous robot to self-destruct. You can deploy a robot a number of times equal to your Intelligence modifier per long rest. Below is a list of the robots you can choose from when you use this feature:" +
                "\n<dl><dt>Spider Turret</dt>" +
                "<dd>A four-legged mobile sentry turret armed with a powerful mini-cannon, designed for flexible security plans that might require repositioning defensive assets for better area control. It cannot take any action besides dash, disengage, attack, or dodge.</dd>" +
                "\n<dt>K-9 Pursuit Drone</dt>" +
                "<dd>A law-enforcement and bounty hunting robot modeled after canine physiology. Its high-end array of sensors, which include olfactory, radar, and night vision, allow it to track hidden fugitives or contraband with ease.</dd>" +
                "\n<dt>Goliath Heavy Android</dt>" +
                "<dd>A humanoid robot with a large, durable chassis designed to survive the heavy impacts in construction and mining jobs, the model has since seen widespread use as a cheap bodyguard robot after a series of code hacks were released on the starnet.</dd></dl>"
            },
            {
                "Name": "Fixer",
                "Info": "You gain a repair bug, a tiny bug-like drone used by scavengers and technicians to perform remote repairs. As a bonus action, you can use the drone to repair a construct or vehicle you can see within 60 ft of you and isn’t behind cover, restoring 1d6+INT lost HP to the target. You can use this feature a number of times equal to your Intelligence modifier, or you can spend battery charges instead. If you spend battery charges, the healing increases by 1d6 for every battery charge over 1 that you spend."
            },
            {
                "Name": "Neural Shift",
                "Info": "As an action, you can activate a small neural implant which links your brain to your robots, causing you to see, hear, and feel through their senses. While this feature is active, your own body is paralyzed and blind, and you control the robots as if they were your own body, spending their movement, action, reaction, and bonus action at will. In addition, you can use any of your class and background features while controlling a robot in this way, although the robot you are controlling becomes the source of the effects. You can switch back to your normal body as a free action at the start of your turn, or automatically when the robot you are controlling is destroyed."
            },
            {
                "Name": "Extended Battery Life",
                "Info": "Any robots you deploy will remain active for an hour after being deployed."
            },
            {
                "Name": "The Chain",
                "Info": "Whenever you use a bonus action to command one of the robots you’ve deployed using the “Mechanist” feat, you may also, for free, command a single construct you control and created as part of deploying a gadget, such as the Utility Drone."
            },
            {
                "Name": "Limited AI",
                "Info": "Your robots that you deploy using the Mechanist feat are upgraded with limited AI, granting them ability to respond to more complex commands. Now, whenever you give a robot a command, it will continue to follow that command until the job is done. For example, if you command it to guard an area, it will remain there and defend it from intruders until it receives a different command or it runs out of charge."
            },
        ],
        "Elite Feats": [
            {
                "Name": "Twin Automata",
                "Info": "You can have up to 2 robots deployed by your Mechanist feat at the same time.They must be deployed using separate actions, but can both be commanded using the same bonus action."
            },
            {
                "Name": "Improved Machines",
                "Info": "Each of the robots provided by your Mechanist feat are improved." +
                "\n<dl><dd>The K-9 Pursuit drone becomes the K-10 Lockjaw; any creature hit by the K-10’s bite attack becomes grappled and restrained (escape DC 13); the K-10 can only have one creature restrained in this way at a time.</dd>" +
                "\n<dd>The Spider Turret becomes the Arachnotron Autoturret, which can make two attacks whenever it takes the attack action. In addition, its walk and climb speeds both become 30ft.</dd>" +
                "\n<dd>The Goliath Heavy Android becomes the Golem Assault Android, which deals 1d8 +2 + PB bludgeoning damage with its attacks and whenever it uses its Defender ability it gains resistance to the damage of the triggering attack.</dd></dl>"
            },
        ]
    };
}