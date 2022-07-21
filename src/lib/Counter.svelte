<script>
  let count = 3
  const increment = () => {
    count += 1
  }
</script>

<button on:click={increment}>
  count is {count}
</button>
