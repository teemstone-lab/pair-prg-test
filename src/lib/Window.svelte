<script lang="ts">
  let count = 0
  let windowObjs = []
  const initWindowCount = 3

  const addWindow = () => {
    windowObjs = windowObjs.concat(`Window${count}`)
    count += 1
  }

  const closeWindow = (name) => () => {
    windowObjs = windowObjs.filter((el) => el !== name)
  }

  while (count < initWindowCount) {
    addWindow()
  }
</script>

<button on:click={addWindow}>Add Window </button>
<div role="grid" id="panel">
  {#each windowObjs as window_obj}
    <div role="gridcell" id={window_obj} class="window_obj">
      <div id={`${window_obj}_topbar`} class="window_topbar">
        {window_obj}
      </div>
      <div id={`${window_obj}_content`} class="window_content">
        <button class="btn_close" on:click={closeWindow(window_obj)}>X</button>
      </div>
    </div>
  {:else}
    <p>loading...</p>
  {/each}
</div>

<style>
  #panel {
    width: 100%;
    height: 400px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 8px;
    border: 1px solid black;
    text-align: center;
  }

  .window_obj {
    width: 100%;
    min-height: 100px;
    margin: 0px;
    text-align: center;
    font-size: 0.8rem;
  }

  .window_topbar {
    background: #eeeeee;
    min-height: 10px;
  }

  .btn_close {
    background: inherit;
    border: 0;
  }

  .window_content {
    background: #ffff77;
    min-height: 90px;
  }
</style>
