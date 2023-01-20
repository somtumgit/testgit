import {ref} from 'vue';

const useCounter = function(initailCount=0,stepSize=1) {
    const count = ref(initailCount);
    const incrementCount = function() {
        count.value += stepSize;
    }

    return {
        count,
        incrementCount
    }
}

export default useCounter;
