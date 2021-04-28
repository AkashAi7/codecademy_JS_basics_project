const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.'
     //   break;
    }
    if (percentSharedDNA >= 35 &&percentSharedDNA <= 99) {
        return 'You are likely parent and child or full siblings.'
       // break;
    }
    if (percentSharedDNA >= 14&&percentSharedDNA <= 34) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
       // break;
    }
    if (percentSharedDNA >= 6&&percentSharedDNA <= 13) {
        return 'You are likely 1st cousins.'
       // break;
    }
    if (percentSharedDNA >= 3&&percentSharedDNA <= 5) {
        return 'You are likely 2nd cousins.'
       // break;
    }
    if (percentSharedDNA >= 1&&percentSharedDNA <= 3) {
        return 'You are likely 3rd cousins'
       // break;
    }
    else{
    return 'You are likely not related.'
    //break;
}
}
console.log(whatRelation(34))
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

console.log(whatRelation(3))
// Should print 'You are likely 2nd cousins.'
