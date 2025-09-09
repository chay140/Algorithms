function solution(skill, skill_trees) {
    const non_relatable_skill = new RegExp(`[^${skill}]`, 'g');
    skill_trees = skill_trees.map(e => e.replaceAll(non_relatable_skill, ''));
    return skill_trees.filter(skill_tree => skill.startsWith(skill_tree)).length;
}