export default (state, workouts) => {

    const extractedWorkouts = workouts.filter((workout) => workout.value === state.value);

    let a, b, c;
    a = extractedWorkouts[Math.floor(Math.random() * extractedWorkouts.length)];
    b = extractedWorkouts[Math.floor(Math.random() * extractedWorkouts.length)];
    c = extractedWorkouts[Math.floor(Math.random() * extractedWorkouts.length)];

    do {
        a = extractedWorkouts[Math.floor(Math.random() * extractedWorkouts.length)];
    } while(a === c);
    
    do {
        b = extractedWorkouts[Math.floor(Math.random() * extractedWorkouts.length)];
    } while(b === c || b === a);

    switch(state.value){
        case 'chest':
                return [
                    a, 
                    b, 
                    c
                ]            
            case 'back':
                return [
                    a, 
                    b, 
                    c
                ]            
            case 'shoulders':
                return [
                    a, 
                    b, 
                    c
                ]            
            case 'biceps':
                return [
                    a, 
                    b, 
                    c
                ]            
            case 'forearms':
                return [
                    a, 
                    b, 
                    c
                ]            
            case 'triceps':
                return [
                    a, 
                    b, 
                    c
                ]            
            case  'legs':
                return [
                    a, 
                    b, 
                    c
                ]            
            case 'abs':
                return [
                    a, 
                    b, 
                    c
                ]            
            case 'cardio':
                return [
                    a, 
                    b, 
                    c
                ]            
            case 'kettlebells':
                return [
                    a, 
                    b, 
                    c
                ]            
            default:
                return state;
            }
        }