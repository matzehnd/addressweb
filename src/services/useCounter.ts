import { Ref, ref } from "vue";

function useCounter(): { counter: Ref<number>; increase: () => void } {
  const counter = ref(0);

  const increase = () => {
    counter.value++;
  };

  return {
    counter,
    increase,
  };
}

export { useCounter };
