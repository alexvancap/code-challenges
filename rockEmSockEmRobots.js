function fight(r1, r2, tactic) {
    if (r1.speed < r2.speed) [r1, r2] = [r2, r1];  
    while(r1.tactics.length || r2.tactics.length) {
        if (r1.tactics.length) r2.health -= tactic[r1.tactics.shift()];
        if (r2.health <= 0) break;
        if (r2.tactics.length) r1.health -= tactic[r2.tactics.shift()];
        if (r2.health <= 0) break;
    }
    if (r1.health == r2.health) return "The fight was a draw.";
    return `${(r1.health>r2.health)?r1.name:r2.name} has won the fight.`;
}