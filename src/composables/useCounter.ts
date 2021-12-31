import { onMounted, Ref, ref } from "vue";

function useCounter(): { counter: Ref<number>; increase: () => void } {
  const counter = ref(0);

  const increase = () => {
    counter.value++;
  };

  onMounted(() => {
    console.log("mounted");
  });

  return {
    counter,
    increase,
  };
}

export { useCounter };
